import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { get, has, includes, isString, toUpper, set } from 'lodash-es';
import { ContextDataService } from '../../services/context-data.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { catchError, expand, reduce, takeWhile } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { mappingUtility } from '../mapping-block/mapping-util';
import { signAwsSigV4 } from './aws-sigv4';
import { AppSettingsService } from '../../services/app-settings.service';
import { v4 as uuid } from 'uuid';
import { computeMetadata } from './http-utils';

@Component({
  selector: 'app-http-block',
  templateUrl: './http-block.component.html',
  styleUrls: ['./http-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  responseType: 'json' = 'json';

  hasError = false;
  errorMessage = '';

  errorData = {};
  errorBlocks = [];

  isLoading = false;
  statusCode: number = null; // Add statusCode property to store the HTTP status

  contextErrorKey = null;
  contextErrors = '';
  prevContextKey = '';

  responseSizeFormatted?: string;
  responseHash?: string;
  responseSizeBytes?: number;

  // Debug visibility properties
  showStatusInfo = false;
  showDebugContext = false;
  showDebugConfig = false;

  constructor(
    private readonly contextData: ContextDataService,
    private readonly notify: MatSnackBar,
    private readonly http: HttpClient,
    private readonly cdr: ChangeDetectorRef,
    private readonly settings: AppSettingsService
  ) {
  }

  ngOnInit() {
  }

  private updateDebugVisibility() {
    // Check if debug is forced on in the block config
    const forceDebug = get(this.config, 'debug', false);
    // Check global debug mode setting
    const globalDebugMode = this.settings.get('debugMode', false);
    
    // Status info is shown for any general debug mode
    this.showStatusInfo = forceDebug || globalDebugMode;
    
    // For context display: only show if debugContext is explicitly set in config
    this.showDebugContext = get(this.config, 'debugContext', false);
    
    // For config display: only show if debugConfig is explicitly set in config
    this.showDebugConfig = get(this.config, 'debugConfig', false);
  }

  ngOnChanges(changes) {
    console.log('Changes in HTTP block', changes);
    console.log('Changes in HTTP block b');

    this.updateDebugVisibility();

    const keyChanges = Object.keys(changes);
    this.contextErrorKey = get(this.config, 'contextErrorKey', null);
    if (this.context.__key !== this.prevContextKey) {
      // context has changed
      this.prevContextKey = this.context.__key;
      // update errors from context if used
      if (this.contextErrorKey) {
        this.contextErrors = mappingUtility(this.context, this.contextErrorKey) || '';
      }
      if (keyChanges.length === 1 && keyChanges.includes('context')) {
        // exit if only the context was changed
        return;
      }
    }
    if (get(this.config, 'skipInit', true) && get(changes, 'model.firstChange', false)) {
      return;
    }


    
    this.responseType = get(this.config, 'responseType', 'json');
    this.errorBlocks = get(this.config, 'onError.blocks', []);

    if (this.statusCode) {
      console.log('Status code is not null, skipping request');
      if (this.isLoading) {
        this.isLoading = false;
      }
      return;
    } 
    
    this.makeRequest();
  }

  /**
   * Makes an HTTP request based on the provided configuration and handles the response.
   * It also supports pagination by calling the getAllPages method when followPaginationLinksMerged option is enabled.
   */
  async makeRequest() {
    if (this.statusCode) {
      console.log('Status code is not null, skipping request');
      if (this.isLoading) {
        this.isLoading = false;
      }
      return;
    } 
    this.hasError = false;
    this.isLoading = true;
    const method = get(this.config, 'method');
    if (!method) {
      this.errorMessage = 'No HTTP method provided';
      this.errorData = {};
      this.errorBlocks = [];
      this.hasError = true;
      this.isLoading = false;
      return;
    }
    if (!includes(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'BPUT'], toUpper(method))) {
      this.errorMessage = 'HTTP method not supported';
      this.errorData = {};
      this.errorBlocks = [];
      this.hasError = true;
      this.isLoading = false;
      return;
    }
    let url = this.constructEndpointUrl(this.config);
    let headers = new HttpHeaders(this.getPayloadHeaders());

    const useProxy = get(this.config, 'useProxy', false);
    if (useProxy) {
      headers = headers.append('Target-URL', url);
      const appSettings = JSON.parse(localStorage.getItem('core.variables.settings') || '{}');
      const defaultProxy = get(appSettings, 'defaultCorsProxy', 'https://proxy.kendra.io/');
      url = get(this.config, 'proxyUrl', defaultProxy);
      if (!url) {
        this.hasError = true;
        this.errorMessage = 'Invalid proxy URL';
        this.isLoading = false;
        return;
      }
    }

    if (has(this.config, 'authentication.type')) {
      const valueGetters = get(this.config, 'authentication.valueGetters', {});
      const context = { ...this.config.authentication, ...this.contextData.getGlobalContext(valueGetters, this.context, this.model) };
      switch (get(this.config, 'authentication.type')) {
        case 'basic-auth':
          if (has(context, 'username') && has(context, 'password')) {
            const { username, password } = context;
            headers = headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
          }
          break;
        case 'bearer':
          if (has(context, 'jwt')) {
            const { jwt } = context;
            headers = headers.append('Authorization', `Bearer ${jwt}`);
          }
          break;
        case 'aws-sigv4': {
          const rawAccessKeyId = get(this.config, 'authentication.accessKeyId', '');
          const rawAccessKeyIdGetter = get(this.config, 'authentication.accessKeyIdGetter', null);
          const actualAccessKeyId = rawAccessKeyIdGetter
            ? mappingUtility({ data: this.model, context: this.context }, rawAccessKeyIdGetter)
            : rawAccessKeyId;

          const rawSecretKey = get(this.config, 'authentication.secretKey', '');
          const rawSecretKeyGetter = get(this.config, 'authentication.secretKeyGetter', null);
          const actualSecretKey = rawSecretKeyGetter
            ? mappingUtility({ data: this.model, context: this.context }, rawSecretKeyGetter)
            : rawSecretKey;

          if (!url) {
            this.hasError = true;
            this.errorMessage = 'No URL to sign for aws-sigv4 authentication';
            this.isLoading = false;
            return;
          }
          if (!actualAccessKeyId || !actualSecretKey) {
            this.hasError = true;
            this.errorMessage = 'Missing AWS credentials (accessKeyId or secretKey)';
            this.isLoading = false;
            return;
          }
          
          // Handle payload based on HTTP method
          const methodUpper = method.toUpperCase();
          const isBinary = methodUpper === 'BPUT';
          
          // For GET, DELETE methods use empty string as payload
          let actualPayload: string | ArrayBuffer = '';
          if (['PUT', 'POST', 'PATCH'].includes(methodUpper)) {
            actualPayload = this.getPayload();
          } else if (methodUpper === 'BPUT') {
            const bufferContent = get(this.model, 'content'); // Get potential buffer into temp variable
            const actualType = bufferContent?.constructor?.name || typeof bufferContent;
            let snippet = '';

            if (!(bufferContent instanceof ArrayBuffer)) {
              try {
              snippet = JSON.stringify(bufferContent).slice(0, 100);
              } catch {
              snippet = '[unserialisable object]';
              }

              this.hasError = true;
              this.errorMessage = `Invalid binary payload with type: ${actualType}` + (snippet ? `\nSnippet: ${snippet}` : '');
              this.isLoading = false;
              return;
            }
            actualPayload = bufferContent; // Assign to actualPayload only if valid
          }
          
          try {
            const { headers: sigHeaders } = await signAwsSigV4(method.toUpperCase() === 'BPUT' ? 'PUT' : method, useProxy ? headers.get('Target-URL')! : url, actualPayload, actualAccessKeyId, actualSecretKey);
            // Merge sigHeaders into our existing headers
            Object.keys(sigHeaders).forEach(k => {
              if (k.toLowerCase() === 'host') return;
              headers = headers.set(k, sigHeaders[k]);
            });
          } catch (err) {
            this.hasError = true;
            this.errorMessage = (err as Error).message;
            this.isLoading = false;
            return;
          }
          break;
        }
        default:
          console.log('Unknown authentication type');
      }
    }

    // TODO: decide what to do with response when error condition
    switch (toUpper(method)) {
      case 'GET':
        // force the service worker bypass. 
        // When calls are passed to the service worker, they can be invisibly cached
        // by forcing a bypass, we have more control to force a call to take place
        headers = headers.append('ngsw-bypass', 'true');
        if (get(this.config, 'followPaginationLinksMerged', false)) {
          this.getAllPages(url, headers, this.responseType);
        } else {
          this.http.get(url, { headers, responseType: this.responseType, observe: 'response' })
            .pipe(
              catchError(error => {
                this.hasError = true;
                this.errorMessage = error.message;
                this.errorData = error;
                this.isLoading = false;

                // Return an object with hasError flag for our internal error handling
                return of({
                  body: { error, hasError: true, errorMessage: this.errorMessage },
                  status: error.status || 500,
                  statusText: error.statusText || 'Error',
                  hasError: true // Flag to identify error responses in subscribe
                });
              })
            )
            .subscribe((response: HttpResponse<any> | any) => {
              if (this.statusCode) {
                console.log('Status code is not null, skipping request');
                return;
              } 
              this.isLoading = false;
              this.hasError = false;
              if (!response.hasError) {
                this.errorBlocks = [];
              }
              this.outputResult(response.body, response.status);
            });
        }
        break;
      case 'DELETE':
        this.http.delete(url, { headers, responseType: this.responseType, observe: 'response' })
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              this.errorData = error;
              this.isLoading = false;
              return of({
                body: { error, hasError: true, errorMessage: this.errorMessage },
                status: error.status || 500,
                statusText: error.statusText || 'Error',
                hasError: true // Flag to identify error responses in subscribe
              });
            })
          )
          .subscribe((response: HttpResponse<any> | any) => {
            this.isLoading = false;
            this.hasError = false;
            if (!response.hasError) {
              this.errorBlocks = [];
            }
            this.outputResult(response.body, response.status);
          });
        break;
      case 'BPUT': // binary PUT
        const isArrayBufferWithContent = obj => (obj instanceof ArrayBuffer) && obj.byteLength > 0;
        const payloadB = get(this.model, 'content');
        if (!isArrayBufferWithContent(payloadB)) {
          this.isLoading = false;
          this.hasError = true;
          this.errorMessage = `${toUpper(method)} of empty payload prevented in http block`;
          this.errorData = {};
          this.errorBlocks = [];

          return;
        }
        this.http.put(url, payloadB, { headers, responseType: this.responseType, observe: 'response' })
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              this.errorData = error;
              this.isLoading = false;
              return of({
                body: { error, hasError: true, errorMessage: this.errorMessage },
                status: error.status || 500,
                statusText: error.statusText || 'Error',
                hasError: true // Flag to identify error responses in subscribe
              });
            })
          )
          .subscribe((response: HttpResponse<any> | any) => {
            this.isLoading = false;
            this.hasError = false;
            if (!response.hasError) {
              this.errorBlocks = [];
            }
            this.outputResult(response.body, response.status);
            const notify = get(this.config, 'notify', true);
            if (notify) {
              const message = 'API update successful';
              this.notify.open(message, 'OK', {
                duration: 2000,
                verticalPosition: 'top'
              });
            }
          });
        break;
      case 'PUT':
      case 'POST':
      case 'PATCH':
        const isEmptyObject = obj => (obj instanceof Object && Object.keys(obj).length === 0);
        let payload = this.getPayload();
        if ('application/x-www-form-urlencoded' === get(this.config, 'requestType', 'application/json')) {
          payload = (new HttpParams({ fromObject: payload })).toString();
          headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        if (isEmptyObject(payload)) {
          this.isLoading = false;
          this.hasError = true;
          this.errorMessage = `${toUpper(method)} of empty payload prevented in http block`;
          this.errorData = {};
          this.errorBlocks = [];

          return;
        }
        const sub = (toUpper(method) === 'PUT')
          ? this.http.put(url, payload, { headers, responseType: this.responseType, observe: 'response' })
          : (toUpper(method) === 'PATCH') ?
            this.http.patch(url, payload, { headers, responseType: this.responseType, observe: 'response' })
            : this.http.post(url, payload, { headers, responseType: this.responseType, observe: 'response' });
        sub
          .pipe(
            catchError(error => {
              this.hasError = true;
              this.errorMessage = error.message;
              this.errorData = error;
              this.isLoading = false;
              return of({
                body: { error, hasError: true, errorMessage: this.errorMessage },
                status: error.status || 500,
                statusText: error.statusText || 'Error',
                hasError: true // Flag to identify error responses in subscribe
              });
            })
          )
          .subscribe((response: HttpResponse<any> | any) => {
            this.isLoading = false;
            this.hasError = false;
            if (!response.hasError) {
              this.errorBlocks = [];
            }

            this.outputResult(response.body, response.status);

            const notify = get(this.config, 'notify', true);
            if (notify) {
              const message = 'API update successful';
              this.notify.open(message, 'OK', {
                duration: 2000,
                verticalPosition: 'top'
              });
            }
          });
        break;
    }
  }

  /**
   * Fetches paginated API results by recursively getting each page and merging the results.
   * @param {string} url - The endpoint URL.
   * @param {HttpHeaders} headers - The HttpHeaders for the request.
   * @param {string} responseType - The type of response expected from the server.
   */
  getAllPages(url, headers, responseType) {
    // Expands through pages recursively based on nextPageUrl
    this.http.get(url, { headers, responseType, observe: 'response' })
      .pipe(
        expand((response: HttpResponse<any>) => {
          const linkHeader = response.headers.get('link');
          const nextPageUrl = this.extractNextPageUrl(linkHeader);

          if (nextPageUrl) {
            if (get(this.config, 'useProxy', false)) {
              headers = headers.delete('Target-URL');
              headers = headers.append('Target-URL', nextPageUrl);
            } else {
              url = nextPageUrl;
            }
            return this.http.get(url, { headers, responseType, observe: 'response' });
          } else {
            return EMPTY;
          }
        }),
        takeWhile(response => response.status === 200), // Stop when there's an error or nextPageUrl is null
        catchError(error => {
          this.hasError = true;
          this.errorMessage = error.message;
          this.errorData = error;
          this.isLoading = false;
          return of([]);
        }),
        reduce((accumlated_results: any[], response: HttpResponse<any>) => accumlated_results.concat(response.body || []), [])
      )
      .subscribe(results => {
        this.isLoading = false;
        this.hasError = false;
        this.outputResult(results, 200);
      });
  }

  /**
   * Extracts the next page URL from the link header in the HttpResponse.
   * @param {string} linkHeader - The link header string from HttpResponse.
   * @return {string|null} - The next page URL if it exists, or null otherwise.
   */
  extractNextPageUrl(linkHeader) {
    /**
     * The `link` header should follow the format outlined by RFC 5988 Web Linking. 
     * It should contain a list of link relations and their respective URLs, separated 
     * by commas. Each link consists of the URL enclosed in angle brackets `< >` 
     * followed by a semicolon and the relation type specified as `rel="relation-type"`.
     * 
     * Example of a link header:
     * `<linkHeader> = '<https://example.com/data?page=2>; rel="next", 
     *                 <https://example.com/data?page=5>; rel="last"'`
     * 
     * In this example, there is a "next" relation pointing to the second page of results,
     * and a "last" relation pointing to the fifth (and final) page of results.
     * 
     * The `extractNextPageUrl` method will specifically look for a link with the `rel="next"` 
     * attribute and return its URL. In case there's no "next" relation, the method will 
     * return null, which is considered the stop condition for pagination. 
     */
    if (!linkHeader) {
      return null;
    }


    // We use a regex to extract the URL and relation type from each link,
    // and return an object with the URL and relation type.
    const links = linkHeader.split(',').map(link => {
      // The regex will match the first pair of angle brackets enclosing the URL,
      // and the first pair of double quotes enclosing the relation type.
      // Example: `<https://example.com/data?page=2>; rel="next"`
      // The regex will match `<https://example.com/data?page=2>` and `next`
      // and return an object with the URL and relation type.

      const matches = /<(.*)>; rel="(.*)"/.exec(link.trim());
      if (matches?.length === 3) {
        return { url: matches[1], rel: matches[2] };
      }
    });

    // Get the first link that matches the condition:
    const nextPageLink = links.find(link => link?.rel === 'next');
    // We return the URL of the next page if it exists, or null otherwise.
    return nextPageLink?.url || null;
  }

  async outputResult(data: any, statusCode?: number) {
    if (statusCode) {
      this.statusCode = statusCode;
      const { responseSizeFormatted, responseHash, responseSizeBytes } = await computeMetadata(data);
      this.responseSizeFormatted = responseSizeFormatted;
      this.responseHash = responseHash;
      this.responseSizeBytes = responseSizeBytes;

      // Always save metadata to context (following context-save-block pattern)
      const metadata = {
        statusCode,
        responseSizeFormatted,
        responseHash,
        responseSizeBytes,
        timestamp: new Date().toISOString(),
        endpoint: this.constructEndpointUrl(this.config)
      };
      
      set(this.context, 'httpMetadata', metadata);
      this.context.__key = uuid();


      if (this.oldBucketUse()) {
        this.output.emit({ data, statusCode, responseSizeFormatted, responseHash, responseSizeBytes });
      } else {
        this.output.emit(data);
      }

      console.log('Response size:', responseSizeFormatted);
      console.log('Response size (bytes):', responseSizeBytes);
      console.log('Response hash:', responseHash);
      console.log('Status code:', statusCode);
      console.log('Metadata saved to context.httpMetadata');
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    } else {
      // Always emit the data to the next block
      this.output.emit(data);
    }
  }

  private showDeprecationWarning(): void {
    const warningMessage = '⚠️ Warning: AWS SigV4: Deprecated output format detected. Use context.httpMetadata for response metadata.';
    console.warn(warningMessage);
    
    this.notify.open(
       warningMessage,
      'DISMISS',
      {
        duration: 8000,
        verticalPosition: 'top',
        panelClass: ['warning-snackbar']
      }
    );
  }

  private oldBucketUse(): boolean {
    const forceOldBucketFormat = get(this.config, 'useOldBucketDataFormat', false);
    const showWarning = get(this.config, 'oldBucketUseWarning', true);
    const authType = get(this.config, 'authentication.type');
    const bucketUse = authType === 'aws-sigv4';

    const shouldUseLegacyFormat = forceOldBucketFormat || bucketUse;

    if (shouldUseLegacyFormat && showWarning) {
      this.showDeprecationWarning();
    }

    return shouldUseLegacyFormat;
  }

  getPayloadHeaders() {
    const headers = get(this.config, 'headers', {});
    return Object.keys(headers).reduce((a, key) => {
      a[key] = mappingUtility({ data: this.model, context: this.context }, headers[key]);
      return a;
    }, {});
  }

  getPayload() {
    const payloadMapping = get(this.config, 'payload');
    if (payloadMapping) {
      return mappingUtility({ data: this.model, context: this.context }, payloadMapping);
    }
    return this.model;
  }

  constructEndpointUrl(config) {
    if (isString(get(config, 'endpoint', ''))) {
      return config.endpoint;
    }
    const endpoint = this.contextData.getFromContextWithModel(config.endpoint, this.model, this.context);
    if (isString(endpoint)) {
      return endpoint;
    }
    const protocol = get(endpoint, 'protocol', 'https:');
    const host = get(endpoint, 'host', '');
    const pathname = get(endpoint, 'pathname', '/');
    const query = get(endpoint, 'query', []);
    const reduceQuery = _q => Object.keys(_q).map(key => `${key}=${_q[key]}`, []).join('&');

    return `${protocol}//${host}${pathname}?${reduceQuery(query)}`;
  }
}
