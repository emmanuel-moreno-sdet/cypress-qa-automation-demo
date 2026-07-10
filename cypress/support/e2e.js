// Load commands
import './commands';

// Load accessibility testing support
import 'cypress-axe';

// Prevent failures from site-side JS errors
Cypress.on('uncaught:exception', () => {
  return false;
});