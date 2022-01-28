import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SignupPage from './signup_page'

Then('I verify I am on the sign-up page', () => {
    SignupPage.getSignUpPageTitle()
})