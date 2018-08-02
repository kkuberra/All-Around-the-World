describe("E2E Test V2", () => {
  it("Make sure the page shows up", () => {
    cy.visit("http://localhost:3000/");
  });
  it("Makes sure Header Appears", () => {
    cy.get("h1").should("have.text", "Around the World!");
  });
});
