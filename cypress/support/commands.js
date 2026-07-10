// Custom commands

Cypress.Commands.add('checkLinks', () => {
  cy.get('a').each(($el) => {
    const url = $el.prop('href');
    if (url && url.startsWith('http')) {
      cy.request({
        url,
        failOnStatusCode: false
      }).then((resp) => {
        expect(resp.status).to.be.lessThan(400);
      });
    }
  });
});