'use strict';

var reporter = require('../../index');
var assertHtmlReports = require('../../assert/assertHtmlReports');
var path = require('path');
var fs = require('fs-extra');
var find = require('find');

var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ After, Before, registerHandler }) {

    Before(function (scenario, callback) {
        this.scenario = scenario;
        callback();
    });

    // Before({ tags: '@testPassing' }, function (scenario, callback) {
    //     this.attach('Tests INFO will print here.<br>To attach INFO to Any steps, use scenario.attach function in your step definitions as shown below.<br><br>If you pass HTML\'s to scenario.attach then reporter will format accordingly <br>' +
    //         '<br>Simple String  : scenario.attach(\'sample data\')' +
    //         '<br>Pretty JSON    : scenario.attach(JSON.stringify(json, null, 2))' +
    //         '<br>HTML Link      : scenario.attach(\'format the link with html-a tag\'', 'application/json');

    //     this.attach('some text');
    //     callback();
    // });

    // After({ tags: '@testPassing' }, function (scenario, callback) {
    //     callback();
    // });

    After({timeout: 20 * 1000}, function (scenario, callback) {
        if (scenario.isFailed()) {
            console.log('Scenario failed');
            var world = this;
            browser.takeScreenshot().then(function (buffer) {
                return world.attach(buffer, 'image/png');
            }).then(callback);
        } else {
            console.log('Scenario passed');
            callback();
        }
    });

    registerHandler('AfterFeatures', function (features, callback) {

        var theme = {
            hierarchy: 'hierarchy',
            bootstrap: 'bootstrap',
            foundation: 'foundation',
            simple: 'simple'
        };

        var outputDirectory = 'reports/html_reports/';
        // var jsonFile = 'reports/cucumber_reports/report.json';
        var jsonDir = 'reports/cucumber_reports/';

        function removeHtmlReports() {
            var files = find.fileSync(/\.html/, outputDirectory);
            files.map(function (file) {
                fs.unlinkSync(file);
            });
        }

        function getOptions(theme) {
            return {
                name: '@cucumber-html-reporter/*&!@#$%)(~<>`', //this tests for the sanitized hyperlinks on report, otherwise this should be plain text english
                theme: theme,
                output: path.join(outputDirectory, 'cucumber_report_' + theme + '.html'),
                reportSuiteAsScenarios: true,
                launchReport: false,
                storeScreenshots: true,
                screenshotsDirectory: 'screenshots/'/*,
                metadata: {
                    'App Version': '0.3.2',
                    'Test Environment': 'STAGING',
                    'Browser': 'Chrome  54.0.2840.98',
                    'Platform': 'Windows 10',
                    'Parallel': 'Scenarios',
                    'Executed': 'Remote'
                }*/
            };
        }

        function getJsonFileOptions(theme) {
            var options = getOptions(theme);
            options.jsonFile = jsonFile;
            return options;
        }

        function getJsonDirOptions(theme) {
            var options = getOptions(theme);
            options.jsonDir = jsonDir;
            return options;
        }

        function assertJsonFile() {

            //Generate Hierarchy theme report
            // reporter.generate(getJsonFileOptions(theme.hierarchy));

            //Generate Bootstrap theme report
            reporter.generate(getJsonFileOptions(theme.bootstrap));

            //Generate Foundation theme report
            // reporter.generate(getJsonFileOptions(theme.foundation));

            //Generate Simple theme report
            // reporter.generate(getJsonFileOptions(theme.simple));

            //assert reports
            assertHtmlReports(outputDirectory);
        }

        function assertJsonDir() {
            //Generate Hierarchy theme report
            // reporter.generate(getJsonDirOptions(theme.hierarchy));

            // Generate Bootstrap theme report
            reporter.generate(getJsonDirOptions(theme.bootstrap));

            // //Generate Foundation theme report
            // reporter.generate(getJsonDirOptions(theme.foundation));

            // //Generate Simple theme report
            // reporter.generate(getJsonDirOptions(theme.simple));

            //assert reports
            // assertHtmlReports(outputDirectory);
        }

        assertJsonDir();

        // removeHtmlReports();

        // assertJsonFile();

        callback();
    });
});