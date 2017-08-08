var startDate;
var find = require('find');
var fs = require('fs-extra');
var jsonDir = 'reports/cucumber_reports/';
var screenshotDir = 'screenshots/';
exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  framework: 'custom',
  params: {
    testDomainURL: 'http://localhost:8080/solutions/sampleGallery/index.html?f=galleryMain'
  },

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  multiCapabilities: [{
    'browserName': 'chrome'
  }],

  // resultJsonOutputFile: 'reports//cucumber_reports//report.json',

  // Spec patterns are relative to this directory.
  specs: [
    'features/sample_application/*.feature'
  ],

  cucumberOpts: {
    require: ['features/step_definitions/servoy_step_definitions.js',
      'env.js',
      'features/step_definitions/hooks.js'],
    tags: false,
    // format: 'pretty',
    format: ['json:reports/cucumber_reports/report.json', 'pretty'],
    profile: false,
    keepAlive: false,
    'no-source': true
  },

  beforeLaunch: () => {
    console.log('beforeLaunch');    
    removeJsonReports(); //removes reports from previous tests
    removeScreenshots(); //remove screenshots from previous tests
    startDate = new Date();
  },

  onPrepare: () => {
    console.log('onPrepare');
    browser.driver.executeScript(function () {
      return {
        width: window.screen.availWidth,
        height: window.screen.availHeight
      };
    }).then(function (result) {
      browser.driver.manage().window().setSize(result.width, result.height);
    });
  },

  onComplete: () => {
    console.log('onComplete');
  },

  onCleanUp: () => {
    console.log('onCleanUp');
  },

  afterLaunch: () => {
    console.log('afterLaunch');
  }
};

function removeJsonReports() {
  var files = find.fileSync(/\.json/, jsonDir);
  files.map(function (file) {
    fs.unlinkSync(file);
  });
}

function removeScreenshots() {
  var files = find.fileSync(/\.png/, jsonDir);
  files.map(function (file) {
    fs.unlinkSync(file);
  });
}