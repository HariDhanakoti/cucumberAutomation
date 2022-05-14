@smokeTest
Feature: I want to launch the website and check for elements

Scenario: Test whether Facebook login page is loaded
	Given navigate to facebook login page
	Then Check for username and password fields present
	When Clicking the login button
	Then Verify the error messages
	
Scenario: Test whether gmail login page is loaded
	Given navigate to gmail login page
	Then Check for username and password fields present
	When Clicking the login button
	Then Verify the error messages