import { loadFlowCode } from '../support/helper';
import "cypress-localstorage-commands";
// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Adapter install', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig'
    }
    ).as('adapterConfig');
    cy.intercept('GET', 'https://kendraio-adapter.kendraio.now.sh/bloomen.json', {
      fixture: 'bloomen.json'
    }
    ).as('bloomen');

    // Alter settings to allow adapters to be installed from flows
    let localStorageConfig = JSON.stringify( {adapterRepoUrl:"https://kendraio.github.io/kendraio-adapter/", exposeCoreActions:true});
    cy.setLocalStorage('core.variables.settings',localStorageConfig);
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
        "type": "actions",
        "buttons": [
          {
            "label": "Import Adapter",
            "color": "default",
            "blocks": [

              {
                "type": "dispatch",
                "action": "installAdapter"
              }]
          }]
      }
    ]);   
    cy.contains('Import Adapter').click().wait(['@bloomen']).wait(2000); // make sure that the data is downloaded and give the adapter time to install.
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
