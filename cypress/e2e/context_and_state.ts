import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe('Kendraio context and state', () => {
  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept(
      'GET',
      'https://kendraio.github.io/kendraio-adapter/config.json',
      {
        fixture: 'adapterConfig.json',
      }
    ).as('adapterConfig.json');

    // Prevent external network requests for fonts with empty CSS rule
    cy.intercept('https://fonts.googleapis.com/**', '*{ }');
  });

  it('should be possible for a template block to access global state values', () => {
    loadFlowCode([
      {
        type: 'template',
        template: '{{state.global.test}}|{{state.local.test}}',
      },
      {
        type: 'context-save',
        valueGetter: '`globalTest`',
        key: 'state.global.test',
        skipFirst: false,
      },
      {
        type: 'context-save',
        valueGetter: '`localTest`',
        key: 'state.local.test',
        skipFirst: false,
      },
    ]);
    cy.contains('globalTest', { timeout: 10000 });
    cy.contains('localTest', { timeout: 10000 });
  });

  it('should be possible for a mapping block to access global state values', () => {
    loadFlowCode([
      {
        type: 'init',
      },
      {
        type: 'form',
        hasSubmit: false,
        emitOnInit: true,
        jsonSchema: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
              title: 'Form textbox',
              default: 'Default text',
            },
          },
        },
        uiSchema: {},
        blockComment: '',
      },
      {
        type: 'mapping',
        mapping: 'data.text',
        blockComment: '',
      },
      //{
      //  "type": "debug",
      //  "open": 3,
      //  "showData": true,
      //  "showContext": false,
      //  "showState": false,
      //  "blockComment": ""
      //},
      {
        type: 'context-save',
        key: 'state.global.term',
        valueGetter: 'data',
        blockComment: '',
      },
      {
        type: 'mapping',
        mapping: 'uuid(`test`)',
        blockComment: 'uuid(`test`)',
      },
      {
        type: 'mapping',
        mapping: 'state.global.term',
        blockComment: 'state.global.term',
        ignoreState: false,
      },
      {
        type: 'template',
        template:
          '<p>If reactivity works, we should see the text from the form propogate to the mapping block below after page load, and see the debug blocks above and below update:',
        blockComment: '',
      },
      {
        type: 'debug',
        open: 3,
        showData: true,
        showContext: false,
        showState: false,
        blockComment: '',
      },
    ]);
    // We wait for the form block to have an input box that contains "Default text", then we wait 4 seconds and change the text to "New text"
    cy.get('.json-formatter-string').should('contain', 'Default text');
    cy.get('input')
      .should('have.value', 'Default text')
      .clear()
      .type('New text');
    // We wait for a span with the class of "json-formatter-string" to contain "New text" (which indicates a successful reactivity update)
    cy.get('.json-formatter-string').should('contain', 'New text');
  });

  it('should be possible for a mapping block to ignore updates to global state values', () => {
    loadFlowCode([
      {
        type: 'init',
      },
      {
        type: 'form',
        hasSubmit: false,
        emitOnInit: true,
        jsonSchema: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
              title: 'Form textbox',
              default: 'Default text',
            },
          },
        },
        uiSchema: {},
        blockComment: '',
      },
      {
        type: 'mapping',
        mapping: 'data.text',
        blockComment: '',
      },
      {
        type: 'debug',
        open: 3,
        showData: true,
        showContext: false,
        showState: false,
        blockComment: '',
      },
      {
        type: 'context-save',
        key: 'state.global.term',
        valueGetter: 'data',
        blockComment: '',
      },
      {
        type: 'mapping',
        mapping: 'uuid(`test`)',
        blockComment: 'uuid(`test`)',
      },
      {
        type: 'mapping',
        mapping: 'state.global.term',
        blockComment: 'state.global.term',
        ignoreState: true,
      },
      {
        type: 'debug',
        open: 3,
        showData: true,
        showContext: false,
        showState: false,
        blockComment:
          'If reactivity works, we should see the text from the form propogate to the bottom mapping (and debug) block above',
      },
    ]);

    cy.contains('Object')
      .document()
      .then((doc) => {
        const debugBlocks = doc.getElementsByTagName('app-debug-block');
        expect(debugBlocks[0].innerText.includes('data:null')).to.be.true;
        expect(debugBlocks[1].innerText.includes('data:Object')).to.be.true;
      });

    cy.get('input')
      .should('have.value', 'Default text')
      .clear()
      .type('Unexpected change');
    cy.contains('Unexpected change'); // The first debug block should update but
    cy.contains('Object'); // The second one should have an empty object still.
    cy.document().then((doc) => {
      const debugBlocks = doc.getElementsByTagName('app-debug-block');
      expect(debugBlocks[0].innerText.includes('data:null')).to.be.false;
      expect(debugBlocks[0].innerText.includes('Unexpected change')).to.be.true;
      expect(debugBlocks[1].innerText.includes('data:Object')).to.be.true;
    });
  });

  it('should allow the enabling and disabling of action buttons', () => {
    loadFlowCode([
      {
        type: 'context-save',
        valueGetter: '`true`',
        contextKey: 'state.global.enabled',
        skipFirst: false,
      },
      {
        type: 'context-save',
        valueGetter: '`false`',
        contextKey: 'state.global.disabled',
        skipFirst: false,
      },
      {
        type: 'actions',
        buttons: [
          {
            label: 'Visible',
            color: 'default',
            blocks: [],
            enabledGetter: 'state.global.enabled',
            id: 'button-enabled',
          },
          {
            label: 'Visible and disabled',
            color: 'default',
            blocks: [],
            enabledGetter: 'state.global.disabled',
            id: 'button-disabled',
          },
        ],
      },
    ]);
    cy.get('#button-enabled').should('exist');
    cy.get('#button-disabled').should('exist');
    cy.get('#button-disabled').should('have.attr', 'ng-reflect-disabled');
  });

  it('should allow the disabling of the datagrid', () => {
    loadFlowCode([
      {
        type: 'context-save',
        valueGetter: '`true`',
        contextKey: 'state.global.disabled',
      },
      {
        type: 'mapping',
        mapping:
          '[{one:`Column 1`, two:`col 2`},{one:`Data Grid Exists`, two: `more`}]',
      },
      {
        type: 'grid',
        gridOptions: {},
        passThrough: false,
        firstRowHeaders: true,
        enabledGetter: 'state.global.disabled',
      },
      {
        type: 'debug',
      },
    ]);
    let datagrid_selector = 'ag-grid-angular';
    cy.get(datagrid_selector, { timeout: 10000 }).should('not.exist');
  });

  it('should allow the disabling of the debug block', () => {
    loadFlowCode([
      {
        type: 'context-save',
        valueGetter: '`false`',
        contextKey: 'state.global.disabled',
      },
      {
        type: 'context-save',
        valueGetter: '`true`',
        contextKey: 'state.global.enabled',
      },
      {
        type: 'mapping',
        mapping: '`debug disabled`',
      },
      {
        type: 'debug',
        enabledGetter: 'state.global.disabled',
      },
      {
        type: 'mapping',
        mapping: '`debug enabled`',
      },
      {
        type: 'debug',
        enabledGetter: 'state.global.enabled',
      },
    ]);
    let datagrid_selector = 'ag-grid-angular';
    cy.contains('debug enabled').should('exist');
    cy.contains('debug disabled').should('not.exist');
  });

  it('should allow the disabling of the file input block ', () => {
    // Use a fixture workflow to define a standard set of state aware blocks
    cy.intercept('GET', 'https://app.kendra.io/api/TESTING/stateawareblocks', {
      fixture: 'stateAwareBlocks.json',
    }).as('workflow.json');
    cy.visit('/TESTING/stateawareblocks');
    cy.contains('Devel Mode File Import').should('not.exist');
    cy.contains('Enable Devel Mode').click();
    cy.contains('Devel Mode File Import').should('exist');
  });

  it('should be possible to reference context variables in a form', () => {
    loadFlowCode([
      {
        type: 'mapping',
        mapping:
          '`{"type": "string", "enum":["test", "injected"], "default":"injected"}`',
        blockComment: '',
      },
      {
        type: 'context-save',
        key: 'saved',
      },
      {
        type: 'form',
        jsonSchema: {
          type: 'object',
          properties: {
            test_property: {
              $ref: '#/definitions/context/saved',
            },
          },
        },
        uiSchema: {},
      },
    ]);

    cy.contains('injected').should('exist');
  });
});
