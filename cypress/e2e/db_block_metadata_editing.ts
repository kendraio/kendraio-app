import { loadFlowCode } from '../support/helper';
import { clearMetadataTable } from '../support/helper';
import { getMetadataTable } from '../support/helper';

// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('Kendraio context and state', () => {
  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept(
      'GET',
      'https://kendraio.github.io/kendraio-adapter/config.json',
      {
        fixture: 'adapterConfig.json',
      }
    ).as('adapterConfig.json');

    // Prevent external network requests for all fonts
    cy.intercept('https://fonts.googleapis.com/**', {
      method: 'GET',
      statusCode: 200,
      response: {},
    }).as('fonts'); // empty response
  });

  afterEach(() => {
    clearMetadataTable();
  });

  describe('Ensure upsert can insert and update records in the metadata table', () => {
    it('should be able to insert a new record', () => {
      // TODO: if we use init the flow runs twice, is this expected? Will Dixie raise any errors?
      // I might have seen one, I suspected the flow was interrupted before it can finish, this needs investigation.
      loadFlowCode([
        //{
        //  "type": "init"
        //},
        {
          type: 'mapping',
          mapping: "{ uuid: uuid('test'), name: 'test' }",
        },
        {
          type: 'db',
          operation: 'upsert',
          adapterName: 'UNKNOWN',
          schema: 'none',
          blockComment: '',
        },
        {
          type: 'db',
          operation: 'get',
          adapterName: 'UNKNOWN',
          schema: 'none',
          blockComment: '',
        },
        {
          type: 'debug',
          open: 3,
          showData: true,
          showContext: false,
          showState: false,
        },
        {
          type: 'template',
          template: 'Loaded.',
        },
      ]);

      cy.get('mat-spinner').should('not.exist');
      cy.get('body').contains('Loaded.');
      cy.window().should('have.property', 'databaseInit', true);
      cy.wrap(getMetadataTable()).then((metadata) => {
        // check that 1 item exists in the metadata table
        expect(metadata.length).to.equal(1);
        // assert that "test" is in the metadata table:
        expect(metadata[0].data.name).to.equal('test');
      });
    });

    it('should be able to update an existing record', () => {
      // TODO: if we use init the flow runs twice, is this expected? Will Dixie raise any errors?
      // I might have seen one, I suspected the flow was interrupted before it can finish, this needs investigation.
      loadFlowCode([
        {
          type: 'mapping',
          mapping: "{ uuid: uuid('test'), name: 'test' }",
        },
        {
          type: 'db',
          operation: 'upsert',
          adapterName: 'UNKNOWN',
          schema: 'none',
          blockComment: '',
        },
        {
          type: 'db',
          operation: 'get',
          adapterName: 'UNKNOWN',
          schema: 'none',
          blockComment: '',
        },
        {
          type: 'debug',
          open: 3,
          showData: true,
          showContext: false,
          showState: false,
        },
        {
          type: 'mapping',
          mapping: "{ uuid: uuid('test'), name: 'test2'}",
        },
        {
          type: 'db',
          operation: 'upsert',
          adapterName: 'UNKNOWN',
          schema: 'none',
          blockComment: '',
        },
        {
          type: 'db',
          operation: 'get',
          adapterName: 'UNKNOWN',
          schema: 'none',
          blockComment: '',
        },
        {
          type: 'debug',
          open: 3,
          showData: true,
          showContext: false,
          showState: false,
        },
        {
          type: 'template',
          template: 'Loaded.',
        },
      ]);

      cy.get('mat-spinner').should('not.exist');
      cy.get('body').contains('Loaded.');
      cy.window().should('have.property', 'databaseInit', true);
      cy.contains('name:"test"');
      cy.contains('name:"test2"');
      cy.wrap(getMetadataTable()).then((metadata) => {
        // check that 1 item exists in the metadata table
        expect(metadata.length).to.equal(1);
        // assert that "test2" is in the metadata table:
        expect(metadata[0].data.name).to.equal('test2');
      });
    });
  });
});
