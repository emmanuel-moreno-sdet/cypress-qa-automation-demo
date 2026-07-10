describe("Accessibility", () => {
    let pages;

  before(() => {
    cy.fixture('pages').then((data) => {
      pages = data;
    });
    cy.injectAxe();
  });

  it("homepage has no critical accessibility violations", () => {
    cy.checkA11y(null, {
      includedImpacts: ["critical"]
    });
  });

  it("Insights page meets accessibility standards", () => {
    cy.visit(pages.insights);
    cy.injectAxe();
    cy.checkA11y();
  });
});