Cypress.Commands.add('getByCyId', (value) => {
  return cy.get(`[data-cy=${value}]`);
});
