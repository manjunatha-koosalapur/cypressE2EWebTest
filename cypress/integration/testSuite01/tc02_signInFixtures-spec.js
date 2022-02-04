/// <reference types="cypress" />

describe('Sign In by accessing test data from Fixture files', function() {
    it('test01: sign in', function() {
        cy.visit("https://react-redux.realworld.io/#/login")
        cy.fixture('loginDetails').then( (user) =>{         //access data from Fixture file > loginDetails.json
        cy.get('input[type="email"]').type(user.email)
        cy.get('input[type="password"]').type(user.password)
        })
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('manjunatha2207').should('be.visible')
        cy.contains('Your Feed').should('be.visible')
    })

})


describe('Sign In by accessing test data from Fixture files using beforeEachHook', function() {
    beforeEach(function () {                    //beforeEach Hook
        cy.fixture('loginDetails').as('user')   //access data from Fixture file > loginDetails.json
        })
    it('test02: Sign in', function () {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type(this.user.email)
        cy.get('input[type="password"]').type(this.user.password)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})