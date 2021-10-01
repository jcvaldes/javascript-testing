describe('bmi calculator', () => {
  it('calculate thinness result', () => {
    cy.visit('http://localhost:3000');
    cy.get('#weight').type('50');
    cy.get('#height').type('1.7');
    cy.get('button').click()

    // Mejoremos esto en el proximo branch porque pierdo visibilidad
    cy.get('.App > :nth-child(2)').should('have.text', 'BMI: 17.30')
    cy.get('.App > :nth-child(3)').should('contain', 'Thinness')
  })
})
