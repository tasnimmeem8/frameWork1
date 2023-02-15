Feature: Test leaf test case 

Scenario Outline:: 001_login 

Given login URl 
And username as <uname>
And password as <pword>
When click login
Then click crmsfa 


Examples: 
|uname|pword|
|DemoCSR|crmsfa|


Scenario: 001_creat lead 

Given click creat lead link button
And enter company name as ABC
And enter first name as Hema
When enter last name as Mali
Then click creat lead button

