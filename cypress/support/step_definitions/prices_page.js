//This belongs in its own file but doing this quick. 
const prices_url = "https://companycam.com/pricing"

class PricesPage {
    static visitPricesPage() {
        cy.visit(prices_url)
    }

    static getProColumn() {
        cy.get('[class="pricing-table-plan-name"]').contains("Pro ")
    }

    static getProColumType(text) {
        cy.get('[class="tg-list-item"]').contains(text)
    }

    static getProColumnPrice(text) {
        cy.get('[class="pricing-table-plan-price pricing-table-plan-price--pro"]').contains(text)
    }

    static getProColumnPricePlanInfo(text) {
        cy.get('[class="pricing-table-plan-price-label"]').contains(text)
    }

    static getGetStartedButton() {
        cy.get('[class="btn btn--blue btn--small"]').contains("Get Started").click()
    }

    static getProColumnPlanDetails(text) {
        cy.get('[class="pricing-table-plan-features"]').contains(text)
    }

    static getProPriceSwitchButton() {
        cy.get('[class="tgl-btn"]').click()
    }

}

export default PricesPage