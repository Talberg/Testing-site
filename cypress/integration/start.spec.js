// start.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-tes
describe('/login', ()=> {
    
        beforeEach(() => {
            cy.visit('https://app.alchemer.com/login/v1')
        })

        it("welcome text",()=>{
            cy.contains('h3','Welcome Back!')
        })
        it('links to sign up page',()=>{
            cy
            .get('a')
            .contains('Need an account?')
            .should('have.attr','href','https://www.alchemer.com/plans-pricing/small-teams/')
        })
        it('changes to forgot password',()=>{
            cy
            .get('a')
            .contains('Forgot your password?')
            
            +

        
        })

        // cy.get('input[name="USERNAME"]').type('alex.talberg@alchemer.com')

        // cy.get('button[type="submit"]').click()
        // cy.contains('Log In').click()

        // expect(true).to.equal(true)
    

})