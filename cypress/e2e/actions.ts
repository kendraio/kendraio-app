import { loadFlowCode } from '../support/helper';

/// <reference types="Cypress" />

describe('Actions block type', () => {
  it('should display a button with label, id and default color', () => {
    loadFlowCode([
      {
        type: 'actions',
        buttons: [
          {
            label: 'OK',
            color: 'primary',
            id: 'button-primary',
            blocks: [
              {
                type: 'dispatch',
                action: 'resetApp',
              },
            ],
          },
          {
            label: 'Cancel',
            id: 'button-cancel',
            blocks: [
              {
                type: 'init',
              },
            ],
          },
        ],
      },
    ]);
    cy.get('#button-primary').should('exist');
    cy.get('#button-primary').contains('OK');
    cy.get('#button-primary').should(
      'have.attr',
      'ng-reflect-color',
      'primary'
    );
    cy.get('#button-cancel').should('exist');
    cy.get('#button-cancel').contains('Cancel');
  });

  it('should display a disabled button', () => {
    loadFlowCode([
      {
        type: 'actions',
        buttons: [
          {
            label: 'Disabled',
            id: 'button-disabled',
            blocks: [],
            enabledGetter: false,
          },
        ],
      },
    ]);
    cy.get('#button-disabled').should('exist');
    cy.get('#button-disabled').should('have.attr', 'ng-reflect-disabled');
  });
});

describe('LinkActionComponent', () => {
  it('should generate the correct link URL from plain strings', () => {
    // Tests with hardcoded values
    loadFlowCode([
      {
        type: 'link-action',
        label: 'Test Link',
        adapterName: 'myAdapter',
        workflowId: 'myWorkflow',
      },
    ]);
    cy.get('app-link-action a').should(
      'have.attr',
      'href',
      '/myAdapter/myWorkflow'
    );
  });

  it('should generate the correct link URL using object mappings', () => {
    // Test with JMESPath expressions
    loadFlowCode([
      {
        type: 'mapping',
        mapping: '{ adapter: `testAdapter`, workflow: `testWorkflow` }',
      },
      {
        type: 'link-action',
        label: 'Dynamic Link',
        adapterNameGetter: 'data.adapter',
        workflowIdGetter: 'data.workflow',
      },
    ]);
    cy.get('app-link-action a').should(
      'have.attr',
      'href',
      '/testAdapter/testWorkflow'
    );
  });

  it('should not have no link target by default', () => {
    // The default behavior should be to open the link in the same tab,
    // it's up to the user and their user-agent to decide how to handle the link.
    loadFlowCode([
      {
        type: 'link-action',
        label: 'Test Link',
        adapterName: 'myAdapter',
        workflowId: 'myWorkflow',
      },
    ]);
    cy.get('app-link-action a').should('not.have.attr', 'target');
  });
});
