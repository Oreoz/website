beforeEach(() => cy.visit("http://localhost:3000"));

describe("landing page", function() {
  it("displays my name and provenance", function() {
    cy.contains("Jean-Philippe Roy").should('be.visible');
    cy.contains("from Montréal").should('be.visible');
  });
});
