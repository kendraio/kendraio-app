import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark

describe('workspace-project App', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
       fixture: 'adapterConfig.json' }
       ).as('adapterConfig.json');
  });

  it('should assert the mapping block produces the expected UUID string output', () => {
    loadFlowCode([
      {
        "type": "mapping",
        "mapping": "uuid('test')"
      },
      {
        "type": "debug",
        "open": 1,
        "showContext": false
      }
    ]);
    cy.contains('3ab8d0cd-7b76-5741-8bc9-5725650dc435', { timeout: 10000 });
  });

  it('should make new workflow with mapping block', () => {
    cy.visit('/');
    cy.contains('menu');
    cy.get('app-root mat-toolbar').contains('menu').click();
    cy.contains('workflow builder').click();
    cy.contains('settings');
    cy.get('mat-toolbar > button mat-icon').contains('settings').click();
    cy.get('app-workflow-sidenav').contains('delete_forever').click();
    cy.get('app-workflow-sidenav').contains('Mapping').should('not.exist');
    cy.get('app-workflow-sidenav').contains('Add Task').click();
    cy.contains('Select Task');
    cy.get('mat-dialog-container').contains('Mapping').click();
    cy.get('app-add-block-dialog .mat-dialog-actions').contains('Add Task').click();
    cy.get('app-workflow-sidenav').contains('Mapping');
  });

  it('should display a custom title and additional form elements for the mapping editor block', () => {
    loadFlowCode([
      {
        "type": "mapping",
        "mapping": "`true`",        
        "blockComment": "testingComment",
      }
    ]);
    cy.get('mat-toolbar > button mat-icon').contains('settings').click();
    cy.get('app-workflow-sidenav').contains('testingComment').should('exist');    
    cy.get('app-workflow-sidenav').contains('testingComment').click();        
    cy.get('app-workflow-sidenav').contains('Block Comment');    
  });

  it('should display the comment for a generic editor block', () => {
    loadFlowCode([
      {
        "type": "template",                
        "blockComment": "testingComment first line\nComment line2",
      }
    ]);
    cy.get('mat-toolbar > button mat-icon').contains('settings').click();
    cy.get('app-workflow-sidenav').contains('testingComment').should('exist');
    cy.get('app-workflow-sidenav').contains('line2').should('not.exist');
    cy.get('app-workflow-sidenav').contains('testingComment').click();        
  });



  it('should display welcome message', () => {
    cy.visit('/');
    cy.contains('Kendraio App');
  });

  it('should display saved workflows', () => {
    cy.intercept('GET', 'https://app.kendra.io/api', {
      fixture: 'flowList.json' }
      ).as('flowList.json');
    
    cy.visit('/workflowCloud/listWorkflows');
    cy.contains('Made up flow A', { timeout: 10000 });
  });

});
