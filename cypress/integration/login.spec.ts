context('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show registration text', () => {
    cy.contains(`I don't have an account. Register`);
  });

  it('should login (real server, stubbed)', () => {
    const sampleMail = 'david.wuerfel@centigrade.de';
    const samplePassword = '12345';

    cy.server(); // Enable stubbing
    cy.route(
      'POST', // HTTP Method
      'http://192.168.188.165:8000/user/login', // Url
      { content: 'loggedIn' }, // Response
    ).as('loginRequest'); // Assign an alias

    cy.getByCyId('email').clear(); // Clear input
    cy.getByCyId('email').type(sampleMail); // Type text into input
    cy.getByCyId('password').clear();
    cy.getByCyId('password').type(samplePassword);

    cy.getByCyId('login-button').click();

    cy.wait('@loginRequest') // Ensure the request is finished
      // @ts-ignore
      .its('request.body.email') // Access request properties
      .should('eq', sampleMail); // Assert

    cy.get('@loginRequest')
      // @ts-ignore
      .its('request.body.password')
      .should('eq', samplePassword);

    cy.get('@loginRequest')
      // @ts-ignore
      .its('status')
      .should('eq', 200);
  });
});
