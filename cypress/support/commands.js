import 'cypress-file-upload';

Cypress.Commands.add("SignIn", function() {
    cy.visit('/#/login')
    cy.title().should('eq', 'Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('form').within(($form) => {
        // cy.get() will only search for elements within form, not within the entire document
        cy.get('input[type = "email"]').type('manjunatha2207@gmail.com')
        cy.get('input[type = "password"]').type('Cypress@1234')
        cy.root().submit()   // submits the form yielded from 'within'
    })
    cy.contains('Your Feed', { timeout: 10000 }).should('be.visible')
})