import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('Kendraio context and state', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
       fixture: 'adapterConfig.json' }
       ).as('adapterConfig.json');
  });

  it('should be allow a template block to be able to access global state values', () => {
    loadFlowCode([     
      {
         "type":"template",
         "template":"{{state.global.test}}|{{state.local.test}}"
      },
      {
        "type": "context-save",
        "valueGetter": "uuid('global')",        
        "contextKey":"state.global.test",
        "skipFirst":false
      },
      {
        "type": "context-save",
        "valueGetter": "uuid('local')",        
        "contextKey":"state.local.test",
        "skipFirst":false
      }
    ]);
    cy.contains('11b5372c-59da-529e-a28c-a2d5da41920f', { timeout: 10000 });
    cy.contains('1569572c-18e9-578b-9a43-3f40e43a7292', { timeout: 10000 });
  });


it('should allow the enabling and disabling of action buttons', () => {
  loadFlowCode([{
    "type": "context-save",
    "valueGetter": "`true`",
    "contextKey": "state.global.enabled",
    "skipFirst": false
  },
  {
    "type": "context-save",
    "valueGetter": "`false`",
    "contextKey": "state.global.disabled",
    "skipFirst": false
  },
  {
    "type": "actions",
    "buttons": [
      {
        "label": "Visible",
        "color": "default",
        "blocks": [],
        "enabledGetter": "state.global.enabled",
        "id":"button-enabled"
      },
      {
        "label": "Hidden",
        "color": "default",
        "blocks": [],
        "enabledGetter": "state.global.disabled",
        "id":"button-disabled"
      }
    ]
  }]);
  cy.get("#button-enabled").should('exist');
  cy.contains("Hidden").should('not.exist');
});

it('should allow the enabling and disabling of the datagrid', () => {
  loadFlowCode([
    {
      "type": "context-save",
      "valueGetter": "`false`",
      "contextKey": "state.global.disabled",      
    },
    {
      "type": "mapping",
      "mapping": "[{one:`Column 1`, two:`col 2`},{one:`Data Grid Exists`, two: `more`}]"
    },
    {
      "type": "grid",
      "gridOptions": {},
      "passThrough": false,
      "firstRowHeaders": true,
      "enabledGetter": "state.global.disabled"
    }
  ]);  
  cy.get(".ag-root",{ timeout: 10000 }).should('not.exist');  
});


});
