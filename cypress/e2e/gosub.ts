import { loadFlowCode } from "../support/helper";
// tslint:disable: quotemark

describe("Subroutine workflow block", () => {
  it("should display dropdown options from the workflow cloud", () => {
    cy.intercept("GET", "https://app.kendra.io/api", {
      fixture: "flowList.json",
    }).as("flowList.json");

    // Prevent external network request for adapter config
    cy.intercept(
      "GET",
      "https://kendraio.github.io/kendraio-adapter/config.json",
      {
        fixture: "adapterConfig.json",
      },
    ).as("adapterConfig.json");

    // Prevent external network requests for fonts with empty CSS rule
    cy.intercept("https://fonts.googleapis.com/**", "*{ }");
    loadFlowCode([
      {
        type: "gosub",
        adapterName: "someAdapterA",
        workflowId: "madeUpFlowIDA",
      },
    ]);
    cy.get("mat-toolbar > button mat-icon").contains("settings").click();
    cy.get("#mat-expansion-panel-header-0").click();
    // cy.pause();
    cy.get("#mat-input-0")
      .clear()
      .type("s")
      .type("o")
      .get(".mat-option-text", { timeout: 1000 })
      .contains("someAdapterB");
    cy.get("#mat-input-0")
      .clear()
      .type("someAdapterB")
      .get("#mat-input-1")
      .clear()
      .get(".mat-option-text", { timeout: 1000 })
      .contains("madeUpFlowIDB");
  });
});
