/// <reference types="Cypress"/>

describe('Blog - pesquisar', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('pesquisa com resultados encontrados', () => {
    cy.get('div[data-section=section-header-search]').should('be.visible').click()
    cy.get('input[type=search]').should('be.visible').type('Agibank{enter}')
    cy.get('.page-title').should('be.visible')
    cy.get('.page-title').children().should('have.text', 'Agibank')
  })

  it('pequisar sem resultados encontrados', () => {
    cy.get('div[data-section=section-header-search]').should('be.visible').click()
    cy.get('input[type=search]').should('be.visible').type('****{enter}')
    cy.get('.page-title').should('be.visible')
    cy.get('.page-title').children().should('have.text', '****')
    cy.get('.page-content').children('p').should('have.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  })

  it('SQL injection', () => {
    cy.get('div[data-section=section-header-search]').should('be.visible').click()
    cy.get('input[type=search]').should('be.visible').type(`' OR 1=1 --{enter}`)
    cy.get('.page-title').should('be.visible')
    cy.get('.page-title').children().should('have.text', `' OR 1=1 --`)
    cy.get('.page-content').children('p').should('have.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  })
})