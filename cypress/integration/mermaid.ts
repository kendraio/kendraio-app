import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />


describe('Mermaid block type', () => {

    it('should render a mermaid graph', () => {
        loadFlowCode([          
          {
            "type": "mapping",
            "mapping": "`A --> B --> C`",
          },
          {
            "type": "mermaid",
            "graphGetter": "data",
            "diagramType": "graph",
            "diagramDirection": "LR",
            "svgId": "mermaid-svg-test-1"
        },
        {
            "type": "mermaid",
            "graphGetter": "data",
            "diagramType": "graph",
            "diagramDirection": "RL",
            "svgId": "mermaid-svg-test-2"
        }    
    ]);
        cy.get('#mermaid-svg-test-1').should('exist');
        cy.get('#mermaid-svg-test-2').should('exist');

    });

});