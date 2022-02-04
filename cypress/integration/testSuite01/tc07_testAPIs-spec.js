/// <reference types="cypress" />

describe('Test APIs', function() {
    
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')  //to override the baseurl of cypress.json
    
    it('test01: GET METHOD to read record', () => {
        cy.request('/employees').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            // expect(response.body.data).to.have.length(24)
        })
    })

    it('test02: POST METHOD to create record', () => {
        const item = {"name":"Manjunatha","salary":"68","age":"68"}
        cy.request('POST', '/create', item)
        .its('body')
        .its('data')
       // .should('deep.eq', item)
       .should('include', {name:'test'})
    })

    it('test01: PUT METHOD to update record', () => {
        const item = {"name":"test1"}
        cy.request({method:'PUT', url:'/update/1', body:item, failOnStatusCode: false}).its('status').should('eq', 401)


    })

})