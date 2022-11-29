// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('userLoginWithGitHub', () => {
    const socialLoginOptions = {
        username: 'moqatest1987+git@gmail.com',
        password: 'safepassword!123',
        loginUrl: 'https://cloud.cypress.io/login',
        headless: true,
        logs: true,
        loginSelector: '.btn-provider-github',
        postLoginSelector: '.welcome-page-inner',
        popupDelay: 3000,
        cookieDelay: 2000,
        //args: [' — disable-web-security', ' — user-data-dir', ' — allow-running-insecure-content'],
        isPopup: true,
        getAllBrowserCookies: true
    }
    cy.task('GitHubSocialLogin', socialLoginOptions).then(({ username, password, cookies, lsd, ssd }) => {
        cookies.map((cookie) => {
            cy.setCookie(cookie.name, cookie.value, {
                domain: cookie.domain,
                expiry: cookie.expires,
                httpOnly: cookie.httpOnly,
                path: cookie.path,
                secure: cookie.secure
            })
            Cypress.Cookies.defaults({
                preserve: cookie.name
            })
        })
        cy.window().then(window => {
            Object.keys(ssd).forEach(key => window.sessionStorage.setItem(key, ssd[key]))
            Object.keys(lsd).forEach(key => window.localStorage.setItem(key, lsd[key]))
        })
        cy.log('login successful.')
        cy.visit('https://cloud.cypress.io/welcome');
    })
})