@marvel
Feature: Validate story of Marvel Heroes
    In order to validate heroe`s stories
    As a user
    I want to be able to search and confirm a valid information

Scenario Outline: Validate Hero Story
    Given I`m on Marvel`s char database
    When I search for the "<hero_name>"
    Then I need to see the character item
    And in onscreen details
    And should confirm the "<hero_information>"
Examples:
    | hero_name      | hero_information        |
    | ironman        | alone on the planet     |
    | hulk           | Hulk Smash!             |
    | doctor strange | Vain, egotistic surgeon |