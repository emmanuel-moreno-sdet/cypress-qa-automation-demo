describe('Navigation', () => {
  let pages;

  before(() => {
    cy.fixture('pages').then((data) => {
      pages = data;
    });
  });

  it('loads homepage', () => {
    cy.visit(pages.home);
    cy.contains('See our impact').should('be.visible');
  });

  it('opens capabilities page', () => {
    cy.visit(pages.agenticAi);
    cy.url().should('include', pages.agenticAi);
    cy.contains('h1', 'Agentic AI').should('be.visible');
  });

  it('opens insights page', () => {
    cy.visit(pages.insights);
    cy.url().should('include', pages.insights);
    cy.contains('h1', 'Unlocking Government Innovation').should('be.visible');
  });

  it('opens labs page', () => {
    cy.visit(pages.labs);
    cy.url().should('include', pages.labs);
    cy.contains('h1', 'Engineering Excellence').should('be.visible');
  });

  it('opens about page', () => {
    cy.visit(pages.about);
    cy.url().should('include', pages.about);
    cy.contains('h1', 'About Us').should('be.visible');
  });
});