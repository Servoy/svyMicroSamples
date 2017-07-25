'use strict';
module.exports = function () {
	var EC = protractor.ExpectedConditions;
	var expect = require('expect');
	var startDate = new Date();
	var tempDate;
	var startBlockDate = new Date();
	var tempBlockDate;
	var hasErrorDuringSuite = false;
	var userAnalytics = require('universal-analytics');
	var analytics = userAnalytics('UA-93980847-1');

	//FOUNDSET SAMPLE GALERY FUNCTIONS//
	this.Given(/^I go to "([^"]*)"$/, { timeout: 60 * 1000 }, function (site, callback) {
		browser.get(site).then(function () {
			wrapUp(callback, "URL Navigation event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^servoy sidenav component with name (.*) tab (.*) is clicked$/, { timeout: 10 * 1000 }, function (elementName, tabName, callback) {
		var menuItems = element.all(by.xpath("//data-servoyextra-sidenav[@data-svy-name='" + elementName + "']"));
		menuItems.each(function (menuItem) {
			clickElement(menuItem.element(by.cssContainingText('a', tabName))).then(function () {
				wrapUp(callback, "Click event");
			})
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^servoy calendar component with name "([^"]*)" is clicked$/, { timeout: 60 * 1000 }, function (elementName, callback) {
		clickElement(element(by.xpath("//data-servoydefault-calendar[@data-svy-name='" + elementName + "']/div/span[1]"))).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^servoy calendar component is clicked untill I reach month (.*) in year (.*)$/, { timeout: 120 * 1000 }, function (month, year, callback) {
		var monthTo = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"].indexOf(month.toLowerCase()) + 1;
		var yearFrom = new Date().getFullYear();
		var monthFrom = new Date().getMonth() + 1;
		var yearTo = year;
		var differenceInMonths;

		if (yearFrom > yearTo) { //calendar year is in the future
			differenceInMonths = (yearFrom - yearTo) * 12;//selected calendar date to is in the past

			if (monthTo > monthFrom) {
				differenceInMonths -= (monthTo - monthFrom);
			}
			else if (monthFrom > monthTo) {
				differenceInMonths += (monthFrom - monthTo);
			}
			for (var x = 0; x < differenceInMonths; x++) {
				clickElement(element.all(by.css('.prev')).first());
			}
		} else if (yearFrom < yearTo) { //calendar year is in the past
			differenceInMonths = (yearTo - yearFrom) * 12;//selected calendar date to is in the future

			if (monthTo > monthFrom) {
				differenceInMonths += (monthTo - monthFrom);
			}
			else if (monthFrom > monthTo) {
				differenceInMonths -= (monthFrom - monthTo);
			}
			console.log('Clicks after month: ' + differenceInMonths);

			for (var x = 0; x < differenceInMonths; x++) {
				clickElement(element.all(by.css('.next')).first());
			}
		} else { //calendar data and current year are the same
			if (monthTo > monthFrom) {
				differenceInMonths = (monthTo - monthFrom);
				console.log('Clicks after month: ' + differenceInMonths);

				for (var x = 0; x < differenceInMonths; x++) {
					clickElement(element.all(by.css('.next')).first());
				}
			}
			else if (monthFrom > monthTo) {
				differenceInMonths = (monthFrom - monthTo);
				console.log('Clicks after month: ' + differenceInMonths);

				for (var x = 0; x < differenceInMonths; x++) {
					clickElement(element.all(by.css('.prev')).first());
				}
			}
		}
		browser.controlFlow().execute(callback);
		//wrapUp(callback, "Calendar event");
	});

	this.When(/^servoy calendar component day "([^"]*)" is clicked$/, { timeout: 15 * 1000 }, function (day, callback) {
		browser.wait(EC.presenceOf(element(by.cssContainingText("td", day)))).then(function () {
			browser.wait(EC.elementToBeClickable(element(by.cssContainingText("td", day)))).then(function () {
				clickElement(element(by.cssContainingText("td.day", day))).then(function () {
					wrapUp(callback, "Click event");
				});
			});
		}).catch(function (error) {
			console.log('error.message');
			tierdown(true);
		})
	});

	this.When(/^servoy select2tokenizer component with name "([^"]*)" is clicked$/, { timeout: 60 * 1000 }, function (elementName, callback) {
		clickElement(element(by.xpath("//data-servoyextra-select2tokenizer[@data-svy-name='" + elementName + "']/div/span/span/span/ul/li/input"))).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^servoy select2tokenizer component with class name "([^"]*)" record number "([^"]*)" is clicked$/, { timeout: 60 * 1000 }, function (elementClass, recordNumber, callback) {
		element.all(by.xpath("//ul[@class='" + elementClass + "']")).each(function (childElement) {
			return clickElement(childElement.all(by.css('li')).get(recordNumber - 1));
		}).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	//cheat manier. De typeahead zoekt records gebaseerd op input, de stap is hier te snel voor dus is er een pause van 2 seconden
	this.Then(/^servoy select2tokenizer component with class name "([^"]*)" record number "([^"]*)" equals (.*)$/, { timeout: 60 * 1000 }, function (elementClass, recordNumber, text, callback) {
		browser.sleep(2000).then(function () {
			element.all(by.xpath("//ul[@class='" + elementClass + "']")).each(function (childElement) {
				childElement.all(by.css('li')).get(recordNumber - 1).getText().then(function (textToCompare) {
					console.log(textToCompare);
					validate(textToCompare, text);
				});
			}).then(function () {
				wrapUp(callback, "Click event");
			}).catch(function (error) {
				console.log(error.message);
				tierdown(true);
			});
		});
	});

	this.When(/^servoy select2tokenizer component with name "([^"]*)" the text (.*) is inserted$/, { timeout: 60 * 1000 }, function (elementName, text, callback) {
		var elem = element(by.xpath("//data-servoyextra-select2tokenizer[@data-svy-name='" + elementName + "']/div/span/span/span/ul/li/input"));
		sendKeys(elem, text).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^I press "([^"]*)"$/, { timeout: 60 * 1000 }, function (browserAction, callback) {
		browserAction = browserAction.toLowerCase();
		switch (browserAction) {
			case "enter":
				browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
					wrapUp(callback, "Browser action event");
				}).catch(function (error) {
					console.log(error.message);
					tierdown(true);
				});
				break;
			case "tab":
				browser.actions().sendKeys(protractor.Key.TAB).perform().then(function () {
					wrapUp(callback, "Browser action event");
				}).catch(function (error) {
					console.log(error.message);
					tierdown(true);
				});
				break;
			default:
				console.log("Unknown browser action");
				tierdown(true);
		}
	});

	this.When(/^servoy table component with name "([^"]*)" I scroll to the record with (.*) as text$/, { timeout: 60 * 1000 }, function (elementName, recordText, callback) {
		findRecord(elementName, recordText, callback);
	});

	//END FOUNDSET SAMPLE GALERY FUNCTIONS//
	//CRYPTOGRAPHY SAMPLE GALERY FUNCTIONS//	
	this.When(/^servoy combobox component with name "([^"]*)" is clicked$/, { timeout: 60 * 1000 }, function (elementName, callback) {
		clickElement(element(by.xpath("//data-servoydefault-combobox[@data-svy-name='" + elementName + "']"))).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^servoy combobox component with name "([^"]*)" the text (.*) is inserted$/, { timeout: 60 * 1000 }, function (elementName, text, callback) {
		sendKeys(element(by.xpath("//data-servoydefault-combobox[@data-svy-name='" + elementName + "']/div/input[1]")), text).then(function () {
			wrapUp(callback, "Insert value event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^servoy button component with name "([^"]*)" is clicked$/, { timeout: 60 * 1000 }, function (elementName, callback) {
		clickElement(element(by.xpath("//data-servoydefault-button[starts-with(@data-svy-name, '" + elementName + "')]/button"))).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^default textarea component with name "([^"]*)" the text "([^"]*)" is inserted$/, { timeout: 60 * 1000 }, function (elementName, text, callback) {
		sendKeys(element(by.xpath("//textarea[@data-svy-name='" + elementName + "']")), text).then(function () {
			wrapUp(callback, "Insert value event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});
	//ENDCRYPTOGRAPHY SAMPLE GALERY FUNCTIONS//

	this.Then(/^the page URL is "([^"]*)"$/, { timeout: 60 * 1000 }, function (URL, callback) {
		browser.wait(function () {
			return browser.getCurrentUrl().then(function (url) {
				if (url === URL) {
					wrapUp(callback, "URL Validation event");
				}
			});
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^"([^"]*)" with name "([^"]*)" I insert (.*)$/, { timeout: 60 * 1000 }, function (elementType, elementName, input, callback) {
		browser.wait(EC.presenceOf(element(by.xpath("//" + elementType + "[starts-with(@data-svy-name, '" + elementName + "')]"))).call(), 20000, 'Not visible').then(function () {
			var elem_fld = element(by.xpath("//" + elementType + "[starts-with(@data-svy-name, '" + elementName + "')]"));
			browser.wait(EC.presenceOf(elem_fld)).then(function () {
				sendKeys(elem_fld, input);
			});
		}).then(function () {
			wrapUp(callback, "Insert value event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^"([^"]*)" with name "([^"]*)" with a class "([^"]*)" that is clicked$/, { timeout: 60 * 1000 }, function (elementType, elementName, elementClass, callback) {
		browser.sleep(1000).then(function () {
			browser.wait(EC.presenceOf(element(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']"))).call(), 20000, 'Not visible').then(function () {
				element.all(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']")).each(function (childElement) {
					clickElement(childElement.element(by.css('.' + elementClass))).then(function () {
						wrapUp(callback, "Click event");
					});
				});
			}).catch(function (error) {
				console.log(error.message);
				tierdown(true);
			});
		})
	});

	this.When(/^"([^"]*)" with name "([^"]*)" is clicked on servoy row "([^"]*)"$/, { timeout: 60 * 1000 }, function (elementType, elementName, rowNumber, callback) {
		browser.wait(EC.presenceOf(element(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']"))).call(), 20000, 'Not visible').then(function () {
			element.all(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']")).each(function (childElement) {
				clickElement(childElement.all(by.css('.ui-grid-row.ng-scope')).get(rowNumber - 1));
			})
		}).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^I want to log the time it toke to do this "([^"]*)" event$/, { timeout: 60 * 1000 }, function (event, callback) {
		var duration = calcBlockDuration(new Date());
		console.log('The ' + event + ' event toke ' + duration + ' miliseconds');
		analytics.event('Scenario 1', "Performance", event, duration).send();
		callback();
	});

	this.When(/^"([^"]*)" with name "([^"]*)" is clicked with text (.*)$/, { timeout: 10 * 1000 }, function (elementType, elementName, text, callback) {
		browser.sleep(3000).then(function () {
			element.all(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']")).each(function (childElement) {
				clickElement(childElement.all(by.cssContainingText('div', text)).last());
			}).then(function () {
				wrapUp(callback, "Click event");
			}).catch(function (error) {
				console.log(error.message);
				tierdown(true);
			});
		});
	});

	this.When(/^"([^"]*)" with name "([^"]*)" is clicked$/, { timeout: 60 * 1000 }, function (elementType, elementName, callback) {
		clickElement(element(by.xpath("//" + elementType + "[starts-with(@data-svy-name, '" + elementName + "')]"))).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^"([^"]*)" with name "([^"]*)" is clicked on row "([^"]*)"$/, { timeout: 60 * 1000 }, function (elementType, elementName, rowNumber, callback) {
		browser.wait(EC.presenceOf(element(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']"))).call(), 20000, 'Not visible').then(function () {
			element.all(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']")).each(function (childElement) {
				browser.wait(EC.elementToBeClickable(childElement.all(by.css('.ui-grid-row.ng-scope')).get(rowNumber - 1)), 30000, 'Element not clickable').then(function () {
					clickElement(childElement.all(by.css('.ui-grid-row.ng-scope')).get(rowNumber - 1));
				});
			});
		}).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^"([^"]*)" with name "([^"]*)" is clicked which contains the exact text "([^"]*)"$/, { timeout: 60 * 1000 }, function (elementType, elementName, input, callback) {
		browser.wait(EC.presenceOf(element(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']"))).call(), 20000, 'Not visible').then(function () {
			element.all(by.xpath("//" + elementType + "[@data-svy-name='" + elementName + "']")).each(function (childElement) {
				clickElement(childElement.element(by.cssContainingText('*', input)));
			});
		}).then(function () {
			wrapUp(callback, "Click event");
		}).catch(function (error) {
			console.log(error.message);
			tierdown(true);
		});
	});

	this.When(/^"([^"]*)" with name "([^"]*)" is clicked which contains text "([^"]*)"$/, { timeout: 60 * 1000 }, function (elementType, elementName, input, callback) {
		browser.sleep(2000).then(function () {
			element.all(by.xpath("//" + elementType + "[starts-with(@data-svy-name, '" + elementName + "')]")).each(function (childElement) {
				clickElement(childElement.all(by.xpath('//div[contains(.,"' + input + '")]')).last()).then(function () {
					wrapUp(callback, "Click event");
				});
			}).catch(function (error) {
				console.log(error.message);
				tierdown(true);
			});
		});
	});

	this.Then(/^I am done$/, { timeout: 30 * 1000 }, function (callback) {
		console.log('Flow completed');
		browser.sleep(5000).then(function () {
			callback();
		})
	});

	this.After(function () {
		console.log('Completed scenario');
		if (!hasErrorDuringSuite) {
			tierdown(false);
		}

	});

	this.Before(function () {
		hasErrorDuringSuite = false;
		console.log('Starting scenario');
		// browser.sleep(4000).then(function(){
		// 	// setupDatabase(1, 'sql_creation');
		// 	setupDatabase(setupVersion, 'onStartup');
		// });
	});

	function validate(input, inputToCompare) {
		expect(input).toBe(inputToCompare);
	}

	function wrapUp(callback, performanceEvent) {
		var duration = calcStepDuration(new Date());
		console.log('Step toke ' + duration + ' miliseconds');
		//analytics.event('Scenario 1', "Performance", performanceEvent, duration).send();
		callback();
	}

	function clickElement(elem) {
		return browser.wait(EC.presenceOf(elem).call(), 30000, 'Element not visible').then(function () {
			return browser.wait(EC.elementToBeClickable(elem), 30000, 'Element not clickable').then(function () {
				return elem.click();
			});
		});
	}

	function sendKeys(elem, input) {
		return browser.wait(EC.visibilityOf(elem).call(), 30000, 'Element not visible').then(function () {
			return elem.clear().then(function () {
				return elem.sendKeys(input);
			});
		});
	}

	function calcBlockDuration(timeStepCompleted) {
		if (!!tempBlockDate) {
			var stepduration = timeStepCompleted - tempBlockDate;
			tempBlockDate = timeStepCompleted;
			return stepduration;
		} else {
			var stepduration = timeStepCompleted - startBlockDate;
			tempBlockDate = timeStepCompleted;
			return stepduration;
		}
	}

	function calcStepDuration(timeStepCompleted) {
		if (!!tempDate) {
			var stepduration = timeStepCompleted - tempDate;
			tempDate = timeStepCompleted;
			return stepduration;
		} else {
			var stepduration = timeStepCompleted - startDate;
			tempDate = timeStepCompleted;
			return stepduration;
		}
	}

	function formatTimestamp(date) {
		return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	}

	function tierdown(hasError) {
		if (hasError) {
			console.log('Has error during entire suite. Starting partial tier down');
			hasErrorDuringSuite = true;
			// setupDatabase(onErrorVersion, 'OnCrash');
		} else {
			console.log('Has no error during entire suite. Starting complete tier down');
			// setupDatabase(onCompleteVersion, 'OnComplete');
		}
	}

	function findRecord(elementName, recordText, callback) {
		var found = false;
		var click = 0;
		element.all(by.xpath("//div[@data-svy-name='" + elementName + "']")).each(function (childElement) {
			childElement.all(by.xpath("//div[@class='ui-grid-row ng-scope']")).each(function (grandChild) {
				grandChild.getText().then(function (text) {
					if (text.indexOf(recordText) > -1) {
						found = true;
						if (click === 0) {
							clickElement(grandChild).then(function () {
								wrapUp(callback, "Scroll event");
							});
							click++;
						}
					}
				});
			});
		}).then(function () {
			if (!found) {
				scrollToElement(elementName, recordText, callback);
			}
		});
	}

	function scrollToElement(elementName, recordText, callback) {
		element.all(by.xpath("//div[@data-svy-name='" + elementName + "']")).each(function (childElement) {
			var elem = childElement.all(by.xpath("//div[@class='ui-grid-row ng-scope']")).last();
			browser.executeScript("arguments[0].scrollIntoView(true);", elem.getWebElement()).then(function () {
				findRecord(elementName, recordText, callback);
			});
		});
	}
};