/// <reference types="cypress" />

describe("resume", () => {
  beforeEach(() => cy.visit("http://localhost:3000/resume"));

  it("exists", () => {
    cy.url().should("contain", "resume");
  });
});
