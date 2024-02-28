import { loadFlowCode } from '../support/helper';

/// <reference types="Cypress" />


describe('Actions block type', () => {
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

