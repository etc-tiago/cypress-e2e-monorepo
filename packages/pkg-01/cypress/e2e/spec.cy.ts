describe("template spec", () => {
  it("passes", () => {
    cy.visit("/").get('[data-img="test-ok"]').should("be.visible");
  });
});
