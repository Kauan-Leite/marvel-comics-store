/* eslint-disable no-undef */
describe('Products | Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Loading', () => {
    cy.get('.thumb-skeleton').should('have.length', 20)
  })

  it('Buttons', () => {
    cy.get('nav')
    cy.wait(1000)
    cy.get('.prev-page').should('be.disabled')
    cy.get('.next-page').should('be.enabled')
  })

  it('Change Page', () => {
    cy.wait(1000)
    cy.get('.next-page').click()
    cy.wait(1000)
    cy.get('.prev-page').should('be.enabled')
    cy.get('.prev-page').click('')
    cy.wait(1000)
    cy.get('.prev-page').should('be.disabled')
  })

  it('Cards', () => {
    cy.wait(1000)
    cy.get('.product-card').should('have.length', 20)
  })

  it('Go to the Details', () => {
    cy.wait(1000)
    cy.get('.title').contains('Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)').click()
    cy.wait(1000)
  })
})
