import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Google sheets import', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://example.com/sheet1.csv', {
        fixture: 'googleSheet.csv'
      } ).as('googleSheet.csv');
  });

    
    it('should extract shared CSV data from a published google sheet', () => {
        loadFlowCode([          
          {
            "type": "init",            
          },
          {
            "type": "gsheet",
            "shareUrl": "http://example.com/sheet1.csv"
          },
          {
            "type":"debug",
            "open":3
          }
    ]);
        cy.contains("Adobe Cabernet Sauvignon Reserva").should('exist'); // defaults

    });

});