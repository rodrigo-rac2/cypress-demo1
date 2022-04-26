/// <reference types="cypress" />

context('Automation practice login', () => {
// prep
    beforeEach(() => {
      cy.visit('http://automationpractice.com/')
    })
  
    it('check main page is visible', () => {
//check
      cy.get('#search_query_top').should('be.visible')
      cy.get('button[name="submit_search"]').should('be.enabled')
    })
    
    it('search for "hugo boss"', () => {
//steps
      cy.get('#search_query_top').type('hugo boss')
      cy.get('button[name="submit_search"]').click({force:true})

//check
      cy.contains('No results were found for your search')
    })
})