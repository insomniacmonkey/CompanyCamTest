/// <reference types="cypress" />

describe('Pro Pricing and Content', () => {
    it('Check that the monthly pricing and data is valid.', () => {
        cy.visit('https://companycam.com/pricing')
        cy.get('[class="pricing-table-plan-name"]').contains("Pro ")
        cy.get('[class="tg-list-item"]').contains("Monthly")
        cy.get('[class="tg-list-item"]').contains("Annual")
        cy.get('[class="pricing-table-plan-price pricing-table-plan-price--pro"]').contains("19")
        cy.get('[class="pricing-table-plan-price-label"]').contains("per user")
        cy.get('[class="pricing-table-plan-price-label"]').contains("per month")
        cy.get('[class="pricing-table-plan-price-label"]').contains("USD")
        cy.get('[class="btn btn--blue btn--small"]').contains("Get Started")
        cy.get('[class="pricing-table-plan-features"]').contains("250 (Billed Per User)")
        cy.get('[class="pricing-table-plan-features"]').contains("Unlimited Projects")
        //I am sure there is an array or another approach we could do for the whole list of features. 

    })

    it('Check that "Get Started" button redirects user to /signup.', () => {
        cy.get('[class="btn btn--blue btn--small"]').contains("Get Started").click()
        //This is not a great approach. We would want to add a custom QA id for the app.companycam.com/signup page
        cy.contains("Create a new company.")

    })

    it('Check Annual Pricing', () => {
        cy.visit('https://companycam.com/pricing')
        cy.get('[class="tgl-btn"]').click()
        cy.get('[class="pricing-table-plan-price pricing-table-plan-price--pro"]').contains("16")
        
    })

})

describe('FAQ', () => {
    it('Check FAQ Content.', () => {
        cy.visit('https://companycam.com/pricing')
        cy.get('[id="faq"]').contains("Frequently Asked Questions")
        //The rest of the FAQ
    })

})