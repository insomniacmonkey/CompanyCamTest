class SignupPage {
    static getSignUpPageTitle() {
        //This is not a great approach. We would want to add a custom QA id for the app.companycam.com/signup page
        cy.contains("Create a new company.")
    }
}

export default SignupPage