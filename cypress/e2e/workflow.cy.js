describe('Homepage → Insights → Case Studies Flow', () => {
  let pages;

  before(() => {
    cy.fixture('pages').then((data) => {
      pages = data;
    });
  });

  it('navigates from homepage -> insights -> case studies -> homepage', () => {
    // 1. Start on homepage
    cy.visit(pages.home);

    // 2. Click hero button on the homepage
    cy.contains('button', 'See our impact').click();

    // 3. Ensure we are on the insights page
    cy.url().should('include', pages.insights);
    cy.contains('h1', 'Unlocking Government Innovation').should('be.visible');

    // 4. Click a link on the insights page that leads to case studies
    cy.contains('li', 'AI-enabled PII Redaction').click();

    // 5. Ensure we are on the pii-redaction page
    cy.url().should('include', pages.piiRedaction);
    cy.contains('h1', 'AI-enabled PII Redaction').should('be.visible');

    // 6. Go back to home page
    cy.get('a.logo').click();
    cy.url().should('include', pages.home);
  });
});
