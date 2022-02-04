/// <reference types="cypress" />

describe('Sign In', function() {
    it('test01: sign in', function() {
    cy.visit("https://react-redux.realworld.io/#/login")
    cy.get('input[type="email"]').type('manjunatha2207@gmail.com')
    cy.get('input[type="password"]').type('Cypress@1234')
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.contains('manjunatha2207').should('be.visible')
    cy.contains('Your Feed').should('be.visible')
    })

})