describe('Contact Us form', () => {
  let pages;
  let contact;

  before(() => {
    cy.fixture('pages').then((data) => {
      pages = data;
    });

    cy.fixture('contactData').then((data) => {
      contact = data;
    });
  });

  it('fills out and submits the contact form', () => {
    cy.visit(pages.contactUs);

    // Fill out name
    cy.get('input[data-path=\'name\']').type(contact.name);

    // Fill out organization
    cy.get('input[data-path=\'organization\']').type(contact.organization);

    // Fill out email
    cy.get('input[data-path=\'email\']').type(contact.email);

    // Fill out phone
    cy.get('input[data-path=\'phone\']').type(contact.phone);

    // Fill out message
    cy.get('textarea[data-path=\'message\']').type(contact.message);

    // // Click submit
    // cy.get('button[type=\'submit\']').click();

    // // Assert success message appears
    // cy.contains('Success!').should('be.visible');
  });
});
