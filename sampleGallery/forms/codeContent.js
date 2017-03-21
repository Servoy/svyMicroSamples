/**
 * @private 
 * @type {Array<String>}
 * @properties={typeid:35,uuid:"136116B0-10B9-446A-B5AB-E98B02E6FB33",variableType:-4}
 */
var code = null;

/**
 * @public 
 * @param {Array<String>} codeLines
 *
 * @properties={typeid:24,uuid:"D968CE21-60A5-4D45-9536-F08873D10C28"}
 */
function setCode(codeLines){
	
	elements.codebox.code = codeLines.join('\n');
}
