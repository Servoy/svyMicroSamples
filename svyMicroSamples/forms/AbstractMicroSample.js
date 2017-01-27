/**
 * Show the display name of the sample for navigation 
 * @public 
 * @return {String}
 * @properties={typeid:24,uuid:"EB63D830-02F7-4CE4-BC4F-96E36F200217"}
 */
function getName(){
	throw 'Method must be implemented'
}

/**
 * Show the description, i.e. tooltip
 * 
 * @public 
 * @return {String}
 * @properties={typeid:24,uuid:"64E4FDEA-B37D-403E-81D6-54E4E62961A4"}
 */
function getDescription(){
	throw 'Method must be implemented'
}

/**
 * Gets the parent form for hierarchy
 * @public 
 * @return {RuntimeForm<AbstractMicroSample>}
 * @properties={typeid:24,uuid:"4F502D68-AD7C-46FE-90E6-4364A13E857E"}
 */
function getParent(){
	return null;
}

/**
 * Gets an optional icon style class for menu navigation
 * @public 
 * @return {String}
 * @properties={typeid:24,uuid:"03913234-F650-4704-B138-4C8EA9BE27C2"}
 */
function getIconStyleClass(){
	return null;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param functionToPrint
 * @return {Array<String>}
 * @properties={typeid:24,uuid:"EF846935-DDF2-4A8A-8635-FEF190847BDD"}
 */
function printMethodCode(functionToPrint) {
	var fd = new Packages.com.servoy.j2db.scripting.FunctionDefinition(functionToPrint);
	if (fd.getFormName()) {
		var jsForm = solutionModel.getForm(fd.getFormName());
		var jsMethod = jsForm.getMethod(fd.getMethodName());
		
		var lines = jsMethod.code.split('\n');
		var relevantLines = [];
		var functionStartFound = false;
		for (var i = 0; i < lines.length; i++) {
			if (!functionStartFound && utils.stringTrim(lines[i]).indexOf('function ') == 0) {
				functionStartFound = true;
			}
			if (functionStartFound && lines[i].indexOf('printMethodCode') == -1) {
				relevantLines.push(lines[i]);
			}
		}
		
		relevantLines.pop();
		return relevantLines;
		
//		var relevantCode = relevantLines.join('\n');
//		application.output(relevantCode);
		
//		forms.method_code.setMethodCode(relevantLines);
		
//		return relevantCode;
	} else {
		return [];
	}
} 
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"BB075C8A-D9A6-4F4E-BB4C-DFC99F1B2814"}
 */
function onShow(firstShow, event) {
	scopes.svyMicroSamples.showInfo('');
}
