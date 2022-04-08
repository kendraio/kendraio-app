import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Adapter install', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    }
    ).as('adapterConfig.json');
    cy.intercept('GET', 'https://kendraio-adapter.kendraio.now.sh/bloomen.json', {
      fixture: 'bloomen.json'
    }
    ).as('bloomen.json');

  });

  it('Export a packaged adapter with attachments', () => {
        loadFlowCode([
          {
            "type": "init"
          },
          {
            "type": "mapping",
            "mapping": "{repoUrl:`https://kendraio-adapter.kendraio.now.sh/`, name:`bloomen`}"
        },
            {
                "type": "dispatch",
                "action": "installAdapter"
            } ,
        {
          "type":"debug"
        },
        {
          "type":"adapter-info",
          "adapterName":"bloomen",
          "packageAdapter":true
        },
        {
          "type":"debug",
          "open":4
        },
      ]);
     cy.contains("attachments").should('exist');
  });


});

