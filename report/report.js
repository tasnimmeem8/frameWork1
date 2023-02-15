$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/doc.feature");
formatter.feature({
  "name": "Test leaf test case",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": ": 001_login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "login URl",
  "keyword": "Given "
});
formatter.step({
  "name": "username as \u003cuname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "password as \u003cpword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click login",
  "keyword": "When "
});
formatter.step({
  "name": "click crmsfa",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uname",
        "pword"
      ]
    },
    {
      "cells": [
        "DemoCSR",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": ": 001_login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "login URl",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase.login_URl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "username as DemoCSR",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase.username_as_DemoCSR(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase.password_as_crmsfa(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click crmsfa",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase.click_crmsfa()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to send message to renderer\n  (failed to check if window was closed: disconnected: unable to connect to renderer)\n  (Session info: chrome\u003d108.0.5359.99)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MEEM\u0027, ip: \u0027192.168.1.159\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\tasni\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65249}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 73def69ad4ccdb2a7e1660d299d37908\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027label\u0027]/a}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat steps.TestCase.click_crmsfa(TestCase.java:41)\r\n\tat ✽.click crmsfa(file:src/test/java/features/doc.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "001_creat lead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click creat lead link button",
  "keyword": "Given "
});
formatter.match({
  "location": "TestCase.click_creat_lead_link_button()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.chrome.ChromeDriver.findElementByLinkText(String)\" because \"this.driver\" is null\r\n\tat steps.TestCase.click_creat_lead_link_button(TestCase.java:46)\r\n\tat ✽.click creat lead link button(file:src/test/java/features/doc.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "enter company name as ABC",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase.enter_company_name_as_ABC()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter first name as Hema",
  "keyword": "And "
});
formatter.match({
  "location": "TestCase.enter_first_name_as_Hema()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter last name as Mali",
  "keyword": "When "
});
formatter.match({
  "location": "TestCase.enter_last_name_as_Mali()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click creat lead button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCase.click_creat_lead_button()"
});
formatter.result({
  "status": "skipped"
});
});