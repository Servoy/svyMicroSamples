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

    After({ timeout: 20 * 1000 }, function (scenario, callback) {
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

        var jsonDirectory = browser.params.jsonDirectory;
        var htmlDirectory = browser.params.htmlDirectory;
        var screenshotDirectory = browser.params.screenshotDirectory;
        function getOptions(theme) {
            return {
                name: '@cucumber-html-reporter/*&!@#$%)(~<>`', //this tests for the sanitized hyperlinks on report, otherwise this should be plain text english
                theme: theme,
                output: path.join(htmlDirectory, 'cucumber_report_' + theme + '.html'),
                reportSuiteAsScenarios: true,
                launchReport: false,
                storeScreenshots: true,
                screenshotsDirectory: screenshotDirectory,
                jsonDir: jsonDirectory
            };
        }

        function getJsonDirOptions(theme) {
            var options = getOptions(theme);
            //options.jsonDir = jsonDirectory;
            return options;
        }

        function assertJsonDir() {
            //Generate Hierarchy theme report
            reporter.generate(getJsonDirOptions(theme.hierarchy));

            // Generate Bootstrap theme report
            reporter.generate(getJsonDirOptions(theme.bootstrap));

            // //Generate Foundation theme report
            reporter.generate(getJsonDirOptions(theme.foundation));

            // //Generate Simple theme report
            reporter.generate(getJsonDirOptions(theme.simple));

            //assert reports
            // assertHtmlReports(outputDirectory);
        }

        assertJsonDir();


        callback();
    });
});