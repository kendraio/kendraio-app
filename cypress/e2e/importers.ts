import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Google sheets import', () => {
    
  
    it('should extract shared CSV data from a published google sheet', () => {
      cy.intercept('GET', 'http://example.com/sheet1.csv', {
        fixture: 'googleSheet.csv'
      } ).as('googleSheet');
      loadFlowCode([          
          {
            "type": "init",            
          },
          {
            "type": "actions",
            "buttons": [
                {
                    "label": "Import Sheet",
                    "color": "default",
                    "blocks": [
                      {
                        "type": "gsheet",
                        "shareUrl": "http://example.com/sheet1.csv"
                      }
                    ],
                    "enabled": true
                }
            ]
        },
          
          {
            "type":"debug",
            "open":3
          }
      ]);
      cy.contains('Import Sheet').click().wait(['@googleSheet']);
      cy.contains("Adobe Cabernet Sauvignon Reserva").should('exist'); // defaults
    });

});