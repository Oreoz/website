/// <reference types="cypress" />

describe("resume", () => {
  beforeEach(() => cy.visit("http://localhost:3000/resume"));

  it("is navigatable", () => {
    cy.url().should("contain", "resume");
  });
});
