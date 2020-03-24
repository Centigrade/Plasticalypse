context('Quiz', () => {
  beforeEach(() => {
    cy.visit('/#/quiz');
  });

  it('should show first question', () => {
    cy.contains('Wieviele Personen leben in deinem Haushalt?');
  });

  it('should change number of family members', () => {
    // 3 up 1 down should result in 3
    cy.getByCyId('inc-button').click();
    cy.getByCyId('inc-button').click();
    cy.getByCyId('inc-button').click();
    cy.getByCyId('dec-button').click();

    cy.getByCyId('family-member-count').contains(3);
  });

  it('should navigate to the second question', () => {
    cy.getByCyId('submit-button').click();
    cy.contains('Wie oft kaufst du beim Discounter?');
  });

  it('should not do anything if nothing is chosen', () => {
    // family count
    cy.getByCyId('submit-button').click();
    cy.contains('Wie oft kaufst du beim Discounter?');

    cy.get('.confirm').click();
    cy.contains('Wie oft kaufst du beim Discounter?');
  });

  it('should click through entire quiz', () => {
    // family count
    cy.getByCyId('submit-button').click();
    cy.contains('Wie oft kaufst du beim Discounter?');

    cy.contains('Manchmal').click();
    cy.get('.confirm button').click();
    cy.contains('Inhabergeführt');

    cy.contains('Nie').click();
    cy.get('.confirm').click();
    cy.contains('Einkaufsliste');

    cy.contains('Immer').click();
    cy.get('.confirm').click();
    cy.contains('Bio');

    cy.contains('Unbedingt').click();
    cy.get('.confirm').click();
    cy.contains('Plastik sparen');

    cy.contains('Super aktiv').click();
    cy.get('.confirm').click();

    // done
    cy.contains('loslegen!');
  });
});
