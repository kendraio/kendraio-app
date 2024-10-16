import { loadFlowCode } from "../support/helper";
// tslint:disable: quotemark
/// <reference types="Cypress" />

describe("Old Account page", () => {
  it("the callback page should always redirect to /user", () => {
    cy.visit("/callback");
    cy.url().should("contain", "/user");
  });
});
