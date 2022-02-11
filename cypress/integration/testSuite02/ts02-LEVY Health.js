/// <reference types="cypress" />

describe('LEVY Health tests', function() {

    it.skip('test01: LEVY home page', ()=> {
        cy.visit('https://www.levy.health/en/',{failOnStatusCode: false})  //failOnStatusCode is to Handle Service Unavailable and Uncaught Exception in Cypress
        cy.url().should('include','levy.health/en')
        cy.title().should('contains','Levy Health')
        cy.get('#menu-item-wpml-ls-15-de > a > .wpml-ls-native').click()
        cy.url().should('include','levy.health')
    })

    it.skip('test02: our science', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-564 > a').click()
        cy.url().should('include','levy.health/en/our-science/')
        cy.contains('LEVY Fertility Code').should('be.visible')
        cy.contains('The algorithm creates your personal risk profile').should('be.visible')
        cy.contains('Individualized blood diagnostics').click()
        cy.contains('You receive your results and discuss them with our reproductive physicians').should('be.visible')
        cy.contains('We accompany you holistically').click()

    })

    it.skip('test03: team', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-563 > a').click()
        cy.url().should('include','levy.health/en/team/')
        cy.contains('THE FOUNDERS').should('be.visible')
        cy.contains('CAROLINE MITTERDORFER').should('be.visible')
        cy.contains('SILVIA HECHER').should('be.visible')
        cy.contains('THERESA VILSMAIER').should('be.visible')
        cy.contains('SCOTT ENGLAND')

    })

    it.skip('test04: blog', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-3391 > a').click()
        cy.url().should('include','levy.health/en/blog/')
        cy.contains('LEVY Blog').should('be.visible')
        // cy.contains('KNOWLEDGE').should('be.visible')
        // cy.contains('STORIES').should('be.visible')
        // cy.get('.blog-search-form > input').contains('search')
        
    })

    it('test05: contact', ()=> {
        cy.visit('https://www.levy.health/en/')
        cy.get('#menu-main-menu-en-1 > .menu-item-565 > a').click()
        cy.url().should('include','levy.health/en/contact/')
        cy.contains('Contact Us').should('be.visible')
        cy.contains('hello@levy.health').should('be.visible')
        // cy.contains('STORIES').should('be.visible')
        // cy.get('.blog-search-form > input').contains('search')
        
    })

})