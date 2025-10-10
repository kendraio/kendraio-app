/// <reference types="Cypress" />

function openSidebar() {
  cy.get('mat-sidenav').then($s => {
    if (!$s.hasClass('mat-drawer-opened')) {
      cy.get('button[mat-icon-button]').first().click();
    }
  });
  // Waits for the sidebar to be fully opened:
  cy.get('mat-sidenav').should('have.class', 'mat-drawer-opened');
}

describe('Main menu with app modified date footer', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    }).as('adapterConfig');
    cy.intercept('https://fonts.googleapis.com/**', '*{ }');
  });

  it('shows modified date footer and existing menu items', () => {
    cy.visit('/');
    openSidebar();
    
    const MENU_ITEMS = [
      'Dashboard',
      'Settings',
      'Adapters',
      'Flow Cloud',
      'Flow Builder',
      'Form Builder',
      'Query Builder'
    ];

    MENU_ITEMS.forEach(item => {
      cy.get('app-main-menu').contains(item).should('be.visible');
    });

    cy.get('.sidenav-footer')
      .should('contain.text', 'App modified on')
      .should('not.contain.text', 'A new version is available');
  });

  it('shows update banner when a newer version exists', () => {
    const firstLoad = { timestamp: 1728499200000 };
    const refreshedLoad = { timestamp: 1728499200001 };

    cy.intercept('GET', '/ngsw.json', req => {
      const isRefresh = req.headers['cache-control'] === 'no-cache';
      if (isRefresh) {
        req.reply(refreshedLoad);
      }
      if (!isRefresh) {
        req.reply(firstLoad);
      }
    });

    cy.visit('/');
    openSidebar();

    cy.get('.sidenav-footer')
      .should('be.visible')
      .should('contain.text', 'App modified on')
      .should('contain.text', 'A new version is available');

  });
});
