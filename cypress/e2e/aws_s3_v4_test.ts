import { loadFlowCode } from '../support/helper';

describe('HTTP Block AWS SigV4 Authentication', () => {
  const bucketName = 'test-bucket';
  const testFileName = 'test.txt';

  beforeEach(() => {
    // Prevent external network requests
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    });
    cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
      fixture: 'workflow-cloud.json'
    });
    cy.intercept('https://fonts.googleapis.com/\*\*', "\*{ }");
  });

  it('verifies PUT request uses SigV4 authentication', () => {
    let sigV4HeadersPresent = false;
    
    cy.intercept('PUT', `http://localhost:4568/${bucketName}/${testFileName}`, (req) => {
      // Verify SigV4 headers are present
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        sigV4HeadersPresent = true;
      }
      
      req.reply({ statusCode: 200, body: '' });
    }).as('s3Put');

    loadFlowCode([
      { "type": "init" },
      {
        "type": "http",
        "method": "PUT",
        "endpoint": `http://localhost:4568/${bucketName}/${testFileName}`,
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "payload": "'test content'"
      }
    ]);

    cy.wait('@s3Put');
    
    // Verify SigV4 headers
    cy.then(() => {
      expect(sigV4HeadersPresent, 'AWS SigV4 headers were present').to.be.true;
    });
  });

  it('verifies GET request uses SigV4 authentication', () => {
    let sigV4HeadersPresent = false;

    cy.intercept('GET', `http://localhost:4568/${bucketName}/${testFileName}`, (req) => {
      // Verify SigV4 headers are present
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        sigV4HeadersPresent = true;
      }
      
      req.reply({ 
        statusCode: 200, 
        body: 'test content response',
        headers: { 'Content-Type': 'text/plain', 'Content-Length': '20' }
      });
    }).as('s3Get');

    loadFlowCode([
      { "type": "init" },
      {
        "type": "http",
        "method": "GET",
        "endpoint": `http://localhost:4568/${bucketName}/${testFileName}`,
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        }
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": true
      }
    ]);

    cy.wait('@s3Get');
    
    // Verify SigV4 headers
    cy.then(() => {
      expect(sigV4HeadersPresent, 'AWS SigV4 headers were present').to.be.true;
    });

    // Verify debug output exists and contains some expected content
    cy.get('app-debug-block').should('exist');
    
    // Check for context metadata (this should definitely be there)
    cy.get('app-debug-block').should('contain.text', 'httpMetadata');
    
    // Check for either legacy format OR new format
    cy.get('app-debug-block').should(($debug) => {
      const text = $debug.text();
      const hasLegacyFormat = text.includes('statusCode') && text.includes('responseSizeFormatted');
      const hasMetadata = text.includes('httpMetadata') && text.includes('responseSizeBytes');
      
      expect(hasMetadata, 'Should have httpMetadata in context').to.be.true;
    });
  });

  it('verifies GET-to-BPUT binary flow uses SigV4 authentication', () => {
    let getHeadersPresent = false;
    let bputHeadersPresent = false;
    
    // Intercept the GET request for the binary file and return mock binary data
    cy.intercept('GET', `http://localhost:4568/${bucketName}/document.pdf`, (req) => {
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        getHeadersPresent = true;
      }
      
      // Return binary PDF content as ArrayBuffer
      const binaryContent = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]); // PDF header
      req.reply({ 
        statusCode: 200, 
        body: binaryContent.buffer,
        headers: { 'Content-Type': 'application/pdf', 'Content-Length': '8' }
      });
    }).as('s3GetBinary');
    
    // Intercept the BPUT request
    cy.intercept('PUT', `http://localhost:4568/${bucketName}/uploaded-document.pdf`, (req) => {
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        bputHeadersPresent = true;
      }
      
      req.reply({ statusCode: 200, body: '' });
    }).as('s3Bput');

    // GET-to-BPUT flow: retrieve binary file, then upload it
    loadFlowCode([
      { "type": "init" },
      {
        "type": "http",
        "method": "GET",
        "endpoint": `http://localhost:4568/${bucketName}/document.pdf`,
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "responseType": "arraybuffer"
      },
      {
        "type": "http",
        "method": "BPUT",
        "endpoint": `http://localhost:4568/${bucketName}/uploaded-document.pdf`,
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "headers": {
          "Content-Type": "'application/pdf'"
        }
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": true
      }
    ]);

    cy.wait('@s3GetBinary');
    
    // Wait longer for BPUT as it might take time to process the binary data
    cy.wait('@s3Bput', { timeout: 10000 });
    
    // Verify SigV4 headers were present in both requests
    cy.then(() => {
      expect(getHeadersPresent, 'GET request had AWS SigV4 headers').to.be.true;
      expect(bputHeadersPresent, 'BPUT request had AWS SigV4 headers').to.be.true;
    });

    // Verify output format and metadata
    cy.get('app-debug-block').should('exist');
    cy.get('app-debug-block').should('contain.text', 'httpMetadata');
  });

});
