const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function loginTest() {
  // Build the WebDriver instance
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the login page
    await driver.get('https://software-tester-exam-mwo7646q6a-an.a.run.app/senior/login/'); // Replace with your actual login URL

    // Locate the username and password fields and the login button
    let usernameField = await driver.findElement(By.name('username')); // Adjust if necessary
    let passwordField = await driver.findElement(By.name('password')); // Adjust if necessary
    let loginButton = await driver.findElement(By.css('button[type="submit"]')); // Adjust if necessary

    // Input the credentials
    await usernameField.sendKeys('your-username'); // Replace with actual username
    await passwordField.sendKeys('your-password'); // Replace with actual password
    //let loginButton = await driver.findElement(By.xpath('//*[@id="app"]/div/main/div/div/div/div/div[2]/div/div[4]/button')); // Adjust if necessary

    // Click the login button
    await loginButton.click();

    // Wait until the page loads and the element indicating a successful login is present
    await driver.wait(until.elementLocated(By.id('welcome-message')), 10000); // Adjust if necessary

    // Verify successful login
    let welcomeMessage = await driver.findElement(By.id('welcome-message')).getText(); // Adjust if necessary
    if (welcomeMessage.includes('Welcome')) {
      console.log('Login test passed!');
    } else {
      console.log('Login test failed!');
    }
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
}

// Run the login test
loginTest();
