Feature: Verify Pricing Page

    As a non logged in user
    I want to verify pricing is correct on the Price page.

    Scenario: Pro monthly pricing and content
        Given I open the pricing page
        When I view the Pro column
        Then I view the "Monthly" text
        Then I view the "Annual" text
        Then I view the "19" price text
        Then I view the "per user" monthly text
        Then I view the "per month" monthly text
        Then I view the "USD" monthly text
        Then I view the "250 (Billed Per User)" column text
        Then I view the "Unlimited Projects" column text
    
    Scenario: Pro annual pricing and content
        Given I open the pricing page
        When I view the Pro column
        Then I change Pro column to annual
        Then I view the "16" price text


    Scenario: Pro get started button
        Given I open the pricing page
        When I view the Pro column
        Then I click the Pro get started button
        Then I verify I am on the sign-up page