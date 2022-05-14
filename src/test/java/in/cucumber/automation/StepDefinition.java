package in.cucumber.automation;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class StepDefinition {

	@Given("^sample feature file is ready$")
	public void givenStatment() {
		System.out.println("Given statement executed successfully");
	}

	@When("^I run the feature file$")
	public void whenStatement() {
		System.out.println("When statement execueted successfully");
	}

	@Then("^run should be successful$")
	public void thenStatment() {
		System.out.println("Then statement executed successfully");
	}

	WebDriver dr;

	@Given("^navigate to facebook login page$")
	public void navigate() {
		System.setProperty("webdriver.chrome.driver","/Users/haridhanakoti/Documents/github/automation/chromedriver_101");
		dr = new ChromeDriver();
		dr.get("http://www.facebook.com");
		
		//For Firefox Driver
		//System.setProperty("webdriver.gecko.driver","Mentionthepath\geckodr");
		//dr = new FirefoxDriver();	
	}
	
	@Given("^navigate to gmail login page$")
	public void navigateToGmail() {
		System.setProperty("webdriver.chrome.driver","/Users/haridhanakoti/Documents/github/automation/chromedriver_101");
		dr = new ChromeDriver();
		dr.get("http://www.gmail.com");
		
		//For Firefox Driver
		//System.setProperty("webdriver.gecko.driver","Mentionthepath\geckodr");
		//dr = new FirefoxDriver();	
	}

	@Then("^Check for username and password fields present$")
	public void checkForElements() {
		System.out.println("Checking for elements");
		dr.findElement(By.xpath("//*[@id='email']")).isDisplayed();//.sendKeys(username);
		dr.findElement(By.xpath("//*[@id='pass']")).isDisplayed();//.sendKeys(password);
		dr.findElement(By.xpath("//*[@name='login']")).isDisplayed();//

		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@When("^Clicking the login button")
	public void clickLoginButton() {
		System.out.println("Clicking the login button");
		dr.findElement(By.xpath("//*[@name='login']")).click();
		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@Then("^Verify the error messages")
	public void validateErrorMessage() {
		System.out.println("Validate error messages");
		String textRetrieved = dr.findElement(By.xpath("//*[@id='email_container']")).getText();
		Assert.assertEquals(textRetrieved, "The email address or mobile number you entered isn't connected to an account. Find your account and log in.");
		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@When("^user logged in using username as \"(.*)\" and password as \"(.*)\"$")
	public void login(String username, String password) {
		dr.findElement(By.xpath("//*[@id='Email']")).isDisplayed();//.sendKeys(username);
		dr.findElement(By.xpath("//*[@id='Passwd']")).isDisplayed();//.sendKeys(password);
		dr.findElement(By.xpath("//*[@id='signIn']")).isDisplayed();//
		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
}
