/**
 * @protected 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F3F5C83D-C79A-4A1A-B307-D0AE99375BAD"}
 */
var valueToDisplay = '';

/**
 * @protected 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D11430B-EF6F-45D8-9BA1-2F1DF09A6650"}
 */
var formNameFrom = '';
	
/**
 * @protected 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CACD78BF-CA2C-486B-8CAA-1D43BFE75431"}
 */
var elementNameFrom = '';
	

/**
 * @properties={typeid:24,uuid:"B76C1A57-493F-4CF6-9143-44D3E4C48448"}
 */
function setProperties(formName, elementName, value) {
	if(formName && elementName && value) {
		formNameFrom = formName;
		elementNameFrom = elementName;
		valueToDisplay = value;
		return true;
	} else {
		return false;
	}
}
/**
 * @private 
 * @properties={typeid:24,uuid:"09D848CC-9CDF-4249-8BF5-05B279DF1311"}
 */
function close() {
	application.getActiveWindow().hide()
}

/**
 * @private 
 * @properties={typeid:24,uuid:"0419BCAD-E0EE-486B-B42B-E688CADD446D"}
 */
function apply() {
	if(valueToDisplay && formNameFrom && elementNameFrom) {
		forms[formNameFrom].elements[elementNameFrom].configAdvancedChart(JSON.parse(valueToDisplay));
	}
	close();
}