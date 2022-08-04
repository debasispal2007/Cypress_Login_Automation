/// <reference types="cypress" />

it('example to-do app', function() {
    
        cy.visit('https://wave-trial.getbynder.com/login/')
        cy.get('#inputEmail').type('debasis.pal@icscards.nl')
        cy.get('#inputPassword').type("Welcome-1#")
        cy.get('.login-btn').click()
        cy.get('.profile').click()
        cy.get('form > .action-btn').click()


    })