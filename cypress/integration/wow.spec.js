/// <reference types="cypress" />

describe("wow", () => {
  beforeEach(() => cy.visit("http://localhost:3000/wow"));

  it("works 🚀", () => {
    cy.get('[data-test-id="success-indicator"]').should(
      "have.class",
      "bg-red-400"
    );

    cy.get('[data-test-id="enemy-ratio"').should("have.text", "NaN");
    cy.get('[data-test-id="ally-ratio"]').should("have.text", "NaN");

    cy.get('[data-test-id="enemy-atk"')
      .should("have.value", 0)
      .type("{selectAll}250")
      .should("have.value", 250);

    cy.get('[data-test-id="enemy-def"')
      .should("have.value", 0)
      .type("{selectAll}3400")
      .should("have.value", 3400);

    cy.get('[data-test-id="ally-atk"')
      .should("have.value", 0)
      .type("{selectAll}400")
      .should("have.value", 400);

    cy.get('[data-test-id="ally-def"')
      .should("have.value", 0)
      .type("{selectAll}5000")
      .should("have.value", 5000);

    cy.get('[data-test-id="enemy-ratio"').should("have.text", "8.5");
    cy.get('[data-test-id="ally-ratio"]').should("have.text", "20");

    cy.get('[data-test-id="success-indicator"]').should(
      "have.class",
      "bg-green-400"
    );
  });
});
