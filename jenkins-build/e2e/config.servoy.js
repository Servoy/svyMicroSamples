var startDate; 
var endDate; 
exports.config = { 
  // seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumAddress: 'selenium-hub:4444',

  
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

//  capabilities: {
//     'browserName': 'firefox'/*,
//     'chromeOptions': {
//       'args': ['--headless', '--disable-gpu'],
//       'mobileEmulation' : {
//         'deviceName': 'Apple iPhone 6 Plus'
//       }
//     }*/
//   },
  multiCapabilities: [{
    'browserName': 'chrome'
  }],

  // Spec patterns are relative to this directory.
  specs: [
    'features/sample_application/*.feature'
  ],

  cucumberOpts: {
    require: ['features/step_definitions/servoy_step_definitions.js',
              'env.js'],
    tags: false,
    format: 'pretty',
    profile: false,
    keepAlive: false,
    'no-source': true
  }, 

  beforeLaunch: () => {
    console.log('beforeLaunch');
    startDate = new Date();
  },

  onPrepare: () => {
      console.log('onPrepare');
      // browser.driver.manage().window().maximize();
      browser.driver.executeScript(function() {
        return {
          width: window.screen.availWidth,
          height: window.screen.availHeight
        };
      }).then(function(result) {
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
      endDate = new Date();      
      console.log('Test(s) ended after: ' + ((endDate - startDate) / 1000) + ' seconds.');
  }
};