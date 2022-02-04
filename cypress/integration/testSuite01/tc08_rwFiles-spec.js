/// <reference types="cypress" />

describe('Read &Write files', function(){
	
    it('test01: Write to a text file', function(){
        cy.writeFile('rwFile.txt', 'Im Manjunatha - ')   // writeFile to write, have to specify file extension
        cy.writeFile('rwFile.txt', 'Test automation by Cypress\n', {flag: 'a+'}) // flag to append content to the file
        cy.writeFile('rwFile.txt', '\n Cypress Project Setup', {flag: 'a+'})
        cy.writeFile('rwFile.txt', ':\n', {flag: 'a+'})
        cy.writeFile('rwFile.txt', '\n 1.Install Nodejs\n 2.Install IDE - Visual Studio Code\n 3.Open the project folder in VS Code\n 4.Setup npm package(npm init -y)\n 5.Install Cypress(npm install Cypress)\n 6.Open Cypress(npx Cypress open)\n', {flag: 'a+'})
    })

    it('test02: Read from a text file', function(){            
       cy.readFile('rwFile.txt').should('contains','Manjunatha')   //readFile to read file,  have to specify file extension
    })

    it('test03: Write to a pdf file', function(){
        cy.writeFile('rwFile.pdf', 'Im Manjunatha - ')    
        cy.writeFile('rwFile.pdf', 'Test automation by Cypress\n', {flag: 'a+'})
        cy.writeFile('rwFile.pdf', '\n Cypress Project Setup', {flag: 'a+'})
        cy.writeFile('rwFile.pdf', ':\n', {flag: 'a+'})
        cy.writeFile('rwFile.pdf', '\n 1.Install Nodejs\n 2.Install IDE - Visual Studio Code\n 3.Open the project folder in VS Code\n 4.Setup npm package(npm init -y)\n 5.Install Cypress(npm install Cypress)\n 6.Open Cypress(npx Cypress open)\n', {flag: 'a+'})
    })

    it('test04: Write to a word doc file', function(){
        cy.writeFile('rwFile.docx', 'Im Manjunatha - ')    
        cy.writeFile('rwFile.docx', 'Test automation by Cypress\n', {flag: 'a+'})
        cy.writeFile('rwFile.docx', '\n Cypress Project Setup', {flag: 'a+'})
        cy.writeFile('rwFile.docx', ':\n', {flag: 'a+'})
        cy.writeFile('rwFile.docx', '\n 1.Install Nodejs\n 2.Install IDE - Visual Studio Code\n 3.Open the project folder in VS Code\n 4.Setup npm package(npm init -y)\n 5.Install Cypress(npm install Cypress)\n 6.Open Cypress(npx Cypress open)\n', {flag: 'a+'})
    })


})

