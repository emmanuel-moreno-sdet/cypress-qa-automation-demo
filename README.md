# Cypress QA Automation Demo

![Cypress Tests](https://github.com/emmanuel-moreno-sdet/test-suite/actions/workflows/cypress.yml/badge.svg)

A complete end-to-end Cypress test suite designed to validate navigation, content integrity, accessibility, and link reliability.

This project demonstrates modern QA automation practices using Cypress, custom commands, fixtures, and reusable test patterns.

## Features

- End-to-end UI navigation tests  
- Accessibility testing using cypress-axe  
- Broken link detection with custom commands  
- Clean project structure with fixtures and support files  
- Ready for CI/CD integration with GitHub Actions  

## Test Coverage Overview

### **Accessbility Test**
Uses `cypress-axe` to detect WCAG violations across key pages.

### **Contact Us Test**
Fills out and submits Contact Us form.

### **Header Footer Tests**
Checks for header and footer sections.

### **Links Tests**
Checks for broken links.

### **Navigation Tests**
Validates core site navigation including Homepage, Insights, Labs, Contact and About pages.

### **Workflow Tests**
Validates site workflow between various pages.

## Project Structure
```
cypress/
├── e2e/
│   ├── accessibility.cy.js
│   ├── contactus.cy.js
│   ├── headerfooter.cy.js
│   ├── links.cy.js
│   ├── navigation.cy.js
│   └── workflow.cy.js
├── fixtures/
│   ├── contactData.json
│   └── pages.json
├── support/
│   ├── commands.js
│   └── e2e.js
package.json
package-lock.json
README.md
```

## Running Tests

Install dependencies:
```
npm install
```
Run all tests:
```
npx cypress open
```
Or headless mode:
```
npx cypress run
```

## Dependencies

Core dependencies:
```
cypress
```
Install:
```
npm install cypress
```

## Author
Emmanuel Moreno  
Quality Assurance Professional | ISTQB Certified