import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark

describe('Subroutine workflow block', () => {

    it('should display dropdown options from the workflow cloud', () => {
    cy.intercept('GET', 'https://app.kendra.io/api', {
        fixture: 'flowList.json'
    }
    ).as('flowList.json');

    loadFlowCode([
        {
            "type": "gosub",
            "adapterName": "someAdapterA",
            "workflowId": "madeUpFlowIDA"
        }
    ]);
    cy.get('mat-toolbar > button mat-icon').contains('settings').click();
    cy.get("#mat-expansion-panel-header-0").click();
    cy.pause();
    cy.get("#mat-input-0").clear().type("s");
    cy.get(".mat-option-text").contains("someAdapterB")
    cy.get("#mat-input-0").clear().type("someAdapterB");
    cy.get("#mat-input-1").clear();
    cy.get(".mat-option-text").contains("madeUpFlowIDB")
    });

});

