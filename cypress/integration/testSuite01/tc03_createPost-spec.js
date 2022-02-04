/// <reference types="cypress" />

describe('Create Post and Mark/Unmark as Favorite', function(){
    it('test01: Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('manjunatha2207@gmail.com')
        cy.get('input[type="password"]').type('Cypress@1234')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('test02: Create Post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        //cy.location('hash').should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Cypress Automation')
        // cy.get('input[placeholder="Article Title"]').type('Cypress Automation'+ Math.random()*6)
        cy.get('input[placeholder="What\'s this article about?"]').type('Cypress Test Automation')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Cypress Test Automation for Web')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('test03: Mark/Unmark as Favorite', function(){
        cy.get('.nav-link').contains('manjunatha2207').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
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