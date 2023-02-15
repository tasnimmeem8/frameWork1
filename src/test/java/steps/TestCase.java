package steps;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestCase {
public ChromeDriver driver;

	@Given("login URl")
	public void login_URl() {
	    WebDriverManager.chromedriver().setup();
	    driver= new ChromeDriver();
	    driver.get("http://leaftaps.com/opentaps/control/main");
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("username as (.*)")
	public void username_as_DemoCSR(String uname) {
	    driver.findElementById("username").sendKeys(uname);
	}

	@Given("password as crmsfa(.*)")
	public void password_as_crmsfa(String pword) {
	    driver.findElementById("password").sendKeys(pword);
	}

	@When("click login")
	public void click_login() {
	    driver.findElementByClassName("decorativeSubmit").click();
	}

	@Then("click crmsfa")
	public void click_crmsfa() {
	    driver.findElementByXPath("//div[@id='label']/a").click();
	}

	@Given("click creat lead link button")
	public void click_creat_lead_link_button() {
	    driver.findElementByLinkText("Create Lead").click();
	}

	@Given("enter company name as ABC")
	public void enter_company_name_as_ABC() {
	    driver.findElementById("createLeadForm_companyName").sendKeys("ABC");
	}

	@Given("enter first name as Hema")
	public void enter_first_name_as_Hema() {
	    driver.findElementById("createLeadForm_firstName").sendKeys("Hema");
	}

	@When("enter last name as Mali")
	public void enter_last_name_as_Mali() {
	    driver.findElementById("createLeadForm_lastName").sendKeys("Mali");
	}

	@Then("click creat lead button")
	public void click_creat_lead_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

}
