var startDate; 
exports.config = { 
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  // seleniumAddress: 'selenium-hub:4444',

  
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
    'features/sample_application/foundset.feature'
  ],

  resultJsonOutputFile: 'reports/cucumber_reports/report.json',

  cucumberOpts: {
    require: ['features/step_definitions/servoy_step_definitions.js',
              'env.js'/*,
              'features/step_definitions/hooks.js'*/],
    tags: false,
    // format: ['json:reports/cucumber_reports/report.json', 'pretty'],
    format:'pretty',
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
    var proc = require('process');
    var fs = require('fs');
    var json = fs.readFileSync(proc.cwd() + '/reports/cucumber_reports/report.json');
    var a = JSON.parse(json);
    var scenarioSucceeded = a.length;    
    for(var x in a){
      var duration = 0;
      var failed = 0;
      var succeeded = 0;
      var skipped = 0;
      var scenarioFailed = 0;

      console.log("Scenarion: " + a[x].description);
      for(var y in a[x].events){
        console.log("\tSuccess/Fail: \t\t\t\t" + a[x].events[y].emitterEvent);
        //bug in protractor, if it's skipped, the step still counts as passed
        if(a[x].events[y].durationMillis > 0){
          console.log("\tCucumber step: \t\t\t\t" + a[x].events[y].name);
        } else {
          console.log("\tCucumber step: \t\t\t\ttestSkipped");
          skipped++;
        }

        console.log("\tDuration cucumber step: \t\t" + a[x].events[y].durationMillis + " miliseconds");
        console.log();
        if(a[x].events[y].durationMillis > 0){
          duration+= a[x].events[y].durationMillis;
        }
        if(a[x].events[y].emitterEvent == "testPass" && a[x].events[y].durationMillis > 0){
          succeeded++;
        } else if(a[x].events[y].emitterEvent == "testFail") {
          failed++;
          scenarioSucceeded--;
        } 
      }
      console.log('\tAmount of cucumber steps succeeded:\t' + succeeded);
      console.log('\tAmount of cucumber steps failed:\t' + failed);
      console.log('\tAmount of cucumber steps skipped:\t' + skipped);
      console.log("\tTest ended after: " + duration + " miliseconds");
      console.log();
    }
    console.log('Amount of scenarios succeeded:\t' + scenarioSucceeded);
    console.log('Amount of scenarios failed:\t' + (a.length - scenarioSucceeded));
    console.log('Test(s) ended after: ' + ((new Date() - startDate) / 1000) + ' seconds.');
    console.log();
    console.log();
    console.log();
    console.log();
    // console.log(JSON.stringify(a, null, "    "));
  }
};