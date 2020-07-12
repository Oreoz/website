/// <reference types="cypress" />

describe("landing page", () => {
  beforeEach(() => cy.visit("http://localhost:3000"));

  it("displays my name and story", () => {
    cy.contains("Jean-Philippe Roy").should("be.visible");

    cy.get('[data-test-id="paragraph-1"]').should("exist");
    cy.get('[data-test-id="paragraph-2"]').should("exist");
    cy.get('[data-test-id="paragraph-3"]').should("exist");
  });

  it("displays my avatar", () => {
    cy.get('[data-test-id="avatar"]').should("be.visible");
  });

  it("displays social icons", () => {
    cy.get('[data-test-id="linkedin"]').should("be.visible");
    cy.get('[data-test-id="twitter"]').should("be.visible");
    cy.get('[data-test-id="github"]').should("be.visible");
  });
});
