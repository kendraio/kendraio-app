import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark

describe('Kendraio context and state', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
       fixture: 'adapterConfig.json' }
       ).as('adapterConfig.json');
  });

  it('A debug block should show global state values', () => {
    loadFlowCode([     
      {
         "type":"template",
         "template":"{{state.global.test}}"
      },
      {
        "type": "context-save",
        "valueGetter": "uuid('test')",        
        "contextKey":"state.global.test",
        "skipFirst":false
      }
    ]);
    cy.contains('3ab8d0cd-7b76-5741-8bc9-5725650dc435', { timeout: 10000 });
  });


});
