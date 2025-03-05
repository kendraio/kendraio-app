interface FetchSchemaResult {
    url: string;
    method: string;
    headers?: Record<string, string>;
}

interface MiddlewareResult {
    request?: FetchSchemaResult;
    parsed?: any;
}

type MiddlewareFunction = (request: FetchSchemaResult) => Promise<MiddlewareResult>;

interface DereferenceOptions {
    middleware?: MiddlewareFunction;
    baseUrl?: string | null;
    validateSchema?: boolean;
}

export class JSONSchemaRefParser {
  private cache: Map<string, any> = new Map();

  defaultMiddleware(request: FetchSchemaResult): Promise<MiddlewareResult> {
    // Default middleware: Does nothing, just returns the original request.
    return Promise.resolve({ request });
  }

  async dereference(schemaOrURL: string | any, options: DereferenceOptions = {}) {
    const { middleware = this.defaultMiddleware, baseUrl = null } = options;

    const schema = typeof schemaOrURL === 'string' ?
      await this.fetchSchema(schemaOrURL, middleware) :
      schemaOrURL;

      const resolvedBaseUrl = baseUrl || (typeof schemaOrURL === 'string' ? schemaOrURL : window.location.href);

    return this.resolveRefs(schema, resolvedBaseUrl, new Set(), middleware);
  }

  async fetchSchema(url: string, middleware: MiddlewareFunction): Promise<any>{
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    const initialRequest = { url, method: 'GET' };
    const middlewareResult = await middleware(initialRequest);

    if (middlewareResult && middlewareResult.parsed) {
      // Middleware provided a parsed result, so bypass fetching
      this.cache.set(url, middlewareResult.parsed);
      return middlewareResult.parsed;
    }

    const request = (middlewareResult && middlewareResult.request) || initialRequest;
    try {
      const response = await fetch(request.url, request);

      if (!response.ok) {
        let errorBody = '';
        try {
            errorBody = await response.text(); // Try to get error details from the response
        } catch (e) {
            errorBody = `(Error reading response body: ${e.message})`;
        }
        throw new Error(`Failed to fetch ${request.url}: ${response.status} ${response.statusText}.  Response body: ${errorBody}`);
      }

      const text = await response.text();
      const parsed = this.parseContent(text, request.url);
      this.cache.set(url, parsed);
      return parsed;
    } catch (error) {
      console.error("Error fetching schema:", error);
      throw error;
    }
  }

  parseContent(text, url) {
    try {
      return JSON.parse(text);
    } catch (error) {
      throw new Error(`Error parsing JSON in ${url}: ${error.message}`);
    }
  }

  async resolveRefs(schema, baseUrl, seen, middleware) {
    if (typeof schema !== 'object' || schema === null) {
      return schema;
    }

    if (seen.has(schema)) {
      return schema; // Prevent infinite recursion on circular refs
    }
    seen.add(schema);

    if (Array.isArray(schema)) {
      const resolvedArray = [];
      for (const item of schema) {
        resolvedArray.push(await this.resolveRefs(item, baseUrl, seen, middleware));
      }
      return resolvedArray;
    }

    if (schema.$ref && typeof schema.$ref === 'string') {
      const [refUrl, refPointer] = schema.$ref.split('#');
      const fullRefUrl = refUrl ? new URL(refUrl, baseUrl).href : baseUrl;
      let resolvedSchema = await this.fetchSchema(fullRefUrl, middleware);

      if (refPointer) {
        resolvedSchema = this.resolvePointer(resolvedSchema, refPointer);
      }

      if (Object.keys(schema).length > 1) {
        const cloned = { ...resolvedSchema };
        for (const key in schema) {
          if (key !== '$ref') {
            cloned[key] = schema[key];
          }
        }
        return this.resolveRefs(cloned, baseUrl, seen, middleware); // resolve the merged object
      }

      return this.resolveRefs(resolvedSchema, fullRefUrl, seen, middleware); // Recursively resolve
    }

    const resolvedObject = {};
    for (const key in schema) {
      resolvedObject[key] = await this.resolveRefs(schema[key], baseUrl, seen, middleware);
    }
    return resolvedObject;
  }

  resolvePointer(schema, pointer) {
    if (!pointer) {
      return schema;
    }
    const parts = pointer.substring(1).split('/').map(part =>
      part.replace(/~1/g, '/').replace(/~0/g, '~')
    );
    let current = schema;
    for (const part of parts) {
      if (current && typeof current === 'object' && Object.hasOwn(current, part)) {
        current = current[part];
      } else {
        throw new Error(`Invalid JSON pointer "${pointer}" in schema: ${JSON.stringify(schema, null, 2)}.  Part: ${part}`);
      }
    }
    return current;
  }
}
