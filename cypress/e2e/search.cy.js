/// <reference types="Cypress"/>

describe('Blog - pesquisar', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('pesquisa com resultados encontrados', () => {
    cy.pesquisar('Agibank')
    cy.get('.page-title').children().should('have.text', 'Agibank')
  })

  it('pequisar sem resultados encontrados', () => {
    cy.pesquisar('****')
    cy.get('.page-title').children().should('have.text', '****')
    cy.get('.page-content').children('p').should('have.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  })

  it('SQL injection', () => {
    cy.pesquisar(`' OR 1=1 --`)
    cy.get('.page-title').children().should('have.text', `' OR 1=1 --`)
    cy.get('.page-content').children('p').should('have.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
  })
})