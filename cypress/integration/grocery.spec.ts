const getBottleButton = () => cy.get('.square:nth-child(1)');
const getCupButton = () => cy.get('.square:nth-child(2)');
const getTetraButton = () => cy.get('.square:nth-child(3)');

context('Groceries', () => {
  beforeEach(() => {
    cy.visit('/#/grocery');
  });

  it('should show all groceries', () => {
    cy.get('.groceries').children().should('have.length', 6);
  });

  it('should add up items properly', () => {
    // 2 bottles, 1 cup, and 2 tetras  (2*3g + 1*1g + 2*5g = 17g)
    getBottleButton().click();
    getBottleButton().click();
    getCupButton().click();
    getTetraButton().click();
    getTetraButton().click();

    cy.get('.info-bar').contains('17 g');
  });
});
