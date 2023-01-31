Feature: Search motor ebay

  Scenario Outline: As a user i want search for Pilas

    Given I am on the login page
    When Search for pilas
    Then I should see a the total items result


