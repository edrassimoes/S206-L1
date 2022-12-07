/// <reference types = "cypress" />

describe('Criando cenário de testes.', ()=>{

  it('Checando o que o hotel oferece.',()=>{
    
    cy.visit('https://automationintesting.online/')
    cy.get('.col-sm-10 > p').should('contain.text','provide breakfast')
    cy.get('.col-sm-7 > ul > :nth-child(1)').should('contain.text', 'TV')
    cy.get('.col-sm-7 > ul > :nth-child(2)').should('contain.text', 'WiFi')
    cy.get('.col-sm-7 > ul > :nth-child(3)').should('contain.text', 'Safe')

  })

  it('Reservando um quarto com erro - não foi selecionado uma data.',()=>{

    let info = criandoDados()

    cy.visit('https://automationintesting.online/')
    cy.get('.col-sm-7 > .btn').click({force:true})
    cy.get('.room-booking-form > .form-control').type(info[0])
    cy.get('.col-sm-4 > :nth-child(2) > .form-control').type(info[1])
    cy.get('.col-sm-4 > :nth-child(3) > .form-control').type(info[2])
    cy.get('.col-sm-4 > :nth-child(4) > .form-control').type(info[3])
    cy.get('.col-sm-4 > .btn-outline-primary').click({force:true})
    cy.get('.alert > :nth-child(1)').should("contain.text","não deve ser nulo")

  })

  it('Enviando uma mensagem e verificando se deu certo.',()=>{

    let info = criandoDados()
    let sub = "Duvida sobre o quarto."
    let msg = "Gostaria de saber se há ar condicionado no quarto?"

    cy.visit('https://automationintesting.online/')
    cy.get('.col-2 > .btn').click
    cy.get('[data-testid="ContactName"]').type(info[0])
    cy.get('[data-testid="ContactEmail"]').type(info[2])
    cy.get('[data-testid="ContactPhone"]').type(info[3])
    cy.get('[data-testid="ContactSubject"]').type(sub)
    cy.get('[data-testid="ContactDescription"]').type(msg)
    cy.get('#submitContact').click({force:true})
    cy.get(':nth-child(2) > div > h2').should("contain.text", "Thanks for getting in touch")

  })

})

function criandoDados(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()

  let name = horas + "nome"
  let lastName = minutos + "sobrenome"
  let email = horas + minutos + "@teste.com"
  let phone = horas + minutos + segundos + "000000"

  let userInfo = [name, lastName, email, phone]

  return userInfo

}