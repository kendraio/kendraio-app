describe('workspace-project App', () => {
  beforeEach(() => cy.visit('/'));

  it('should load a saved flow and assert a uuid output exists', () => {
    cy.visit('/workflow-builder?data=NobwRALgngDgpmAXGAtgQxjAlgOwOZgA0qG2+SYArpVgCYAUA5BHAM4SMCUYAvoeNHgVacAEaUCxAPbwcSAIzFWACykB3AMJScLAB4QkAMzQAbVnB4BdIA');
    cy.contains('3ab8d0cd-7b76-5741-8bc9-5725650dc435', { timeout: 10000 });
  });

  it('should make new workflow with mapping block', () => {
    //cy.contains('Kendraio App');
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

  it('should display welcome message', () => {
    cy.contains('Kendraio App');
  });

});
