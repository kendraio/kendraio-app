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

function assertFooterInViewport() {
  cy.get('.sidenav-footer').then($footer => {
    const footerEl = $footer[0];
    cy.window().then(win => {
      const rect = footerEl.getBoundingClientRect();
      expect(rect.top, 'footer top is within viewport').to.be.gte(0);
      expect(rect.bottom, 'footer bottom is within viewport').to.be.lte(win.innerHeight);
    });

    const sidenavContainer = footerEl.closest('.mat-drawer-inner-container');
    if (sidenavContainer) {
      const { scrollHeight, clientHeight } = sidenavContainer;
      expect(scrollHeight, 'sidenav inner container fits without vertical overflow').to.be.lte(clientHeight + 1);
    }
  });
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

    assertFooterInViewport();
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

    assertFooterInViewport();
  });
});
