Feature: Login

  I want to sign in to Conduit
  
  @sanity
  Scenario: Conduit Login
    Given I open Conduit Sign In page
    When I type in
        |  username  | password  |
        |  manjunatha2207@gmail.com | Cypress@1234  |
    And I click on Sign In button
    Then "manjunatha2207" should be shown