describe("DND Test Page", () => {
  before("Login", () => {
    cy.visit("/");
  });

  it("Check DND in 1 container", () => {
    cy.get('[data-test-id="1Container"]').should("exist");
  });

  it("Check DND in 2 container", () => {
    cy.get('[data-test-id="2Container"]').should("exist");
  });

  it("Check DND in 3 container", () => {
    cy.get('[data-test-id="3Container"]').should("exist");
  });
});
