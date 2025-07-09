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
    cy.contains('Flow Builder').click();
    cy.contains('settings');
    cy.get('[data-cy="toolbar-setting-button"]').click();
    cy.get('app-workflow-sidenav').contains('delete_forever').click().get('app-workflow-sidenav').contains('Mapping').should('not.exist');
    cy.get('[data-cy="blocks-editor-add-task"]').click();
    cy.contains('Select Task');
    cy.get('mat-dialog-container').contains('Mapping').click();
    cy.get('[data-cy="dialog-addBlock-addTask-button"]').click();
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
    cy.get('[data-cy="toolbar-setting-button"]').click();
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
    cy.get('[data-cy="toolbar-setting-button"]').click();
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
    cy.contains('Submit').click();
    cy.contains('Made up flow A');
  });

  it("should prevent a user from leaving the flow when the flow has been modified", () => {
    // Selectors:
    const START_WORKFLOW_PATH = "/TESTING/dummy1";
    const DASHBOARD_PATH = "/dashboard";
    const ADD_TASK_BUTTON_SELECTOR = '[data-cy="blocks-editor-add-task"]';
    const ACCEPT_BLOCK_BUTTON_SELECTOR = '[data-cy="dialog-addBlock-addTask-button"]';
    const BLOCK_DIALOG_SELECTOR = "app-add-block-dialog";

    // Arrange:
    cy.intercept("https://app.kendra.io/api/core/dashboard", {
      fixture: "dashboardHomeFlow.json",
    });
    cy.intercept("GET", "https://app.kendra.io/api/TESTING/dummy1", {
      fixture: "dummyWorkflow1.json",
    }).as("workflow.json");

    // Simulates user control of confirm dialog:
    let stayOnPage = true;
    cy.on("window:confirm", () => {
      if (stayOnPage) {
        // Upon first navigation attempt, by returning false,
        // we cancel the confirm dialog and stay on the page.
        stayOnPage = false;
        return false;
      } else {
        // For the second confirm dialog, navigation is allowed.
        return true;
      }
    });

    cy.visit(START_WORKFLOW_PATH);
    cy.location("pathname").should("eq", START_WORKFLOW_PATH);
    cy.contains("Dummy Workflow 1").should("be.visible");

    // Act:

    // We make the flow dirty by adding a mapping block:
    console.log("Opening workflow settings");
    cy.contains("settings");
    cy.get("mat-toolbar > button mat-icon").contains("settings").click();
    console.log("Adding mapping task");
    cy.get(ADD_TASK_BUTTON_SELECTOR).click();
    cy.get(BLOCK_DIALOG_SELECTOR).within(() => {
      cy.contains("Mapping").click();
    });
    cy.get(ACCEPT_BLOCK_BUTTON_SELECTOR).click();
    // After confirming block, the confirm button should go away
    cy.get(ACCEPT_BLOCK_BUTTON_SELECTOR).should("not.exist");

    console.log("Attempting first navigation to dashboard");
    cy.get("app-root mat-toolbar").contains("menu").click();
    cy.contains("Dashboard").click();

    // Assert leaving the page is prevented:
    // - After navigation attempt, a confirm dialog is called
    // - We simulate the user cancelling the first navigation attempt
    // - We expect the path to remain the same
    cy.location("pathname").should("eq", START_WORKFLOW_PATH);

    console.log("Attempting second navigation to dashboard");
    cy.contains("Dashboard").click();
    // On second attempt, user confirms navigation dialog,
    // and we verify the path has changed:
    cy.location("pathname").should("eq", DASHBOARD_PATH);
  });
});

