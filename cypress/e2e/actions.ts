import { loadFlowCode } from '../support/helper';

// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Actions block type', () => {

    // beforeEach(() => {
    //     // Prevent external network request for adapter config
    //     cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
    //         fixture: 'adapterConfig.json'
    //     });

    //     // Prevent external network requests for Workflow cloud
    //     cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
    //         fixture: 'workflow-cloud.json'
    //     });

    //     // Prevent external network requests for fonts with empty CSS rule 
    //     cy.intercept('https://fonts.googleapis.com/\*\*', "\*{ }");
    // });

    it('should display a button with label, id and default color', () => {

        loadFlowCode([
            {
                "type": "actions",
                "buttons": [
                  {
                    "label": "OK",
                    "color": "primary",
                    "id": "button-primary",
                    "blocks": [
                      {
                        "type": "dispatch",
                        "action": "resetApp"
                      }
                    ]
                  },
                  {
                    "label": "Cancel",
                    "id": "button-cancel",
                    "blocks": [
                      {
                        "type": "init"
                      }
                    ]
                  }
                ]
              }
        ]);
        cy.get("#button-primary").should('exist');
        cy.get("#button-primary").contains('OK');
        cy.get("#button-primary").should('have.attr', 'ng-reflect-color', 'primary');
        cy.get("#button-cancel").should('exist');
        cy.get("#button-cancel").contains('Cancel');
    });

    it('should display a disabled button', () => {
        loadFlowCode([
            {
                "type": "actions",
                "buttons": [
                  {
                    "label": "Disabled",
                    "id": "button-disabled",
                    "blocks": [],
                    "enabledGetter": false
                  }
                ]
              }
        ]);
        cy.get("#button-disabled").should('exist');
        cy.get("#button-disabled").should('have.attr', 'ng-reflect-disabled');
    });
});

