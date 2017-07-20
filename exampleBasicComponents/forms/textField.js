/**
 * Default variable for binding to text fields
 *  
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C8576FF-8EE8-4269-925C-5EEB5CF997A0"}
 */
var defaultValue = 'ABC Company';

/**
 * Variable for holding value for field w/ placeholder (this is NOT the placeholder text itself)
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A928F90D-CF3E-4B66-80D4-F418E837895A"}
 */
var placeHolderFieldValue = '';

/**
 * Variable for holding a phone number to show formatting
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ED02C139-FD8B-49F1-8FC9-4F38086422CC"}
 */
var formattedString = '8005555555';

/**
 * Variable for holding a number for a currency format example
 * @private 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E77AA6BB-38C2-42CC-8F81-82C001DD93DE",variableType:8}
 */
var formattedNumber = 1999.99;

/**
 * Variabled for holding value for percentage format example
 * @private  
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8231849B-401B-4BA5-8D49-F53001DA741C",variableType:8}
 */
var formattedNumberPercent = .15;

/**
 * Variable for holding value for date formatting example
 * 
 * @private 
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"522EADE5-A165-48A9-90C8-7F0D26E9FD17",variableType:93}
 */
var formattedDate = new Date();

/**
 * Variable to hold user input for which events to watch
 * 
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"020A7543-E607-4986-8F35-91C9E35DC862"}
 */
var events = ['Action','Data Change','Focus Gained','Focus Lost','Right-Click'].join('\n');

/**
 * Holds the text for event logging
 * @private 
 * @type {String}
 *
 * @properties={typeid:35,uuid:"91F8977F-6003-4009-B90D-5718F2E55BB7"}
 */
var eventLog = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2EF60148-BD6A-485E-B31A-1E8B36988651"}
 */
function onAction(event) {
	if(events.split('\n').indexOf('Action') != -1){
		logEvent(event);
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B427D01E-B97B-43DA-BEFF-1EA5F09767F3"}
 */
function onDataChange(oldValue, newValue, event) {
	if(events.split('\n').indexOf('Data Change') != -1){
		logEvent(event);
	}
	return true
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"807C394B-AEDA-43E1-AC36-EC537AC24546"}
 */
function onFocusGained(event) {
	if(events.split('\n').indexOf('Focus Gained') != -1){
		logEvent(event);
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E73269ED-9FC1-4BF0-8E33-F754F09E4CA8"}
 */
function onFocusLost(event) {
	if(events.split('\n').indexOf('Focus Lost') != -1){
		logEvent(event);
	}
}

/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D5CCA113-EB15-472E-B107-9A16EDABA492"}
 */
function onRightClick(event) {
	if(events.split('\n').indexOf('Right-Click') != -1){
		logEvent(event);
	}
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AD90151D-0D02-4F0E-89DA-0A767D0E8426"}
 */
function logEvent(event){
	var name = '';
	switch (event.getType()) {
		case JSEvent.ACTION:
			name = 'Action'
			break;
		case JSEvent.DATACHANGE:
			name = 'Data Change'
			break;
		case JSEvent.FOCUSGAINED:
			name = 'Focus Gained'
			break;
		case JSEvent.FOCUSLOST:
			name = 'Focus Lost'
			break;
		case JSEvent.RIGHTCLICK:
			name = 'Right-Click'
			break;
		default:
			break;
	}
	var a = eventLog.split('\n')
	a.push(name);
	eventLog = a.join('\n');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"77E49525-B1F1-43C5-9F30-B7A616D0B6C7"}
 */
function clearEventLog(event) {
	eventLog = '';
}

/**
 * 
 * @protected 
 * @return {String}
 * @override 
 * @properties={typeid:24,uuid:"41076EA5-D016-4CF2-938C-5FABD8833F6E"}
 */
function getDescription() {
	return "Text Field";
}

/**
* @protected 
* @return {String}
* @override 
* @properties={typeid:24,uuid:"88E97572-2DCA-4311-ABB5-A1ED8B34DDE6"}
*/
function getName() {
	return "Text Field";
}

/**
 * @properties={typeid:24,uuid:"5F41E542-9C26-476A-80D8-0206EB055BAD"}
 */
function getIconStyleClass() {
	return 'fa fa-keyboard-o';
}

/**
* @protected 
* @return {RuntimeForm<AbstractMicroSample>}
* @override 
* @properties={typeid:24,uuid:"BB0827A3-E10A-4BB3-82EF-62ED77A85830"}
*/
function getParent() {
	return forms.commonComponentSamples;
}

/**
 * @protected 
 * @return {String} Additioanl info (wiki markdown supported)
 * @override 
 * @properties={typeid:24,uuid:"E5289E02-1BB3-49A4-9A74-137C803B1036"}
 */
function getMoreInfo() {
	return 'Foo'
}
/**
 * @properties={typeid:24,uuid:"B2F4E5E8-1220-4C98-AFF1-CB86579F6704"}
 */
function allowFormIncludedInMenu() {
	return true;
}
