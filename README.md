# Cypress-Project - QA challenge

The following cypress (v11.2.0) project has few external plugins incorporated to showcase skill set :-
- Cypress Grep
- Social Logins
- Cypress Mochawesome Reporter

# Purpose of Cypress Grep
This is to select specific type of tagged test to run e.g (smoke, regression) - To have the flexibility to run selected / specific tests when needed.

# Purpose of Cypress Social Login
This is to use the custom code to avoid writing duplicate login scripts when using 3rd party social logins. 

# How to run locally
Once the project is pulled to local machine -> navigate to root of the folder and install dependencies by using command
'npm install'

Once all the dependencies are installed, run any tagged tests. Currently the project has two spec files (login, signup) basic tests, the login spec has test logging in using GitHub Authentication. NOTE this only works on local not on CI this is due to limitation with the plugin / security

'npm run signup' - uses the tag to run any tests tagged 'signup'
'npm run login' - uses the tag to run any tests tagged 'login'
'npm run smoke' - uses the tag to run any tests tagged 'smoke'

# Report
Once the test is finished, a HTML report will be available inside the cypress/report folder

# How to run GitHub Action

A simple signup page verification test has been setup to run as GitHub Action.

- Naviagate to Actions
- Under workflow -> click on 'cypress tests - signup page' action to start test


