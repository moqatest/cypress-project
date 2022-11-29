describe('QA Challenge - Signup Page', { tags: ['@signup', '@smoke'] }, () => {

  before(() => {
    cy.visit(Cypress.env('baseUrl') + 'signup')
  })

  beforeEach(() => {
    cy.viewport(1920, 1080);
  })

  it('Verify available signup options', { tags: 'signupoption' }, () => {

    //Available login options
    cy.get('.btn-provider-github').should('contain', 'Sign up with GitHub')
    cy.get('.btn-provider-google').should('contain', 'Sign up with Google')
    cy.get('.btn-provider-email').should('contain', 'Sign up with email')


  })

  it('Verify log in link', { tags: 'loginlink' }, () => {

    cy.get('.log-in-link').should('contain', "Already have an account?")
    cy.contains("Log in").should("have.attr", "href", "/login");

  })


})