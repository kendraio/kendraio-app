import { loadFlowCode } from '../support/helper';

describe('S3 Bucket Binary Integrity Test', () => {
  const s3Port        = 4568;
  const s3BaseUrl     = `http://localhost:${s3Port}`;
  const bucketName    = 'test-bucket-binary';
  const fileName      = 'icon-72x72.png';
  const originalAssetUrl = `/assets/icons/${fileName}`;
  const s3ObjectUrl   = `${s3BaseUrl}/${bucketName}/${fileName}`;
  const expectedHash  = '07670d6af9d02e9cbe0ed5e1e67e403243966300';

  before(() => {
    const startServerCode = `
      const S3rver = require('s3rver');
            // A permissive CORS configuration for testing purposes.
      // This allows requests from any origin and allows all common methods and headers.
      const corsConfig = \`
        <CORSConfiguration>
          <CORSRule>
            <AllowedOrigin>*</AllowedOrigin>
            <AllowedMethod>GET</AllowedMethod>
            <AllowedMethod>PUT</AllowedMethod>
            <AllowedMethod>POST</AllowedMethod>
            <AllowedMethod>DELETE</AllowedMethod>
            <AllowedMethod>HEAD</AllowedMethod>
            <AllowedHeader>*</AllowedHeader>
          </CORSRule>
        </CORSConfiguration>
      \`;
      global.s3rverInstance = new S3rver({
        port: ${s3Port},
        silent: false,
        directory: '/tmp/s3rver-data-test',
        configureBuckets: [{ name: '${bucketName}', configs: [corsConfig]}],
        resetOnClose: false
      });
      //global.s3rverInstance.reset();
      global.s3rverInstance.run();
    `;
    return cy.task('evalNode', { code: startServerCode });
  });

  after(() => {
    const stopServerCode = `
      if (global.s3rverInstance) {
        //global.s3rverInstance.reset();
        global.s3rverInstance.close();
      };
        null;
    `;
    return cy.task('evalNode', { code: stopServerCode });
  });

  it('should not find image in bucket', () => {
    loadFlowCode([
      { "type": "init" },
      {
        type: 'http',
        method: 'GET',
        endpoint: s3ObjectUrl,
        responseType: 'arraybuffer',
        authentication: {
          type: 'aws-sigv4',
          accessKeyId: 'S3RVER',
          secretKey: 'S3RVER'
        },
        "skipInit": false
      },
      { type: 'debug', open: 4, showData: true, showContext: true }
    ]);

    cy.get('app-debug-block').eq(0).should('contain.text', '404');
    cy.get('app-debug-block').eq(0).invoke('text').then(text => {
      cy.task('logToStdout', `\n--- S3 RETRIEVAL DEBUG ---\n${text}\n--------------------------\n`);
    });
  });

  it('should upload the asset, retrieve it, and verify its integrity', () => {
    loadFlowCode([
      // fetch original asset
      {
        type: 'http',
        method: 'GET',
        endpoint: originalAssetUrl,
        responseType: 'arraybuffer',
        skipInit: false
      },
      { type: 'mapping', mapping: '{ content: data.data }' }, // upload to bucket
      {
        type: 'http',
        method: 'BPUT',
        endpoint: s3ObjectUrl,
        authentication: {
          type: 'aws-sigv4',
          accessKeyId: 'S3RVER',
          secretKey: 'S3RVER'
        },
        skipInit: false,
        "headers": {
          "Content-Type": "'image/png'"
        }
      },
      { type: 'debug', open: 4, showData: true, showContext: true },
      {
        type: 'http',
        method: 'GET',
        endpoint: s3ObjectUrl,
        responseType: 'arraybuffer',
        authentication: {
          type: 'aws-sigv4',
          accessKeyId: 'S3RVER',
          secretKey: 'S3RVER'
        },
        skipInit: true
      },
      { type: 'debug', open: 4, showData: true, showContext: true }
    ]);

    cy.get('app-debug-block').eq(0).should('contain.text', '200');
    cy.get('app-debug-block').eq(1).should('contain.text', expectedHash);

    cy.get('app-debug-block').eq(0).invoke('text').then(text => {
      cy.task('logToStdout', `\n--- S3 RETRIEVAL DEBUG ---\n${text}\n--------------------------\n`);
    });
    cy.get('app-debug-block').eq(1).invoke('text').then(text => {
      cy.task('logToStdout', `\n--- S3 RETRIEVAL DEBUG ---\n${text}\n--------------------------\n`);
    });

  });

  it('should find image in bucket', () => {
    loadFlowCode([
      { "type": "init" },
      {
        type: 'http',
        method: 'GET',
        endpoint: s3ObjectUrl,
        responseType: 'arraybuffer',
        authentication: {
          type: 'aws-sigv4',
          accessKeyId: 'S3RVER',
          secretKey: 'S3RVER'
        },
        "skipInit": false
      },
      { type: 'debug', open: 4, showData: true, showContext: true }
    ]);
    cy.get('app-debug-block').eq(0).should('contain.text', '200');
    cy.get('app-debug-block').eq(0).should('contain.text', expectedHash);
    cy.get('app-debug-block').eq(0).invoke('text').then(text => {
      cy.task('logToStdout', `\n--- S3 RETRIEVAL DEBUG ---\n${text}\n--------------------------\n`);
    });
  });

});
