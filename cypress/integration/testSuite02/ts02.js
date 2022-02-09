describe('Nav Menus', () => {

  
      it('displays mobile menu on click', () => {
        cy.get('nav .desktop-menu').should('not.be.visible')
        cy.get('nav .mobile-menu')
          .should('be.visible')
          .find('i.hamburger')
          .click()
  
        cy.get('ul.slideout-menu').should('be.visible')
      })
    })
