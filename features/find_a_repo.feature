@github
Feature: A wait to find a repo
    In order to grab some code
    As a unauthenticated user
    I want to be able to search for a repo

Scenario: Get a repo
    Given I`m on GitHubs home page
    When I search for a repo name
    Then I should see it on a listing