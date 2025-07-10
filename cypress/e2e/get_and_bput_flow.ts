import { loadFlowCode } from '../support/helper';

describe('GET and BPUT Flow Tests', () => {
  const bucketName = 'test-bucket';
  const sourceFileName = 'source-audio.mp3';
  const targetFileName = 'target-audio.wav';
  const testBinaryData = new Uint8Array([0x49, 0x44, 0x33, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]); // Sample MP3 header

  beforeEach(() => {
    // Prevent external network requests
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    });
    cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
      fixture: 'workflow-cloud.json'
    });
    cy.intercept('https://fonts.googleapis.com/**', "*{ }");

    // Clean up any existing test files in s3rver
    cy.exec(`curl -X DELETE http://localhost:4568/${bucketName}/${sourceFileName} || true`, { failOnNonZeroExit: false });
    cy.exec(`curl -X DELETE http://localhost:4568/${bucketName}/${targetFileName} || true`, { failOnNonZeroExit: false });
    
    // Create source file with binary data in s3rver
    cy.exec(`echo -e "\\x49\\x44\\x33\\x03\\x00\\x00\\x00\\x00\\x00\\x00" | curl -X PUT -H "Content-Type: audio/mpeg" --data-binary @- http://localhost:4568/${bucketName}/${sourceFileName}`);
  });

  afterEach(() => {
    // Clean up test files
    cy.exec(`curl -X DELETE http://localhost:4568/${bucketName}/${sourceFileName} || true`, { failOnNonZeroExit: false });
    cy.exec(`curl -X DELETE http://localhost:4568/${bucketName}/${targetFileName} || true`, { failOnNonZeroExit: false });
  });

  it('implements GET-to-BPUT flow with mapping: { content: data.data }', () => {
    // Load the workflow with GET-to-BPUT flow (first mapping variation)
    loadFlowCode([
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{ secretKey: 'S3RVER', accessKeyId: 'S3RVER' }"
      },
      {
        "type": "context-save",
        "key": "api"
      },
      {
        "type": "http",
        "method": "GET",
        "useProxy": false,
        "endpoint": `http://localhost:4568/${bucketName}/${sourceFileName}`,
        "responseType": "arraybuffer",
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "headers": {},
        "skipInit": false
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": false,
        "label": "After GET"
      },
      {
        "type": "mapping",
        "mapping": "{ content: data.data }"
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": false,
        "label": "After mapping"
      },
      {
        "type": "http",
        "method": "BPUT",
        "useProxy": false,
        "endpoint": `http://localhost:4568/${bucketName}/${targetFileName}`,
        "authentication": {
          "type": "aws-sigv4",
          "secretKeyGetter": "context.api.secretKey",
          "accessKeyIdGetter": "context.api.accessKeyId"
        },
        "skipInit": false
      },
      {
        "type": "debug",
        "open": 1,
        "showData": true,
        "showContext": true,
        "label": "Final result"
      }
    ]);

    // Verify the workflow loaded and executed
    cy.get('app-debug-block').should('exist');
    cy.contains('After GET').should('be.visible');
    
    // Wait for both requests to complete (more time for BPUT)
    cy.wait(10000);
    
    // Verify the target file was created in s3rver
    cy.exec(`curl -f http://localhost:4568/${bucketName}/${targetFileName}`, { failOnNonZeroExit: false }).then((result) => {
      expect(result.code).to.equal(0);
    });

    // Verify debug output shows proper context metadata
    cy.get('app-debug-block').should('contain.text', 'httpMetadata');
  });

  it('implements GET-to-BPUT flow with mapping: {content: data}', () => {
    // Load the workflow with GET-to-BPUT flow (second mapping variation)
    loadFlowCode([
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{ secretKey: 'S3RVER', accessKeyId: 'S3RVER' }"
      },
      {
        "type": "context-save",
        "key": "api"
      },
      {
        "type": "http",
        "method": "GET",
        "useProxy": false,
        "endpoint": `http://localhost:4568/${bucketName}/${sourceFileName}`,
        "responseType": "arraybuffer",
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "headers": {},
        "skipInit": false
      },
      {
        "type": "mapping",
        "mapping": "{content: data}"
      },
      {
        "type": "http",
        "method": "BPUT",
        "useProxy": false,
        "endpoint": `http://localhost:4568/${bucketName}/${targetFileName}`,
        "authentication": {
          "type": "aws-sigv4",
          "secretKeyGetter": "context.api.secretKey",
          "accessKeyIdGetter": "context.api.accessKeyId"
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

    // Verify the workflow loaded and executed
    cy.get('app-debug-block').should('exist');
    
    // Wait for both requests to complete (more time for BPUT)
    cy.wait(10000);
    
    // Verify the target file was created in s3rver
    cy.exec(`curl -f http://localhost:4568/${bucketName}/${targetFileName}`, { failOnNonZeroExit: false }).then((result) => {
      expect(result.code).to.equal(0);
    });

    // Verify debug output shows proper context metadata
    cy.get('app-debug-block').should('contain.text', 'httpMetadata');
  });

  it('verifies binary data integrity through GET-to-BPUT pipeline', () => {
    // Load workflow for data integrity test
    loadFlowCode([
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{ secretKey: 'S3RVER', accessKeyId: 'S3RVER' }"
      },
      {
        "type": "context-save",
        "key": "api"
      },
      {
        "type": "http",
        "method": "GET",
        "useProxy": false,
        "endpoint": `http://localhost:4568/${bucketName}/${sourceFileName}`,
        "responseType": "arraybuffer",
        "authentication": {
          "type": "aws-sigv4",
          "accessKeyId": "S3RVER",
          "secretKey": "S3RVER"
        },
        "skipInit": false
      },
      {
        "type": "mapping",
        "mapping": "{content: data}"
      },
      {
        "type": "http",
        "method": "BPUT",
        "useProxy": false,
        "endpoint": `http://localhost:4568/${bucketName}/${targetFileName}`,
        "authentication": {
          "type": "aws-sigv4",
          "secretKeyGetter": "context.api.secretKey",
          "accessKeyIdGetter": "context.api.accessKeyId"
        },
        "skipInit": false
      }
    ]);

    // Wait for workflow to complete
    cy.wait(5000);
    
    // Verify both source and target files exist and have same content
    cy.exec(`curl -s http://localhost:4568/${bucketName}/${sourceFileName} | wc -c`).then((sourceResult) => {
      cy.exec(`curl -s http://localhost:4568/${bucketName}/${targetFileName} | wc -c`).then((targetResult) => {
        expect(sourceResult.stdout.trim()).to.equal(targetResult.stdout.trim());
      });
    });
  });
});
