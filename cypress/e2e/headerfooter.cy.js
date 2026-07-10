describe('Header and Footer Validation', () => {
  let pages;

  before(() => {
    cy.fixture('pages').then((data) => {
      pages = data;
    });
  });

  it('checks header and footer on homepage', () => {
    cy.visit(pages.home);

    // Header checks
    cy.get('header').should('be.visible');
    cy.get('header a.logo').should('exist');
    cy.get('header a.active').should('exist');

    // Footer checks
    cy.get('div[class=\'footer\']').should('be.visible');
    cy.contains('div[class=\'footer\'] button', 'Contact us').should('exist');
    cy.contains('div[class=\'footer\'] a', '(703) 951-3625').should('exist');
  });
});
