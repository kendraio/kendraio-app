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


  describe('Ensure metadata table has no rows', () => {
    it('should not have any data yet', async () => {
      let db = new dexie('kendraio-db');
      // if kendraio-db exists, we delete it then create it again
      await db.delete();


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
          "mapping": "{ uuid: uuid('test')}"
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
      cy.contains('Loaded.').wait(2000).then(async () => {
        // check that 1 item exists in the metadata table
        const db_check = new dexie('kendraio-db');
        await db_check.open();
        // check that metadata table exists and get a object of the metadata table
        const metadata = await db_check.table('metadata').toArray();
        expect(metadata.length).to.equal(1);
      });

    });
  });



});