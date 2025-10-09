import { loadFlowCode } from '../support/helper';
/// <reference types="Cypress" />

describe('Main Menu and Service Worker Info', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    }).as('adapterConfig');

    // Prevent external network requests for Workflow cloud
    cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
      fixture: 'workflow-cloud.json'
    }).as('workflowCloud');

    // Prevent external network requests for fonts
    cy.intercept('https://fonts.googleapis.com/**', "*{ }");

    cy.visit('/');
  });

  it('should show all menu items and service worker date in the left sidebar footer', () => {
    // Open the sidebar if not already open
    cy.get('mat-sidenav').then(($sidenav) => {
      if (!$sidenav.hasClass('mat-drawer-opened')) {
        cy.get('button[mat-icon-button]').first().click();
      }
    });

    // Wait for sidebar to be fully open
    cy.get('mat-sidenav').should('have.class', 'mat-drawer-opened');

    // Verify all menu items are visible
    const menuItems = [
      'Dashboard',
      'Settings',
      'Adapters',
      'Flow Cloud',
      'Flow Builder',
      'Form Builder',
      'Query Builder'
    ];

    menuItems.forEach((item) => {
      cy.get('.left-sidenav__menu').contains(item).should('be.visible');
    });

    // Verify the service worker footer exists and is visible
    cy.get('.left-sidenav__footer').should('exist').should('be.visible');

    // Verify date information is visible (either updated date or status message)
    cy.get('.left-sidenav__footer .sw-info__value').should('be.visible').then(($value) => {
      const text = $value.text().trim();
      // Should start with 'App modified on' followed by date or status
      expect(text).to.match(/^App modified on /);
      const rest = text.replace('App modified on ', '');
      expect(rest).to.match(/^[A-Z][a-z]{2} \d{1,2}, \d{4}$|Awaiting activation/);
    });

    // Verify the footer is fully visible within the sidenav (no clipping)
    cy.get('.left-sidenav__footer').then(($footer) => {
      const footer = $footer[0];
      const footerRect = footer.getBoundingClientRect();
      const sidenavRect = footer.closest('mat-sidenav')?.getBoundingClientRect();

      expect(footerRect.height).to.be.greaterThan(0);

      if (sidenavRect) {
        expect(footerRect.bottom).to.be.lessThan(sidenavRect.bottom + 1); // allow rounding
        expect(footerRect.top).to.be.greaterThan(sidenavRect.top - 1);
      }
    });

    // Verify the schedule icon is visible
    cy.get('.left-sidenav__footer mat-icon')
      .should('be.visible')
      .should('contain', 'schedule');
  });
});
