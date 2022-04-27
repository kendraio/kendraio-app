import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('Template blocks', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
       fixture: 'adapterConfig.json' }
       ).as('adapterConfig.json');
  });

  it('should render visible html', () => {
    loadFlowCode([     
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{\r\n    \"header\": `Header`,\r\n    \"content\": `Content`\r\n}",
        "blockComment": ""
      },
      {
        "type": "template",
        "template": "<p>visible:{{data.header}}</p><p>visible:{{data.content}}</p>",
        "blockComment": ""
      },
      {
        "type": "template",
        "template": "<p>invisible:{{data.header}}</p><p>invisible:{{data.content}}</p>",
        "renderToScreen": false,
        "blockComment": ""
      },
      {
        "type": "debug",
        "open":2
      }
    ]);
    cy.get('.dynamic-content').contains('visible:Header').should("exist");
    cy.get('.dynamic-content').contains('invisible:Header', { timeout: 100 }).should("not.exist");
  
  });

  it('should render html to the flow if renderToData is true', () => {
    loadFlowCode([     
      {
        "type": "init"
      },
      {
        "type": "mapping",
        "mapping": "{\r\n    \"header\": `Header`,\r\n    \"content\": `Content`\r\n}",
        "blockComment": ""
      },
      {
        "type": "template",
        "template": "<p>invisible:{{data.header}}</p><p>invisible:{{data.content}}</p>",
        "renderToScreen": false,
        "key":"renderedHtml",
       },
      {
        "type": "debug",
        "open":2
      }
    ]);
   
    cy.get('.dynamic-content').contains('invisible:Header', { timeout: 100 }).should("not.exist");
    cy.get('.model-output').contains('invisible:Header', { timeout: 100 }).should("exist");
  });


});

