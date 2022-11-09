/// <reference types = "cypress" />

describe('Criando cenário de teste para o site PlayStation Store', ()=>{

  it('Caso de teste: Checando se há God of War: Ragnarok',()=>{
    cy.visit('https://store.playstation.com/pt-br/pages/latest')
    cy.get('.shared-nav-search-container > .shared-nav-icon').click()
    cy.get('.search-text-box__input').type('God of War Ragnarök')
    cy.get('.jetstream-search__search-button').click()
    cy.get('[data-qa-index="0"] > .psw-link > .psw-product-tile > .psw-product-tile__details > .psw-t-body').should('contain.text', 'God of War Ragnarök') 
  })

  it('Caso de teste: Verificando se God of War Ragnarök está disponível para PS4',()=>{
    cy.visit('https://store.playstation.com/pt-br/pages/latest')
    cy.get('.shared-nav-search-container > .shared-nav-icon').click()
    cy.get('.search-text-box__input').type('God of War Ragnarök')
    cy.get('.jetstream-search__search-button').click()
    cy.get('[data-qa-index="1"] > .psw-link > .psw-product-tile > .psw-ally-indicator > .psw-game-art__container > .psw-media-frame > .psw-fade-in').click()
    cy.get('[data-qa="gameInfo#releaseInformation#platform-value"]').should('contain.text', 'PS4')
  })

  it('Caso de teste: Checando o preço de God of War Ragnarök',()=>{
    cy.visit('https://store.playstation.com/pt-br/pages/latest')
    cy.get('.shared-nav-search-container > .shared-nav-icon').click()
    cy.get('.search-text-box__input').type('God of War Ragnarök')
    cy.get('.jetstream-search__search-button').click()
    cy.get('[data-qa-index="1"] > .psw-link > .psw-product-tile > .psw-ally-indicator > .psw-game-art__container > .psw-media-frame > .psw-fade-in').click()
    cy.get('.psw-root > .psw-c-bg-0.psw-l-stack-left > .psw-fade-in > .psw-label > .psw-l-anchor > .psw-fill-x > .psw-l-line-left > .psw-t-title-m').should('contain.text', 'R$349,90')
  })

  it('Caso de teste: Checando se Hogwarts Legacy está em pré-venda',()=>{
    cy.visit('https://store.playstation.com/pt-br/pages/latest')
    cy.get('.shared-nav-search-container > .shared-nav-icon').click()
    cy.get('.search-text-box__input').type('Hogwarts Legacy')
    cy.get('.jetstream-search__search-button').click()
    cy.get('[data-qa-index="0"] > .psw-link > .psw-product-tile > .psw-ally-indicator > .psw-game-art__container > .psw-media-frame > .psw-fade-in').click()
    cy.get('.psw-c-t-2').should('contain.text', 'pré-venda')
  })

  it('Caso de teste: Checando a data de lançamento de Hogwarts Legacy',()=>{
    cy.visit('https://store.playstation.com/pt-br/pages/latest')
    cy.get('.shared-nav-search-container > .shared-nav-icon').click()
    cy.get('.search-text-box__input').type('Hogwarts Legacy')
    cy.get('.jetstream-search__search-button').click()
    cy.get('[data-qa-index="0"] > .psw-link > .psw-product-tile > .psw-ally-indicator > .psw-game-art__container > .psw-media-frame > .psw-fade-in').click()
    cy.get('[data-qa="gameInfo#releaseInformation#releaseDate-value"]').should('contain.text', '10/2/2023')
  })

  it('Caso de teste: Falhando em buscar um jogo',()=>{
    cy.visit('https://store.playstation.com/pt-br/pages/latest')
    cy.get('.shared-nav-search-container > .shared-nav-icon').click()
    cy.get('.search-text-box__input').type('Pokémon')
    cy.get('.jetstream-search__search-button').click()
    cy.get('.psw-t-title-s').should('contain.text', 'Não foram encontrados resultados')
  })

})