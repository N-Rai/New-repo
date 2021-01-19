const { createYield } = require("typescript")
const baseUrl = Cypress.config().baseUrl
/* START Variable initialiazation */
const randomInt = Math.floor(Math.random() * 1001);
const randomInt2 = Math.floor(Math.random() * 1001);
const testFirstName = "cypressTestFirstName" + randomInt
const testSurname = "cypressTestSurname" + randomInt
const testEmail = "cypressTestEmail" + randomInt
const testPassword = "cypressTestPassword" + randomInt
const testUserData = [testFirstName, testSurname, testEmail, testPassword]

const testAdminData = ["admin", "admin"]

const firstAnnouncement = {
    "topic": "cypressTestTopic" + randomInt,
    "text": "cypressTestText" + randomInt
}
const secondAnnouncement = {
    "topic": "cypressTestTopic" + randomInt2,
    "text": "cypressTestText" + randomInt2
}
const announcemnts = [firstAnnouncement, secondAnnouncement]
const editedAnnouncement = {
    "topic": firstAnnouncement.topic,
    "text": "cypressTestEditedText"
}
/* End Varialbe Initialization */

describe('First step: Register a new user', () => {

    it("Click on Register button - Reroute to register", () => {
        cy.visit(baseUrl);
        cy.contains("Register").click()
        cy.url().should('include', '/register')
    })

    it("Fill in form, click on Register button, logout - reroute home", () => {
        /// Set up
        var inputsId = ['#inputName', '#inputSurname', '#inputEmail', '#inputPassword']
        /// Filling in Inputs
        for (var i = 0; i < 4; i++) {
            var inputId = inputsId[i]
            var value = testUserData[i]
            cy.get(inputId).type(value).should('have.value', value)
        }
        /// Find and click button
        cy.get('.btn-primary').contains("Register").click()
        cy.contains("Logout").click()
        cy.url().should('include', '/home')
    })
})

describe('Second step: Test Admin Functionality', () => {
    var inputsId = ['#inputTopic', '#inputMessage']

    it("Click on Log In Button - Reroute to login", () => {
        cy.visit(baseUrl);
        cy.contains("Login").click()
        cy.url().should('include', '/login')
    })

    it("Fill in form, click on Login button - reroute home, Post and Logout buttons visible", () => {
        /// Set up
        var inputsId = ['#inputEmail1', '#inputPassword1']
        /// Filling in Inputs
        for (var i = 0; i < 2; i++) {
            var inputId = inputsId[i]
            var value = testAdminData[i]
            cy.get(inputId).type(value).should('have.value', value)
        }
        /// Find and click button
        cy.get('.btn-primary').contains("Login").click()
        cy.contains("Logout").should('be.visible')
        cy.contains("Post").should('be.visible')
        cy.url().should('include', '/home')
    })

    it("Post Announcements - announcements visible in table", () => {

        cy.contains('Logout').should('be.visible')
        /// Post announcements
        for (var l = 0; l < 2; l++) {
            var announcement = announcemnts[l]
            var values = [announcement.topic, announcement.text]
            for (var i = 0; i < 2; i++) {
                var inputId = inputsId[i]
                var value = values[i]
                cy.get(inputId).type(value).should('have.value', value)
            }
            cy.contains("POST").click()
        }
        cy.get('.table').should('contain', firstAnnouncement.topic)
        cy.get('.table').should('contain', secondAnnouncement.topic)
    })

    it("Edit First Announcement - In the table announcement text changes", () => {
        var inputId = inputsId[1];
        var value = editedAnnouncement.text
        var topic = editedAnnouncement.topic

        cy.get('.table').contains(topic).parent().contains('Edit').click();
        cy.get(inputId).clear().type(value).should('have.value', value);
        cy.contains("UPDATE").click();

        cy.get('.table').should('contain', firstAnnouncement.topic)
        cy.get('.table').should('contain', editedAnnouncement.text)
    })

    it("Delete one Announcement - Table don't have that announcement", () => {
        cy.get('.table').contains(firstAnnouncement.topic).parent().contains('Delete').click();
        cy.get('.table').should('not.contain', firstAnnouncement.topic);
    })

    it("Logout", () => {
        cy.contains("Logout").click()
    })
})

describe("Third step - Login as user and see created announcement", () => {
    it("Login as previously created user - created announcement visible, POST button is not there", () => {
        cy.visit(baseUrl);
        cy.contains("Login").click()
        cy.url().should('include', '/login')
        /// Set up
        var inputsId = ['#inputEmail1', '#inputPassword1']
        /// Filling in Inputs
        for (var i = 0; i < 2; i++) {
            var inputId = inputsId[i]
            var value = testUserData[i+2]
            cy.get(inputId).type(value).should('have.value', value)
        }
        cy.get('.btn-primary').contains("Login").click()
        cy.url().should('include', '/home')
        cy.get('.table').should('contain', secondAnnouncement.topic)
        cy.should('not.contain', 'POST')
    })
})
