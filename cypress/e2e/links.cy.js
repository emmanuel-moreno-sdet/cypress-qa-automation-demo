describe('Broken Link Checker', () => {
  let pages;

  before(() => {
    cy.fixture('pages').then((data) => {
      pages = data;
    });
  });

  it('validates all links on homepage', () => {
    cy.visit(pages.home);
    cy.checkLinks();
  });

  // it('validates all links on capabilities agentic AI page', () => {
  //   cy.visit(pages.agenticAi);
  //   cy.checkLinks();
  // });

  // it('validates all links on insights page', () => {
  //   cy.visit(pages.insights);
  //   cy.checkLinks();
  // });

  // it('validates all links on labs page', () => {
  //   cy.visit(pages.labs);
  //   cy.checkLinks();   
  // });

  // it('validates all links on about page', () => {
  //   cy.visit(pages.about);
  //   cy.checkLinks();
  // });
});