describe('cypress-file-upload plugin', function(){
    it('test01: File upload', function(){
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        
        const fileName = 'MochawesomeReport.pdf'; // file path - cypress\fixtures\testFile.pdf

        cy.get('[type="file"]').attachFile(fileName); // upload file
        cy.get('[type="submit"]').click()
        cy.contains("You've uploaded a file. Your notes on the file were:").should('be.visible')
        cy.contains("The file's contents are: //Mocha for reports").should('be.visible')
    })
})