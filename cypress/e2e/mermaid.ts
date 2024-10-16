import { loadFlowCode } from "../support/helper";
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe("Mermaid block type", () => {
  it("should render a mermaid graph", () => {
    loadFlowCode([
      {
        type: "mapping",
        mapping: "`A --> B --> C`",
      },
      {
        type: "mermaid",
        graphGetter: "data",
        diagramType: "graph",
        diagramDirection: "LR",
        svgId: "mermaid-svg-test-1",
      },
      {
        type: "mapping",
        mapping: "{graph: `A --> D --> C`}",
      },
      {
        type: "mermaid",
        graphGetter: "data.graph",
        diagramType: "graph",
        diagramDirection: "RL",
        svgId: "mermaid-svg-test-2",
      },
      {
        type: "mermaid",
        graphGetter: "state.local.graph",
        diagramType: "graph",
        diagramDirection: "TB",
        svgId: "mermaid-svg-test-3",
      },
      {
        type: "context-save",
        key: "state.local.graph",
        valueGetter: "`A --> B --> C; D --> B --> A`",
      },
    ]);
    cy.get("#mermaid-svg-test-1").should("exist"); // defaults
    cy.get("#mermaid-svg-test-2").should("exist"); // custom getter
    cy.get("#mermaid-svg-test-3").should("exist"); // dynamic context changes
  });
});
