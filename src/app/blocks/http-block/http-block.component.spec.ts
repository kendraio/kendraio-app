import { HttpBlockComponent } from './http-block.component';
import { ContextDataService } from '../../services/context-data.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('HttpBlockComponent', () => {
  let component: HttpBlockComponent;
  let contextDataServiceMock: jasmine.SpyObj<ContextDataService>;
  let httpClientMock: jasmine.SpyObj<HttpClient>;
  let matSnackBarMock: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    contextDataServiceMock = jasmine.createSpyObj('ContextDataService', ['getGlobalContext', 'getFromContextWithModel']);
    httpClientMock = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete', 'patch']);
    matSnackBarMock = jasmine.createSpyObj('MatLegacySnackBar', ['open']);
    component = new HttpBlockComponent(contextDataServiceMock, matSnackBarMock, httpClientMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructEndpointUrl', () => {
    it('should construct a simple string endpoint', () => {
      const config = { endpoint: 'https://example.com/api' };
      const url = component.constructEndpointUrl(config);
      expect(url).toBe('https://example.com/api');
    });

    it('should construct an endpoint from an object', () => {
      const config = {
        endpoint: {
          protocol: 'https:',
          host: 'example.com',
          pathname: '/api',
          query: { id: '123' }
        }
      };
      contextDataServiceMock.getFromContextWithModel.and.returnValue(config.endpoint);
      const url = component.constructEndpointUrl(config);
      expect(url).toBe('https://example.com/api?id=123');
    });
  });

  describe('makeRequest', () => {
    beforeEach(() => {
      component.context = { __key: 'test' };
      component.model = {};
    });

    it('should make a GET request', (done: DoneFn) => {
      component.config = {
        method: 'GET',
        endpoint: 'https://example.com/api'
      };
      httpClientMock.get.and.returnValue(of({ data: 'test' }));
      component.output.subscribe(output => {
        expect(output).toEqual({ data: 'test' });
        expect(httpClientMock.get).toHaveBeenCalledWith('https://example.com/api', jasmine.any(Object));
        done();
      });
      component.makeRequest();
    });

    it('should make a POST request with a payload', (done: DoneFn) => {
      component.config = {
        method: 'POST',
        endpoint: 'https://example.com/api'
      };
      component.model = { foo: 'test' };
      httpClientMock.post.and.returnValue(of({ success: true }));
      component.output.subscribe(output => {
        expect(output).toEqual({ success: true });
        expect(httpClientMock.post).toHaveBeenCalledWith('https://example.com/api', { foo: 'test' }, jasmine.any(Object));
        done();
      });
      component.makeRequest();
    });

    it('should make a PUT request with form-encoded data', (done: DoneFn) => {
      component.config = {
        method: 'PUT',
        endpoint: 'https://example.com/api',
        requestType: 'application/x-www-form-urlencoded'
      };
      component.model = { username: 'test', password: 'secret' };
      httpClientMock.put.and.returnValue(of({ success: true }));
      component.output.subscribe(() => {
        const callArgs = httpClientMock.put.calls.mostRecent().args;
        expect(callArgs[1]).toBe('username=test&password=secret');
        const headers = callArgs[2].headers as HttpHeaders;
        expect(headers.get('Content-Type')).toBe('application/x-www-form-urlencoded');
        done();
      });
      component.makeRequest();
    });

    it('should handle BPUT requests with binary data', (done: DoneFn) => {
      const binaryData = new ArrayBuffer(8);
      component.config = {
        method: 'BPUT',
        endpoint: 'https://example.com/upload'
      };
      component.model = { content: binaryData };
      httpClientMock.put.and.returnValue(of({ success: true }));
      component.output.subscribe(() => {
        expect(httpClientMock.put).toHaveBeenCalledWith('https://example.com/upload', binaryData, jasmine.any(Object));
        done();
      });
      component.makeRequest();
    });

    it('should handle errors with empty payload for POST requests', async () => {
      component.config = {
        method: 'POST',
        endpoint: 'https://example.com/api'
      };
      component.model = {};
      await component.makeRequest();
      expect(component.hasError).toBeTruthy();
      expect(component.errorMessage).toBe('POST of empty payload prevented in http block');
    });

    it('should handle errors with empty binary data for BPUT requests', async () => {
      component.config = {
        method: 'BPUT',
        endpoint: 'https://example.com/upload'
      };
      component.model = { content: new ArrayBuffer(0) };
      await component.makeRequest();
      expect(component.hasError).toBeTruthy();
      expect(component.errorMessage).toBe('BPUT of empty payload prevented in http block');
    });

    it('should handle unsupported HTTP methods', async () => {
      component.config = {
        method: 'OPTIONS',
        endpoint: 'https://example.com/api'
      };
      await component.makeRequest();
      expect(component.hasError).toBeTruthy();
      expect(component.errorMessage).toBe('HTTP method not supported');
    });

    it('should handle missing HTTP method', async () => {
      component.config = {
        endpoint: 'https://example.com/api'
      };
      await component.makeRequest();
      expect(component.hasError).toBeTruthy();
      expect(component.errorMessage).toBe('No HTTP method provided');
    });
  });

  describe('authentication', () => {
    beforeEach(() => {
      component.context = { __key: 'test' };
      component.model = {};
    });

    it('should add Basic Auth headers', (done: DoneFn) => {
      component.config = {
        method: 'GET',
        endpoint: 'https://example.com/api',
        authentication: {
          type: 'basic-auth',
          username: 'testuser',
          password: 'testpassword'
        }
      };
      contextDataServiceMock.getGlobalContext.and.returnValue({});
      httpClientMock.get.and.returnValue(of({ data: 'secret' }));
      component.output.subscribe(() => {
        const callArgs = httpClientMock.get.calls.mostRecent().args;
        const headers = callArgs[1].headers as HttpHeaders;
        expect(headers.get('Authorization')).toBe('Basic ' + btoa('testuser:testpassword'));
        done();
      });
      component.makeRequest();
    });

    it('should add Bearer token headers', (done: DoneFn) => {
      component.config = {
        method: 'GET',
        endpoint: 'https://example.com/api',
        authentication: {
          type: 'bearer',
          valueGetters: { jwt: 'context.token' }
        }
      };
      contextDataServiceMock.getGlobalContext.and.returnValue({ jwt: 'my-secret-jwt' });
      httpClientMock.get.and.returnValue(of({ data: 'secret' }));
      component.output.subscribe(() => {
        const callArgs = httpClientMock.get.calls.mostRecent().args;
        const headers = callArgs[1].headers as HttpHeaders;
        expect(headers.get('Authorization')).toBe('Bearer my-secret-jwt');
        done();
      });
      component.makeRequest();
    });

    it('should handle AWS SigV4 authentication with missing credentials', async () => {
      component.config = {
        method: 'GET',
        endpoint: 'https://s3.amazonaws.com/bucket',
        authentication: {
          type: 'aws-sigv4',
          accessKeyId: '',
          secretKey: ''
        }
      };
      await component.makeRequest();
      expect(component.hasError).toBeTruthy();
      expect(component.errorMessage).toBe('Missing AWS credentials (accessKeyId or secretKey)');
    });
  });

  describe('error handling', () => {
    beforeEach(() => {
      component.context = { __key: 'test' };
      component.model = {};
    });

    it('should handle HTTP errors gracefully', (done: DoneFn) => {
      component.config = {
        method: 'GET',
        endpoint: 'https://example.com/api'
      };
      const errorResponse = new Error('Not Found');
      httpClientMock.get.and.returnValue(throwError(() => errorResponse));
      
      component.output.subscribe(output => {
        expect(output.hasError).toBeTruthy();
        done();
      });
      
      component.makeRequest();
    });
  });

  describe('headers and payload construction', () => {
    beforeEach(() => {
      component.context = { __key: 'test' };
      component.model = { apiKey: 'secret123' };
    });

    it('should construct custom headers using JMESPath', () => {
      component.config = {
        headers: {
          'X-API-Key': 'data.apiKey',
          'Content-Type': "'application/json'"
        }
      };
      const headers = component.getPayloadHeaders();
      expect(headers['X-API-Key']).toBeDefined();
    });

    it('should return model when no payload config is set', () => {
      component.config = {};
      component.model = { username: 'testuser', apiKey: 'secret123' };
      const payload = component.getPayload();
      expect(payload).toEqual({ username: 'testuser', apiKey: 'secret123' });
    });
  });
});

describe('extractNextPageUrl', () => {
    let component: HttpBlockComponent;
    let contextDataServiceMock: ContextDataService;
    let httpClientMock: HttpClient;
    let matSnackBarMock: MatSnackBar;

    beforeEach(() => {
        contextDataServiceMock = jasmine.createSpyObj('ContextDataService', ['getGlobalContext']);
        httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
        matSnackBarMock = jasmine.createSpyObj('MatLegacySnackBar', ['open']);
        component = new HttpBlockComponent(contextDataServiceMock, matSnackBarMock, httpClientMock);
    });

    it('should extract the next page URL from a link header', () => {
        const linkHeader = '<https://example.com/page2>; rel="next"';
        expect(component.extractNextPageUrl(linkHeader)).toEqual('https://example.com/page2');
    });

    it('should return null if no next link is present', () => {
        const linkHeader = '<https://example.com/page2>; rel="last"';
        expect(component.extractNextPageUrl(linkHeader)).toBeNull();
    });

    it('should return null for an invalid link header', () => {
        const linkHeader = 'invalid link header';
        expect(component.extractNextPageUrl(linkHeader)).toBeNull();
    });

    it('should return null for an empty string', () => {
        expect(component.extractNextPageUrl('')).toBeNull();
    });
});