import { loadFlowCode } from '../support/helper';
import { v4 as uuid } from 'uuid';

// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('HTTP Block Request', () => {

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
    });

    it('should return a single set of results. Without pagination', () => {
        cy.intercept({
            url: 'https://example.com/data'
        }, {
            statusCode: 200,
            body: '["hippo", "giraffe"]'
        });

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/data"
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('hippo');
        cy.contains('giraffe');
    });

    it('should return an error', () => {
        cy.intercept({
            url: 'https://example.com/data'
        }, {
            statusCode: 400,
            body: { error: {
                        error: "Http failure 400 Bad request",
                        error_description: "There was a problem with your request" 
                    }   
                }
        });

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/data",
                "onError": {
                    "blocks": [
                        {
                            "type": "card",
                            "blocks": [
                                {
                                    "type": "template",
                                    "template": "Error with submission:<p>{{data.error.error}} - {{data.error.error_description}}</p>"
                                }
                            ]
                        }
                    ]
                }

            },
            {
                "type": "debug",
                "open": 3,
                "showData": true
            }
        ]);

        cy.contains('hasError:true');
        cy.contains('status:400');
        cy.contains('errorMessage:"Http failure response for https://example.com/data: 400 Bad Request"');
        cy.get('app-template-block').contains('Error with submission')
    });


});



describe('HTTP Block Follow Pagination', () => {

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
    });


    it('should follow pagination links and merge results without a proxy', () => {
        // We emulate the CORS proxy presenting the first set of results,
        // with a link header pointing to the next page.
        cy.intercept({
            url: 'https://example.com/paginated'
        }, {
            statusCode: 200,
            body: '["cats","dogs"]',
            headers: {
                'link': '<https://example.com/paginated&page=2>; rel="next"',
            }
        });

        // If the target URL is for the second page, we return the second set of results:
        cy.intercept({
            url: 'https://example.com/paginated&page=2'
        }, {
            statusCode: 200,
            body: '["fish","birds"]',
            headers: {
                'link': '<https://example.com/paginated>; rel="prev"',
            }
        });

        // We test page following by setting the "followPaginationLinksMerged" flag:
        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/paginated",
                "useProxy": false,
                "followPaginationLinksMerged": true,
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('cats');
        cy.contains('dogs');
        cy.contains('fish');
        cy.contains('birds');
    });

    it('should follow pagination links and merge results using a proxy', () => {
        // We emulate the CORS proxy presenting the first set of results,
        // with a link header pointing to the next page.
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated',
            }
        }, {
            statusCode: 200,
            body: '["cats","dogs"]',
            headers: {
                'link': '<https://example.com/paginated&page=2>; rel="next"',
            }
        });

        // If the target URL is for the second page, we return the second set of results:
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated&page=2',
            },
        }, {
            statusCode: 200,
            body: '["fish","birds"]',
            headers: {
                'link': '<https://example.com/paginated>; rel="prev"',
            }
        });

        // We test page following by setting the "followPaginationLinksMerged" flag:
        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/paginated",
                "useProxy": true,
                "followPaginationLinksMerged": true,
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('cats');
        cy.contains('dogs');
        cy.contains('fish');
        cy.contains('birds');
    });

    it('should return first results only if not paginated, with proxy', () => {
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated',
            }
        }, {
            statusCode: 200,
            body: '["cats","dogs"]',
            headers: {
                'link': '<https://example.com/paginated&page=2>; rel="next"',
            }
        });

        // We do not expect this to be called:
        cy.intercept({
            url: 'https://proxy.kendra.io/',
            headers: {
                'Target-URL': 'https://example.com/paginated&page=2',
            },
        }, {
            statusCode: 200,
            body: '["fish","birds"]',
            headers: {
                'link': '<https://example.com/paginated>; rel="prev"',
            }
        }).as('secondPage');

        loadFlowCode([
            { "type": "init" },
            {
                "type": "http",
                "method": "GET",
                "endpoint": "https://example.com/paginated",
                "useProxy": true
            },
            {
                "type": "debug",
                "open": 2,
                "showData": true
            }
        ]);
        cy.contains('cats');
        cy.contains('dogs');
        // we check it does not contain a second page result:
        cy.get('body').should('not.contain', 'fish');
    });
});

describe('HTTP Block with AWS SigV4', () => {
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
      cy.visit('/');
      // Create a dummy file to upload
      cy.writeFile(`cypress/fixtures/${testFileName}`, 'This is a test file for S3 upload with SigV4.');
    });
  
    it('should upload a file to the local S3 server using SigV4', () => {
      const uploadWorkflow = {
        id: 's3-upload-workflow',
        title: 'S3 Upload Workflow',
        description: 'A workflow to test S3 upload with SigV4',
        blocks: [
          {
            id: 's3-upload-block',
            type: 'http',
            method: 'BPUT',
            endpoint: `http://localhost:4568/${bucketName}/${testFileName}`,
            authentication: {
              type: 'aws-sigv4',
              accessKeyId: 'S3RVER',
              secretKey: 'S3RVER'
            },
            model: {
              content: 'context:fileContent'
            },
            skipInit: false
          }
        ]
      };
  
      // Load the workflow into the app
      cy.window().its('app.appStore').then(appStore => {
        appStore.dispatch({
          type: '[Flow] Import Flow',
          payload: {
            flow: uploadWorkflow
          }
        });
      });
  
      // Read the file and set it in the context
      cy.fixture(testFileName, 'binary').then(fileContent => {
        return new Cypress.Promise(resolve => {
          const blob = Cypress.Blob.binaryStringToBlob(fileContent, 'text/plain');
          const reader = new FileReader();
          reader.readAsArrayBuffer(blob);
          reader.onloadend = () => {
            resolve(reader.result as ArrayBuffer);
          };
        });
      }).then(arrayBuffer => {
        cy.window().its('app.appStore').then(appStore => {
          appStore.dispatch({
            type: '[Context] Set Data',
            payload: {
              key: 'fileContent',
              data: arrayBuffer
            }
          });
        });
      });
  
      // Navigate to the workflow page to trigger it
      cy.visit('/#/workflow/s3-upload-workflow');
  
      // Verify the file was uploaded
      cy.exec(`cat ${filePath}`).its('stdout').should('equal', 'This is a test file for S3 upload with SigV4.');
    });
  });