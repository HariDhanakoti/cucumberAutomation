$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('in/cucumber/automation/first.feature');
formatter.feature({
  "line": 2,
  "name": "I want to launch the website and check for elements",
  "description": "",
  "id": "i-want-to-launch-the-website-and-check-for-elements",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Test whether Facebook login page is loaded",
  "description": "",
  "id": "i-want-to-launch-the-website-and-check-for-elements;test-whether-facebook-login-page-is-loaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "navigate to facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Check for username and password fields present",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Clicking the login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.navigate()"
});
formatter.result({
  "duration": 10231203292,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.checkForElements()"
});
formatter.result({
  "duration": 358597167,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.clickLoginButton()"
});
formatter.result({
  "duration": 378574875,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.validateErrorMessage()"
});
formatter.result({
  "duration": 4336468333,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test whether gmail login page is loaded",
  "description": "",
  "id": "i-want-to-launch-the-website-and-check-for-elements;test-whether-gmail-login-page-is-loaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "navigate to gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Check for username and password fields present",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Clicking the login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify the error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.navigateToGmail()"
});
formatter.result({
  "duration": 9127279208,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.checkForElements()"
});
formatter.result({
  "duration": 557374458,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.64)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Haris-Air.local\u0027, ip: \u00272401:4900:1ce0:32ee:a8d5:5964:1416:1270%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.64, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: /var/folders/8y/k323z2j15r5...}, goog:chromeOptions: {debuggerAddress: localhost:64708}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ba794c943c6aeeae7851e71f80e1b88\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027email\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat in.cucumber.automation.StepDefinition.checkForElements(StepDefinition.java:58)\n\tat ✽.Then Check for username and password fields present(in/cucumber/automation/first.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.clickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.validateErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
});