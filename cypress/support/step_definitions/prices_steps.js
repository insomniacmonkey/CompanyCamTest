import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import PricesPage from './prices_page'

Given('I open the pricing page', () => {
    PricesPage.visitPricesPage()
})

When('I view the Pro column', () => {
    PricesPage.getProColumn()
})

Then('I view the {string} text', text => {
    PricesPage.getProColumType(text)
})

Then('I view the {string} price text', text => {
    PricesPage.getProColumnPrice(text)
})

Then('I view the {string} monthly text', text => {
    PricesPage.getProColumnPricePlanInfo(text)
})

Then('I view the {string} column text', text => {
    PricesPage.getProColumnPlanDetails(text)
})

Then('I change Pro column to annual', () => {
    PricesPage.getProPriceSwitchButton()
})

Then('I click the Pro get started button', () => {
    PricesPage.getGetStartedButton()
})