describe("My First Test", () => {
  it("Does not to much", () => {
    expect(true).to.equal(true);
  });

  it("Visit the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });

  it('find the component "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });

  it("click the link type", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
  });

  it('click "type" navigate to a new url', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
  });
});
