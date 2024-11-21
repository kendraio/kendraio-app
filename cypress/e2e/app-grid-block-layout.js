import { loadFlowCode } from "../support/helper";

// tslint:disable: quotemark
/// <reference types="Cypress" />

const TEST_GRID_CONFIG = {
  type: "grid",
  passThrough: true,
  gridOptions: {
    pagination: true, // This may overlap with column headers with no styling
    paginationPageSize: 15,
    defaultColDef: {
      sortable: true,
      resizable: true,
    },
  },
  columnDefs: [
    {
      field: "0",
      headerName: "Column 1",
    },
    {
      field: "1",
      headerName: "Column 2",
    },
    {
      field: "2",
      headerName: "Column 3",
    },
    {
      field: "3",
      headerName: "Column 4",
    },
    {
      field: "4",
      headerName: "Column 5",
    },
  ],
};

describe("Grid Block Columns", () => {
  beforeEach(() => {
    // Prevent external network requests for config
    cy.intercept(
      "GET",
      "https://kendraio.github.io/kendraio-adapter/config.json",
      { fixture: "adapterConfig.json" }
    ).as("adapterConfig");

    // Prevent external network requests for fonts with empty CSS rule
    cy.intercept("https://fonts.googleapis.com/**", "*{ }").as("fonts");

    loadFlowCode([TEST_GRID_CONFIG]);
  });

  it("should display the columns side by side without text overlap", () => {
    // Wait for headers to load
    cy.get('.ag-header-cell').should('have.length.at.least', 2);
    cy.get('.ag-header-cell').then(($columns) => {
      const firstColumnBounds = $columns[0].getBoundingClientRect();
      const secondColumnBounds = $columns[1].getBoundingClientRect();

      // Assert that columns are side by side without overlap
      expect(firstColumnBounds.right).to.be.at.most(secondColumnBounds.left);
    });
  });

});
