/* eslint-disable no-undef */
describe('Products | Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/details/1308')
  })

  it('Correct Infos', () => {
    cy.get('.img-skeleton')
    cy.wait(1000)
    cy.get('.isbn').contains('0-7851-1451-3')
    cy.get('.num-pages').contains('96')
    cy.get('.author').should('have.length', 10)
    cy.get('.pcs-details').contains('5,99')
  })

  it('Add to Cart', () => {
    cy.wait(1000)
    cy.get('.add-cart-details').click()
    cy.wait(1000)
    cy.url().should('include', '/cart')
    cy.get('.cart-product')
  })
})
