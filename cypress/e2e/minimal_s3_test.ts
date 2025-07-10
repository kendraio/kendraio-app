import { loadFlowCode } from '../support/helper';

describe('Minimal HTTP Block SigV4 Tests', () => {
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

  it('loads workflow and verifies basic functionality', () => {
    // Mock any HTTP request to prevent hanging
    cy.intercept('PUT', `http://localhost:4568/${bucketName}/${testFileName}`, {
      statusCode: 200,
      body: ''
    }).as('mockRequest');

    // Load a simple workflow
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

    // Verify the workflow loaded
    cy.contains('Flow').should('be.visible');
    
    // Verify HTTP block is present
    cy.get('app-http-block').should('exist');
  });

  it('verifies PUT with SigV4 headers and debug output', () => {
    let sigV4HeadersPresent = false;
    
    cy.intercept('PUT', `http://localhost:4568/${bucketName}/${testFileName}`, (req) => {
      console.log('Intercepted PUT request:', req.headers);
      
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        sigV4HeadersPresent = true;
        console.log('SigV4 headers verified!');
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
        "payload": "'test content'",
        "skipInit": false
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": true
      }
    ]);

    // Wait for the request with a longer timeout
    cy.wait('@s3Put', { timeout: 15000 });
    
    cy.then(() => {
      expect(sigV4HeadersPresent, 'AWS SigV4 headers were present').to.be.true;
    });

    // Check that debug output contains expected metadata
    cy.get('app-debug-block').should('exist');
    cy.get('app-debug-block').should('contain.text', 'httpMetadata');
  });

  it('verifies GET with binary responseType and checks model content', () => {
    let sigV4HeadersPresent = false;

    cy.intercept('GET', `http://localhost:4568/${bucketName}/binary-test.jpg`, (req) => {
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        sigV4HeadersPresent = true;
      }
      
      // Return binary data as ArrayBuffer
      const binaryData = new Uint8Array([255, 216, 255, 224, 0, 16, 74, 70, 73, 70]); // JPEG header
      req.reply({ 
        statusCode: 200, 
        body: binaryData.buffer,
        headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '10' }
      });
    }).as('s3GetBinary');

    loadFlowCode([
      { "type": "init" },
      {
        "type": "http",
        "method": "GET",
        "endpoint": `http://localhost:4568/${bucketName}/binary-test.jpg`,
        "responseType": "arraybuffer",
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "skipInit": false
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": true
      }
    ]);

    cy.wait('@s3GetBinary');
    
    cy.then(() => {
      expect(sigV4HeadersPresent, 'AWS SigV4 headers were present').to.be.true;
    });

    // Verify httpMetadata in context contains size information
    cy.get('app-debug-block').should('exist');
    cy.get('app-debug-block').should('contain.text', 'httpMetadata');
    cy.get('app-debug-block').should('contain.text', 'responseSizeBytes');
  });

});
