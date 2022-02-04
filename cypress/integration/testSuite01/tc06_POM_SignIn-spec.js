import loginPage from "../pageObjects/loginPage"

describe('POM Sign In', function(){
    const signIn = new loginPage()

    it('test01: Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        signIn.email().type('manjunatha2207@gmail.com')
        signIn.password().type('Cypress@1234')
        signIn.signInButton().should('be.visible').click()
        cy.contains('manjunatha2207').should('be.visible')
        cy.contains('Your Feed').should('be.visible')
    })
})