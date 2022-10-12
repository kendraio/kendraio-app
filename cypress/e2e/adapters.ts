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
    // first go to settings and allow core actions in flows
    cy.visit('/core/settings');
    cy.get('#formly_16_boolean_exposeCoreActions_5 .mat-checkbox-inner-container').click();
    cy.contains('Save settings').click({ force: true });
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
      }
    ]);
    cy.wait(1000); // give the adapter time to install.
    loadFlowCode([
      {
        "type": "adapter-info",
        "adapterName": "bloomen",
        "packageAdapter": true
      },
      {
        "type": "debug",
        "open": 4
      },
    ]);
    // When an adapter is exported in "packaged mode", 
    // it will contain all additional elements as "attachments".
    // This key does not exist in the default data, 
    // so is an effective test

    cy.contains("attachments").should('exist');
  });


});

