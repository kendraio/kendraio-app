import { loadFlowCode } from '../support/helper';

describe('S3 Bucket Binary Integrity Test', () => {
  const s3BaseUrl     = `http://127.0.0.1:4568`;
  const bucketName    = 'test-bucket';
  const fileName      = 'icon-72x72.png';
  const originalAssetUrl = `/assets/icons/${fileName}`;
  const s3ObjectUrl   = `${s3BaseUrl}/${bucketName}/${fileName}`;
  const expectedHash  = '07670d6af9d02e9cbe0ed5e1e67e403243966300';
  const accessKeyId   = 'S3RVER';
  const secretKey     = 'S3RVER';

  it('should not find image in bucket', () => {
    loadFlowCode([
      { "type": "init" },
      {
        type: 'http',
        method: 'GET',
        endpoint: s3ObjectUrl+"wrong_path_to_force_404",
        responseType: 'arraybuffer',
        authentication: {
          type: 'aws-sigv4',
          accessKeyId: 'S3RVER',
          secretKey: 'S3RVER'
        },
        skipInit: false,
        storeMetadataInContext: true
      },
      { type: 'debug', open: 4, showData: true, showContext: true }
    ]);

    cy.get('app-debug-block').eq(0).should('contain.text', '404');
    cy.get('app-debug-block').eq(0).invoke('text').then(text => {
      cy.task('logToStdout', `\n--- S3 RETRIEVAL DEBUG ---\n${text}\n--------------------------\n`);
    });
  });

  it('should upload the asset, retrieve it, and verify its integrity', () => {
    loadFlowCode([// fetch original asset
      {
        type: 'http',
        method: 'GET',
        endpoint: originalAssetUrl,
        responseType: 'arraybuffer',
        skipInit: false,
        storeMetadataInContext: true
      },
      { type: 'mapping', mapping: '{ content: data }' }, // upload to bucket
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
        headers: {
          "Content-Type": "'image/png'"
        },
        storeMetadataInContext: false
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
        skipInit: false,
        storeMetadataInContext: true
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
        skipInit: false,
        storeMetadataInContext: true
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