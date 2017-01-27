/**
 * @param {Function} functionToPrint
 *
 * @properties={typeid:24,uuid:"66732C8D-2ABE-426D-B8BB-6A042BF12D30"}
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
		var relevantCode = relevantLines.join('\n');
		application.output(relevantCode);
		
		forms.method_code.setMethodCode(relevantLines);
		
		return relevantCode;
	} else {
		return null;
	}
}