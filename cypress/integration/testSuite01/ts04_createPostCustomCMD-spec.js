/// <reference types="cypress" />
describe('Create Post and Mark/Unmark as Favorite', function () {

    Cypress.config('pageLoadTimeout', 100000)

    before(function () {                    //sign in test called from custom command, coming from commands.js
       cy.SignIn()
    })

    it('test01: Create Post', function () {
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        //cy.location('hash').should('include','#/editor')
        // cy.get('input[placeholder="Article Title"]').type('Cypress Automation')
        cy.get('input[placeholder="Article Title"]').type('Cypress Automation'+ Math.random()*6)
        cy.get('input[placeholder="What\'s this article about?"]').type('Cypress Test Automation')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Cypress Test Automation for Web')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('test02: Mark/Unmark as Favorite', function () {
        cy.get('ul.navbar-nav').children().contains('manjunatha2207').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.btn-primary').first().then(($fav) => {
            const favCount = $fav.text()
            expect(parseInt(favCount)).to.eq(1)
        }).click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
        //cy.go(-1)
        //cy.go('forward')
        //cy.go(1)
        // cy.get('.preview-link > span').click()
        // cy.get('.btn-outline-danger').click()
    })
})