module.exports = {
  'Searching Google': function (browser) {
    browser
      .url('http://google.com')
      .assert.title('Google')
      .assert.visible('input[name="q"]')
      .end();
  },
  'Demo test Github': function (browser) {
    browser
      .url('http://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.container h1 strong a')
      .assert.containsText('.container h1 strong a', 'nightwatch', 'Checking project title is set to nightwatch')
      .end();
  }
};