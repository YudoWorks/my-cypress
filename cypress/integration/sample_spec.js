describe("My First Test", () => {
  it("Does not to much", () => {
    expect(true).to.equal(true);
  });

  it("Visit the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });
});
