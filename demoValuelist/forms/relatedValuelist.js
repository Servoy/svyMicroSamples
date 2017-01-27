/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AADFC711-A2CF-45A4-8D24-7F9DFF79352A"}
 */
var selected_customer= null;

/**
 * @properties={typeid:24,uuid:"317640AE-03D5-4F07-AFF6-5348601927CD"}
 */
function getName() {
	return "Related Valuelist"
}

/**
 * @properties={typeid:24,uuid:"1C53FE92-2990-4A7E-B045-0E2A35DC23EA"}
 */
function getDescription() {
	return "Valuelist generated on related data without writing a line of code";
}

/**
 * @properties={typeid:24,uuid:"7ABB7130-B6B8-4A10-B5FE-1AFD6124AC1C"}
 */
function getParent() {
	return forms.valuelistparent;
}

/**
 * @properties={typeid:24,uuid:"59A2A570-064B-47E9-85D5-03EC5733778D"}
 */
function getIconStyleClass() {
	return 'fa-gear';
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8126C5F9-C651-4BA4-9795-51DB44C11218"}
 */
function onShow(firstShow, event) {
	scopes.demoValuelist.xcountry = country
}
