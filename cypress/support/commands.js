
Cypress.Commands.add('pesquisar',(texto) =>{
    cy.get('div[data-section=section-header-search]').should('be.visible').click()
    cy.get('input[type=search]').should('be.visible').type(`${texto}{enter}`)
    cy.get('.page-title').should('be.visible')
})