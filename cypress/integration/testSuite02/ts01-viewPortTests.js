/// <reference types="cypress" />
// --* reference *--//
// https://docs.cypress.io/api/commands/viewport


describe('view ports: Control the size & orientation of the APP screen', function() {
    before( () =>{
        console.log('running my tests')
    })

    beforeEach( ()=>{
        cy.visit('http://www.google.com')
    })

    it('test01: open tests in macbook-16', ()=> {
        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test02: open tests in ipad-2', ()=> {
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test03: open tests in iphone-xr', ()=> {
        cy.viewport('iphone-xr')
        cy.screenshot()
        cy.wait(2000)
    })

    it('test04: open tests in 1024px x 768px', ()=> {
        cy.viewport(1024,768)
        cy.screenshot()
        cy.wait(2000)
    })

    it('test04: open tests in samsung-note9', ()=> {
        cy.viewport('samsung-note9')
        cy.screenshot()
        cy.wait(2000)
    })


})