///Cypress tests using Tags implementation

describe('QA Challenge - Login Page', { tags: ['@login', '@smoke'] }, () => {

  before(() => {
    cy.visit(Cypress.env('baseUrl') + 'login')
  })

  beforeEach(() => {
    cy.viewport(1920, 1080);
  })

  it('Verify available login options', { tags: 'loginoption' }, () => {

    //Available login options
    cy.get('.btn-provider-github').should('contain', 'Log in with GitHub')
    cy.get('.btn-provider-google').should('contain', 'Log in with Google')
    cy.get('.btn-provider-sso').should('contain', 'Log in with SSO')
    cy.get('.btn-provider-email').should('contain', 'Log in with email')


  })

  it('Verify sign up link', { tags: 'signuplink' }, () => {

    cy.get('.sign-up-link').should('contain', "Don't have an account? Sign up")
    cy.contains("Sign up").should("have.attr", "href", "/signup");

  })

  // Login using Email - using social login plugin
  it('Login through GitHub', () => {

    cy.userLoginWithGitHub();

  })

})