# Cypress_Login_Automation

Note: the Automation file is in the below path.
Cypress\e2e\1-getting-started\todo.cy


Gherkin Test Cases:

Positive Scenario:
Test: Check login is successful with valid credentials

Feature: Test Login Functionality
Scenario: Wave-trial.getbynder.com login page
Given the user is in the "https://wave-trial.getbynder.com/login/" page
When user enters "debasis.pal@icscards.nl" in Email/Username field
And user enters in password field
And user clicks on login button
Then user is on the home page
When user clicks on Username
And user clicks on logout button
Then user is in the "https://wave-trial.getbynder.com/login/" page
And "You have successfully logged out." message is displayed


Negative Scenario:
Test: Check error message displayed on incorrect credentials

Feature: Test Login Functionality
Scenario: Wave-trial.getbynder.com login page
Given the user is in the "https://wave-trial.getbynder.com/login/" page
When user enters "cccccfddfsf" in Email/Username field
And user enters "gdffddfsh" in password field
And user clicks on login button
Then "You have entered an incorrect username or password" message is displayed
