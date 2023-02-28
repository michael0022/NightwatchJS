const webdriver = require('selenium-webdriver');

const capabilities = {
  'browserName': 'Chrome',
  'browser_version': 'latest',
  'os': 'Windows',
  'os_version': '10',
  'browserstack.user': 'mahbubansari_3NscUT',
  'browserstack.key': 's3qP1K2582DdFQwxuBba',
  // Set chrome options
  'goog:chromeOptions': {
    prefs: {
      // 0 - Default, 1 - Allow, 2 - Block
      'profile.managed_default_content_settings.notifications': 1
    }
  }
  // // Set edgeOptions for Edge browser
  // 'ms:edgeOptions': {
  //   prefs: {
  //     // 0 - Default, 1 - Allow, 2 - Block
  //     'profile.managed_default_content_settings.notifications' : 1
  //   }
  // }
  // // Set firefoxOptions for Firefox browser
  // 'moz:firefoxOptions': {
  //   prefs: {
  //     'dom.disable_beforeunload': true,
  //     'dom.webnotifications.enabled': false,
  //     // 0 - Default, 1 - Allow, 2 - Block
  //     'permissions.default.desktop-notification': 1,
  //   }
  // }
}

/*const driver = new webdriver.Builder()
  .usingServer('http://hub-usw.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

driver.get('https://web-push-book.gauntface.com/demos/notification-examples/')
  .then(function() {
    driver.findElement(webdriver.By.xpath("//body/main[1]/p[3]/input[1]")).click()
      .then(function() {
        driver.quit();
      });
  }); */
