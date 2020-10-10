// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display correctly when operators are used', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();

    cy.get('.display').should('contain', '3');
  });

  it('should allow for multiple operator chains', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();

    cy.get('.display').should('contain', '6');
  });

  it('should display whole numbers', () => {
    cy.get('#number2').click();

    cy.get('.display').should('contain', '2');
  });

  it('should display negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();

    cy.get('.display').should('contain', '-1');
  });

  it('should display decimal numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();

    cy.get('.display').should('contain', '0.6');
  });

  it('should display large numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();

    cy.get('.display').should('contain', '2000');
  });

  it('should display a message when dividing by zero', () => {
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();

    cy.get('.display').should('contain', 'Cannot divide by zero');
  });

})
