angular.module('svyhelp', ['servoy']).directive('helpDemo', function($services) {
		return {
			restrict: 'A',
			controller: function($scope, $element, $attrs) {
				console.log('found help-demo attribute on element ' + $element[0].id);
			}
		}
	}).directive('svyLabel', function($window, $services, $sabloUtils) {
		return {
			restrict: 'C',
			controller: function($scope, $element, $attrs) {
				var serviceScope = $services.getServiceScope('svyhelp');
				var bindTo = serviceScope.model.helpEvent;

				serviceScope.createJSEvent = function(event) {
					var targetEl;
					if (event.target) targetEl = event.target;
					else if (event.srcElement) targetEl = event.srcElement;

					var form;
					var parent = targetEl;
					var targetElNameChain = new Array();
					while (parent) {
						form = parent.getAttribute("ng-controller");
						if (form) {
							break;
						}
						if (parent.getAttribute("name")) targetElNameChain.push(parent.getAttribute("name"));
						parent = parent.parentNode;
					}

					//create JSEvent
					var jsEvent = { svyType: 'JSEvent' };

					//get event type
					var eventType = 'action';
					if (event.type == 'contextmenu') eventType = 'rightClick';
					else if (event.type == 'dblclick') eventType = 'doubleClick';
					jsEvent.eventType = eventType;

					//get modifiers
					var modifiers = (event.altKey ? 8 : 0) | (event.shiftKey ? 1 : 0) | (event.ctrlKey ? 2 : 0) | (event.metaKey ? 4 : 0);
					jsEvent.modifiers = modifiers;

					//TODO: are these the coordinates we need? https://support.servoy.com/browse/SVY-9010
					jsEvent.x = event.pageX;
					jsEvent.y = event.pageY;

					jsEvent.data = null;

					var formScope = angular.element(parent).scope();
					for (var i = 0; i < targetElNameChain.length; i++) {
						if (formScope.model[targetElNameChain[i]]) {
							jsEvent.elementName = targetElNameChain[i];
							break;
						}
					}
					return jsEvent;
				}

				$element.bind(bindTo, function(e) {
						if (angular.element(this).hasClass('svy-help') && serviceScope.model.helpMode === true) {
							var jsevent = serviceScope.createJSEvent(e);
							jsevent.eventType = bindTo;
							$window.executeInlineScript(serviceScope.model.callback.formname, serviceScope.model.callback.script, [jsevent]);
						}
					});
			}
		};
	}).directive('svyTextfield', function($window, $services, $sabloUtils) {
		return {
			restrict: 'C',
			controller: function($scope, $element, $attrs) {
				var serviceScope = $services.getServiceScope('svyhelp');
				var bindTo = serviceScope.model.helpEvent;

				serviceScope.createJSEvent = function(event) {
					var targetEl;
					if (event.target) targetEl = event.target;
					else if (event.srcElement) targetEl = event.srcElement;

					var form;
					var parent = targetEl;
					var targetElNameChain = new Array();
					while (parent) {
						form = parent.getAttribute("ng-controller");
						if (form) {
							break;
						}
						if (parent.getAttribute("name")) targetElNameChain.push(parent.getAttribute("name"));
						parent = parent.parentNode;
					}

					//create JSEvent
					var jsEvent = { svyType: 'JSEvent' };

					//get event type
					var eventType = 'action';
					if (event.type == 'contextmenu') eventType = 'rightClick';
					else if (event.type == 'dblclick') eventType = 'doubleClick';
					jsEvent.eventType = eventType;

					//get modifiers
					var modifiers = (event.altKey ? 8 : 0) | (event.shiftKey ? 1 : 0) | (event.ctrlKey ? 2 : 0) | (event.metaKey ? 4 : 0);
					jsEvent.modifiers = modifiers;

					//TODO: are these the coordinates we need? https://support.servoy.com/browse/SVY-9010
					jsEvent.x = event.pageX;
					jsEvent.y = event.pageY;

					jsEvent.data = null;

					var formScope = angular.element(parent).scope();
					for (var i = 0; i < targetElNameChain.length; i++) {
						if (formScope.model[targetElNameChain[i]]) {
							jsEvent.elementName = targetElNameChain[i];
							break;
						}
					}
					return jsEvent;
				}

				$element.bind(bindTo, function(e) {
						if (angular.element(this).hasClass('svy-help') && serviceScope.model.helpMode === true) {
							var jsevent = serviceScope.createJSEvent(e);
							jsevent.eventType = bindTo;
							$window.executeInlineScript(serviceScope.model.callback.formname, serviceScope.model.callback.script, [jsevent]);
						}
					});
			}
		};
	}).directive('svyButton', function($window, $services, $sabloUtils) {
		return {
			restrict: 'C',
			controller: function($scope, $element, $attrs) {
				var serviceScope = $services.getServiceScope('svyhelp');
				var bindTo = serviceScope.model.helpEvent;

				serviceScope.createJSEvent = function(event) {
					var targetEl;
					if (event.target) targetEl = event.target;
					else if (event.srcElement) targetEl = event.srcElement;

					var form;
					var parent = targetEl;
					var targetElNameChain = new Array();
					while (parent) {
						form = parent.getAttribute("ng-controller");
						if (form) {
							break;
						}
						if (parent.getAttribute("name")) targetElNameChain.push(parent.getAttribute("name"));
						parent = parent.parentNode;
					}

					//create JSEvent
					var jsEvent = { svyType: 'JSEvent' };

					//get event type
					var eventType = 'action';
					if (event.type == 'contextmenu') eventType = 'rightClick';
					else if (event.type == 'dblclick') eventType = 'doubleClick';
					jsEvent.eventType = eventType;

					//get modifiers
					var modifiers = (event.altKey ? 8 : 0) | (event.shiftKey ? 1 : 0) | (event.ctrlKey ? 2 : 0) | (event.metaKey ? 4 : 0);
					jsEvent.modifiers = modifiers;

					//TODO: are these the coordinates we need? https://support.servoy.com/browse/SVY-9010
					jsEvent.x = event.pageX;
					jsEvent.y = event.pageY;

					jsEvent.data = null;

					var formScope = angular.element(parent).scope();
					for (var i = 0; i < targetElNameChain.length; i++) {
						if (formScope.model[targetElNameChain[i]]) {
							jsEvent.elementName = targetElNameChain[i];
							break;
						}
					}
					return jsEvent;
				}

				$element.bind(bindTo, function(e) {
						if (angular.element(this).hasClass('svy-help') && serviceScope.model.helpMode === true) {
							var jsevent = serviceScope.createJSEvent(e);
							jsevent.eventType = bindTo;
							$window.executeInlineScript(serviceScope.model.callback.formname, serviceScope.model.callback.script, [jsevent]);
						}
					});
			}
		};
	}) 