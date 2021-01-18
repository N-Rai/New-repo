const { createYield } = require("typescript")
const baseUrl = Cypress.config().baseUrl
const randomInt = Math.floor(Math.random() * 101); 
const testFirstName = "cypressTestFirstName" + randomInt
const testSurname = "cypressTestSurname" + randomInt
const testEmail = "cypressTestEmail" + randomInt
const testPassword = "cypressTestPassword" + randomInt


describe('First step: Register a new user', ()=>{
    
    it("Find the Register button and clicks it",()=>{
        cy.visit(baseUrl);
        cy.contains("Register").click()
        cy.url().should('include', '/register')
    })

    it("Fill in the form", ()=>{
        
    })
})