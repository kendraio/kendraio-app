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

  it('should be possible for a template block to access global state values', () => {
    loadFlowCode([     
      {
         "type":"template",
         "template":"{{state.global.test}}|{{state.local.test}}"
      },
      {
        "type": "context-save",
        "valueGetter": "`globalTest`",        
        "key":"state.global.test",
        "skipFirst":false
      },
      {
        "type": "context-save",
        "valueGetter": "`localTest`",        
        "key":"state.local.test",
        "skipFirst":false
      }
    ]);
    cy.contains('globalTest', { timeout: 10000 });
    cy.contains('localTest', { timeout: 10000 });
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

it('should allow the disabling of the datagrid', () => {
  loadFlowCode([
    {
      "type": "context-save",
      "valueGetter": "`true`",
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
    },
    {
      "type": "debug"            
    }
  ]);  
  let datagrid_selector = "ag-grid-angular";
  cy.get(datagrid_selector,{ timeout: 10000 }).should('not.exist');  
});

it('should allow the disabling of the debug block', () => {
  loadFlowCode([
    {
      "type": "context-save",
      "valueGetter": "`false`",
      "contextKey": "state.global.disabled",      
    },
    {
      "type": "context-save",
      "valueGetter": "`true`",
      "contextKey": "state.global.enabled",      
    },
    {
      "type": "mapping",
      "mapping": "`debug disabled`"
    },
    {
      "type": "debug",      
      "enabledGetter": "state.global.disabled"
    },
    {
      "type": "mapping",
      "mapping": "`debug enabled`"
    },
    {
      "type": "debug",      
      "enabledGetter": "state.global.enabled"
    }

  ]);    
  let datagrid_selector = "ag-grid-angular";
  cy.contains("debug enabled").should('exist');  
  cy.contains("debug disabled").should('not.exist');  
});


it('should allow the disabling of the file input block ', () => {
  // Use a fixture workflow to define a standard set of state aware blocks
  cy.intercept('GET', 'https://app.kendra.io/api/TESTING/stateawareblocks', {
    fixture: 'stateAwareBlocks.json' }
    ).as('workflow.json');
    cy.visit('/TESTING/stateawareblocks');
    cy.contains('Devel Import').should('not.exist');
    cy.contains("Enable Devel Mode").click();
    cy.contains('Devel Import').should('exist');
}
);
});