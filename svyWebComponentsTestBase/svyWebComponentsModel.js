/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"453BCEE7-BF64-4988-97F1-48EC424D4760"}
 */
function onSolutionOpen(arg, queryParams) {
	initLongValuelist();
}

/**
 * @properties={typeid:24,uuid:"DDC8953C-951B-4E24-9A6C-4BC040DC2D7B"}
 */
function initLongValuelist() {
	var length = 1001;
	var realValues = [];
	var displayValues = [];
	for (var i = 1; i <= length; i++) {
		realValues.push(i);
		displayValues.push("val-" + i)
	}
	application.setValueListItems("longList", displayValues, realValues);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2EE324D5-0921-48E1-B9BE-3B4D318105C0"}
 */
function getFormPopupMenu(event) {
	
}

/**
* @param {JSEvent} event
* @public 
 *
 * @properties={typeid:24,uuid:"36A1FFB4-319D-4000-9FB9-49E073F0CA76"}
 */
function showFormPopupMenu(event) {
	
	/** @type {RuntimeForm<testBase>} */
	var form = forms[event.getFormName()];
	
	var menu = plugins.window.createPopupMenu();
	var menuItem = menu.addCheckBox("form-read-only")//, toggleFormReadOnly ,icon,mnemonic,enabled)
	menuItem.text = "Form ReadOnly";
	menuItem.setMethod(executePopupMethod);
	menuItem.methodArguments = [form.toggleFormReadOnly, event];
	menuItem.selected = form.controller.readOnly;
	
	menuItem = menu.addCheckBox("form-enabled");
	menuItem.text = "Form Enabled";
	menuItem.setMethod(executePopupMethod);
	menuItem.methodArguments = [form.toggleFormEnabled, event];
	menuItem.selected = form.controller.enabled;
	
	menu.show(event.getX(), event.getY());
}


/**
 * @param {JSEvent} event
 * @public 
 *
 * @properties={typeid:24,uuid:"8466DEBC-41D9-4AF5-BC19-D0D6D615BA8F"}
 */
function showElementPopupMenu(event) {
	
	
	/** @type {RuntimeForm<testBase>} */
	var form = forms[event.getFormName()];
	
	var element = form.elements[form.testElement];
	
	var menu = plugins.window.createPopupMenu();
	var menuItem;
	var subMenu;
	if (element) {
		menuItem = menu.addCheckBox("element-read-only"); //, toggleFormReadOnly ,icon,mnemonic,enabled)
		menuItem.text = "Element ReadOnly";
		menuItem.setMethod(executePopupMethod);
		menuItem.methodArguments = [form.toggleElementPropertyBoolean, event, 'readOnly'];
		menuItem.selected = element['readOnly'];
		
		menuItem = menu.addCheckBox("element-enabled");
		menuItem.text = "Element Enabled";
		menuItem.setMethod(executePopupMethod);
		menuItem.methodArguments = [form.toggleElementPropertyBoolean, event, 'enabled'];
		menuItem.selected = element.enabled;
		
		menuItem = menu.addCheckBox("element-visible");
		menuItem.text = "Element Visible";
		menuItem.setMethod(executePopupMethod);
		menuItem.methodArguments = [form.toggleElementPropertyBoolean, event, 'visible'];
		menuItem.selected = element.visible;
		
		subMenu = menu.addMenu("element-focus");
		subMenu.text = "Request Focus";
		
		if (element['requestFocus']) {
			menuItem = subMenu.addMenuItem("element-request-focus");
			menuItem.text = "Don't execute onFocusGained";
			menuItem.setMethod(executePopupMethod);
			menuItem.methodArguments = [form.requestFocus, 'false'];
			
			menuItem = subMenu.addMenuItem("element-request-focus-mustexecuteonfocusgained");
			menuItem.text = "Must execute onFocusGained";
			menuItem.setMethod(executePopupMethod);
			menuItem.methodArguments = [form.requestFocus, 'true'];
		} else {
			subMenu.setEnabled(false);
		}
		
		menuItem = menu.addCheckBox("element-location")
		menuItem.text = "Element location";
		menuItem.setMethod(executePopupMethod);
		menuItem.methodArguments = [form.getLocation, event];

		menuItem = menu.addCheckBox("element-size")
		menuItem.text = "Element size";
		menuItem.setMethod(executePopupMethod);
		menuItem.methodArguments = [form.getSize, event];
		
	} else {
		menuItem = menuItem = menu.addCheckBox("-Test element not specified-");
	}
	
	menu.show(event.getX(), event.getY());
}


/**
 * @param index
 * @param parentIndex
 * @param isSelected
 * @param parentText
 * @param text
 * @param {Array} args
 * @private 
 *
 * @properties={typeid:24,uuid:"E1496A10-5DDE-4BD7-BE6E-88617A66DA7D"}
 */
function executePopupMethod(index, parentIndex, isSelected, parentText, text, args) {
	/** @type {Function} */
	var callback = arguments[5];	
	var params = [];
	for (var i = 6; i < arguments.length; i++) {
		params.push(arguments[i]);
	}

	callback.apply(this,params);
}

