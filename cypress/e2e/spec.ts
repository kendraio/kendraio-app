import { loadFlowCode } from '../support/helper';
// tslint:disable: quotemark


describe('workspace-project App', () => {

  beforeEach(() => {
    // Prevent external network request for adapter config
    cy.intercept('GET', 'https://kendraio.github.io/kendraio-adapter/config.json', {
      fixture: 'adapterConfig.json'
    }
    ).as('adapterConfig.json');

    // Prevent external network requests for Workflow cloud 
    cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
      fixture: 'workflow-cloud.json'
    }
    ).as('workflow-cloud.json');


    // Prevent external network requests for fonts with empty CSS rule
    cy.intercept('https://fonts.googleapis.com/**', "*{ }").as('emptyFonts');

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

    cy.contains(
      '3ab8d0cd-7b76-5741-8bc9-5725650dc435'
    );

  });


  it('should make new workflow with mapping block', () => {
    cy.visit('/workflow-builder');
    cy.contains('menu');
    cy.get('app-root mat-toolbar').contains('menu').click();
    cy.contains('workflow builder').click();
    cy.contains('settings');
    cy.get('mat-toolbar > button mat-icon').contains('settings').click({force: true});
    cy.get('app-workflow-sidenav').contains('delete_forever').click().get('app-workflow-sidenav').contains('Mapping').should('not.exist');
    cy.get('app-workflow-sidenav').contains('Add Task').click({force: true});
    cy.contains('Select Task');
    cy.get('mat-dialog-container').contains('Mapping').click();
    cy.get('button').contains('Add Task').click({force: true});
    cy.get('button').contains('Mapping');
  });


  it('should display a custom title and additional form elements for the mapping editor block', () => {
    loadFlowCode([
      {
        "type": "mapping",
        "mapping": "`true`",
        "blockComment": "testingComment",
      }
    ]);
    cy.get('mat-toolbar > button > mat-icon').contains('settings').click({force: true});
    cy.get('app-workflow-sidenav').contains('testingComment').should('exist');
    cy.get('app-workflow-sidenav').contains('testingComment').click();  
    // cy.get('app-workflow-sidenav').contains('Block Comment'); // FIXME: regression - MatFormField placeholder text is not visible
  });


  it('should display the comment for a generic editor block', () => {
    loadFlowCode([
      {
        "type": "template",
        "blockComment": "testingComment first line\nComment line2",
      }
    ]);
    cy.get('mat-toolbar > button mat-icon').contains('settings').click({force: true});
    cy.get('app-workflow-sidenav').contains('testingComment').should('exist');
    cy.get('app-workflow-sidenav').contains('line2').should('not.exist');
    cy.get('app-workflow-sidenav').contains('testingComment').click();
  });



  it('should display welcome message', () => {
    cy.intercept('https://app.kendra.io/api/core/dashboard', { fixture: 'dashboardHomeFlow.json' });
    cy.visit('/');
    cy.contains('Kendraio App is an open source dashboard');
  });


  it('should display saved workflows', () => {

    cy.intercept('GET', 'https://app.kendra.io/api/workflowCloud/listWorkflows', {
      fixture: 'listWorkflowsFlow.json'
    }).as('listWorkflowsFlow.json');

    cy.intercept('GET', 'https://app.kendra.io/api', {
      fixture: 'flowList.json'
    }
    ).as('flowList.json');

    cy.visit('/workflowCloud/listWorkflows');
    cy.contains('Made up flow A');
  });


  it('should prevent a user from leaving the flow when it flow has been modified', () => {
    cy.intercept('https://app.kendra.io/api/core/dashboard', { fixture: 'dashboardHomeFlow.json' });
    cy.intercept('GET', 'https://app.kendra.io/api/TESTING/dummy1', {
      fixture: 'dummyWorkflow1.json'
    }
    ).as('workflow.json');
    let count = 0;
    // intercept the request to confirm navigation
    // cancel the first attempt and then accept the next attemp
    cy.on('window:confirm', (str) => {
      count += 1;
      if (count === 1) {
        return false;
      } else {
        return true;
      }
    });

    cy.visit('/TESTING/dummy1');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/TESTING/dummy1');
    });
    cy.contains('Dummy Workflow 1').should('be.visible', { timeout: 10000 });
    cy.contains('settings');
    cy.get('mat-toolbar > button mat-icon').contains('settings').click({force: true});

    cy.get('app-workflow-sidenav').contains('Add Task').click({force: true});
    cy.contains('Select Task');
    cy.get('mat-dialog-container').contains('Mapping').click();
    cy.get('app-add-block-dialog .mat-dialog-actions').contains('Add Task').click({force: true});

    cy.get('app-root mat-toolbar').contains('menu').click();
    // click in the menu to navigate away
    cy.contains('Dashboard').click();
    // confirm that we're not on the dashboard
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/TESTING/dummy1');
    });
    // try again
    cy.contains('Dashboard').click();
    // this time we got there
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/dashboard');
    });
  })


});
