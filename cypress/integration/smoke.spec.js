const { cyan } = require("color-name")

beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
})
describe('Smoke test', () => {
    it('Check frontpage', () => {
        cy.contains('discogs')
    })
})
