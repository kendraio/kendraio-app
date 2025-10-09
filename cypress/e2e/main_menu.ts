import { loadFlowCode } from '../support/helper';
/// <reference types="Cypress" />

function openSidebar() {
  // Open the sidebar if not already open
  cy.get('mat-sidenav').then(($sidenav) => {
    if (!$sidenav.hasClass('mat-drawer-opened')) {
      cy.get('button[mat-icon-button]').first().click();
    }
  });

  // Wait for sidebar to be fully open
  cy.get('mat-sidenav').should('have.class', 'mat-drawer-opened');
}

describe('Main Menu and Service Worker Info', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    }).as('adapterConfig');

    // Prevent external network requests for fonts
    cy.intercept('https://fonts.googleapis.com/**', "*{ }");
  });

  it('should show all menu items and service worker date in the left sidebar footer', () => {
    cy.visit('/');

    openSidebar();

    const menuItems = [
      'Dashboard',
      'Settings',
      'Adapters',
      'Flow Cloud',
      'Flow Builder',
      'Form Builder',
      'Query Builder'
    ];

    // Verify all menu items are visible
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

    // Verify the footer is fully visible with no clipping
    cy.get('.left-sidenav__footer').then(($footer) => {
      const footer = $footer[0];
      const footerRect = footer.getBoundingClientRect();
      const sidenavRect = footer.closest('mat-sidenav')?.getBoundingClientRect();

      expect(footerRect.height).to.be.greaterThan(0);

      if (sidenavRect) {
        expect(footerRect.bottom).to.be.lessThan(sidenavRect.bottom + 1);
        expect(footerRect.top).to.be.greaterThan(sidenavRect.top - 1);
      }
    });

    // Verify the schedule icon is visible
    cy.get('.left-sidenav__footer mat-icon')
      .should('be.visible')
      .should('contain', 'schedule');

    // Verify that no update message is shown when no newer version is available
    cy.get('.update-info').should('not.exist');
  });

  it('should show update available message when a newer version is detected', () => {
    // Mock ngsw.json with current timestamp for status, newer for update check
    cy.intercept('GET', '/ngsw.json', (req) => {
      if (req.headers['cache-control'] === 'no-cache') {
        req.reply({ timestamp: 1728499200001 }); // newer timestamp
      } else {
        req.reply({ timestamp: 1728499200000 }); // current timestamp
      }
    });

    cy.visit('/');

    openSidebar();

    // Verify the service worker footer exists and is visible
    cy.get('.left-sidenav__footer').should('exist').should('be.visible');

    // Verify date information is visible
    cy.get('.left-sidenav__footer .sw-info__value').should('be.visible').then(($value) => {
      const text = $value.text().trim();
      expect(text).to.match(/^App modified on /);
      const rest = text.replace('App modified on ', '');
      expect(rest).to.match(/^[A-Z][a-z]{2} \d{1,2}, \d{4}$/); // should be the current date
    });

    // Verify the update message is visible
    cy.get('.update-info').should('be.visible').should('contain', 'A new version is available');
  });
});
