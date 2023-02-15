package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/features",glue="steps",plugin= {("html:report")})
public class Runner extends AbstractTestNGCucumberTests{

}
