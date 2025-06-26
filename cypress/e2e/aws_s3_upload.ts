import { v4 as uuid } from 'uuid';

describe('AWS SigV4 Authentication', () => {
  const bucketName = `test-bucket-${uuid()}`;

  before(() => {
    // Create a new S3 bucket before the tests run
    cy.task('s3CreateBucket', { bucketName });
  });

  after(() => {
    // Delete the S3 bucket after the tests run
    cy.task('s3DeleteBucket', { bucketName });
  });

  it('should upload a file to a local S3 server', () => {
    const fileName = `test-file-${uuid()}.txt`;
    const fileContent = 'Hello, S3!';

    cy.visit('/dashboard');
    cy.window().then(win => {
      const httpBlockConfig = {
        id: 'http-1',
        type: 'http',
        config: {
          method: 'PUT',
          endpoint: `${Cypress.env('AWS_S3_ENDPOINT')}/${bucketName}/${fileName}`,
          authentication: {
            type: 'aws-sigv4',
            accessKeyId: Cypress.env('AWS_ACCESS_KEY_ID'),
            secretKey: Cypress.env('AWS_SECRET_ACCESS_KEY'),
          },
          payload: {
            'content-type': 'text/plain',
            body: fileContent,
          },
        },
      };

      win.postMessage({
        source: 'kendraio-dashboard',
        message: {
          type: 'flow-execution',
          data: {
            blocks: [httpBlockConfig],
          },
        },
      }, '*');
    });

    // Add assertions here to verify the upload was successful
    // For example, you could check for a 200 status code in the network request
    cy.intercept('PUT', `${Cypress.env('AWS_S3_ENDPOINT')}/${bucketName}/${fileName}`).as('uploadRequest');
    cy.wait('@uploadRequest').its('response.statusCode').should('eq', 200);
  });
});
