import { loadFlowCode } from '../support/helper';

describe('AWS S3 SigV4 Support', () => {
  const bucketName = 'test-bucket';
  const testFileName = 's3_v4_test.txt';
  const s3rverDirectory = '/tmp/s3rver';
  const bucketPath = `${s3rverDirectory}/${bucketName}`;
  const filePath = `${bucketPath}/${testFileName}`;

  before(() => {
    // Create the S3 bucket by creating a directory
    cy.exec(`mkdir -p ${bucketPath}`);
  });

  after(() => {
    // Clean up the bucket
    cy.exec(`rm -rf ${bucketPath}`);
  });

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    });

    // Prevent external network requests for Workflow cloud
    cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
      fixture: 'workflow-cloud.json'
    });

    // Prevent external network requests for fonts with empty CSS rule 
    cy.intercept('https://fonts.googleapis.com/\*\*', "\*{ }");

    // Create a dummy file to upload
    cy.writeFile(`cypress/fixtures/${testFileName}`, 'This is a test file for S3 upload with SigV4.');
  });

  it('should upload text data using PUT with SigV4', () => {
    let requestMade = false;
    let sigV4HeadersPresent = false;
    
    // Intercept the S3 PUT request to verify it was made with correct SigV4 headers
    cy.intercept('PUT', `http://localhost:4568/${bucketName}/${testFileName}`, (req) => {
      requestMade = true;
      
      // Verify SigV4 headers are present
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        sigV4HeadersPresent = true;
      }
      
      // Respond with success
      req.reply({
        statusCode: 200,
        body: ''
      });
    }).as('s3Upload');

    const testData = 'Simple text for S3 upload with SigV4';
    
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
        "payload": `'${testData}'`
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true
      }
    ]);

    // Wait for the S3 upload request to be made
    cy.wait('@s3Upload', { timeout: 15000 });

    // Verify the debug block exists (showing the workflow executed)
    cy.get('app-debug-block').should('exist');
    
    // Verify that our request was made with proper SigV4 headers
    cy.then(() => {
      expect(requestMade, 'HTTP request was made').to.be.true;
      expect(sigV4HeadersPresent, 'AWS SigV4 headers were present').to.be.true;
    });
  });

  it('should retrieve a file using GET with SigV4', () => {
    // First, create a test file in the s3rver directory
    const testContent = 'This is test content for retrieval';
    cy.exec(`echo "${testContent}" > ${filePath}`);

    let requestMade = false;
    let sigV4HeadersPresent = false;

    // Intercept the S3 GET request
    cy.intercept('GET', `http://localhost:4568/${bucketName}/${testFileName}`, (req) => {
      requestMade = true;
      
      // Verify SigV4 headers are present
      if (req.headers.authorization && 
          req.headers['x-amz-date'] && 
          req.headers['x-amz-content-sha256'] &&
          typeof req.headers.authorization === 'string' &&
          req.headers.authorization.startsWith('AWS4-HMAC-SHA256')) {
        sigV4HeadersPresent = true;
      }
      
      // Let the request pass through to the actual s3rver
      req.continue();
    }).as('s3Download');

    // Load the flow to GET the file
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
        },
        "responseType": "text"
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true
      }
    ]);

    // Wait for the S3 download request to be made
    cy.wait('@s3Download', { timeout: 15000 });

    // Verify the debug block exists (showing the workflow executed)
    cy.get('app-debug-block').should('exist');
    
    // Verify that our request was made with proper SigV4 headers
    cy.then(() => {
      expect(requestMade, 'HTTP request was made').to.be.true;
      expect(sigV4HeadersPresent, 'AWS SigV4 headers were present').to.be.true;
    });
  });

});
