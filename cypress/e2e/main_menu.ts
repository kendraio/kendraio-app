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
      .should('be.visible')
      .should('contain.text', 'App modified on')
      .should('not.contain.text', 'A new version is available')
      .then($footer => {
        // Check that the footer is within the sidenav bounds, and not zero height
        const footerRect = $footer[0].getBoundingClientRect();
        const sidenav = $footer[0].closest('mat-sidenav');
        const sidenavRect = sidenav && sidenav.getBoundingClientRect();

        expect(footerRect.height).to.be.greaterThan(0);
        if (sidenavRect) {
          expect(footerRect.bottom).to.be.lessThan(sidenavRect.bottom + 1);
          expect(footerRect.top).to.be.greaterThan(sidenavRect.top - 1);
        }

        // Check that the footer text is not offscreen (no overflow)
        expect($footer[0].scrollHeight).to.eq($footer[0].clientHeight);
        expect($footer[0].scrollWidth).to.eq($footer[0].clientWidth);
      });
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
