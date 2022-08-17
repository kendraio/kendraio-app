import { loadFlowCode } from '../support/helper';
import dexie from 'dexie';

// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('Kendraio context and state', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    }
    ).as('adapterConfig.json');

    // Prevent external network requests for all fonts
    cy.intercept('https://fonts.googleapis.com/**', {
      method: 'GET',
      statusCode: 200,
      response: {}
    }).as('fonts'); // empty response
  });


  describe('Ensure unpsert can insert and update records in the metadata table', () => {
    it('should be able to insert a record into a blank table', async () => {
      let db = new dexie('kendraio-db');
      // ensure database is blank:
      await db.delete();

      // TODO: if we use init the flow runs twice, is this expected? Will Dixie raise any errors? 
      // I might have seen one, I suspected the flow was interrupted before it can finish, this needs investigation.
      loadFlowCode([
        //{ 
        //  "type": "init"
        //},
        {
          "type": "template",
          "template": "Loaded."
        },
        {
          "type": "mapping",
          "mapping": "{ uuid: uuid('test'), name: 'test' }"
        },
        {
          "type": "db",
          "operation": "upsert",
          "adapterName": "UNKNOWN",
          "schema": "none",
          "blockComment": ""
        },
        {
          "type": "db",
          "operation": "get",
          "adapterName": "UNKNOWN",
          "schema": "none",
          "blockComment": ""
        },
        {
          "type": "debug",
          "open": 1,
          "showData": true,
          "showContext": false,
          "showState": false
        }
      ]);
      cy.contains('Loaded.').wait(1000).then(async () => {
        // check that 1 item exists in the metadata table
        db = new dexie('kendraio-db');
        await db.open();
        // assert metadata table has one record:
        const metadata = await db.table('metadata').toArray();
        expect(metadata.length).to.equal(1);
        // assert that "test" is in the metadata table:
        expect(metadata[0].data.name).to.equal('test');
      });

    });
  });



});