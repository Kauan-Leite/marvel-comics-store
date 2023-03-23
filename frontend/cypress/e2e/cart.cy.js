/* eslint-disable no-undef */
describe('Cart | Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/details/1308')
  })

  it('Verify Cart', () => {
    cy.wait(1000)
    cy.get('.add-cart-details').click()
    cy.wait(1000)
    cy.get('tr').should('have.length', 2)
  })

  it('Remove Item', () => {
    cy.wait(1000)
    cy.get('.add-cart-details').click()
    cy.wait(1000)
    cy.get('.rmv-btn').should('have.length', 1)
    cy.get('.rmv-btn').click()
    cy.get('.rmv-btn').should('have.length', 0)
  })
})
