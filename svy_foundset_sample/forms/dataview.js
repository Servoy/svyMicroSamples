/**
 * @type {String}
 * The search term.
 * @properties={typeid:35,uuid:"E5304C58-72CA-4232-B121-C1B9FEFCFE31"}
 */
var searchTerm = '';

/**
 * Add a new record
 * @properties={typeid:24,uuid:"524B62A9-B230-4318-89D0-897DA980B355"}
 */
function newRecord(){
	forms.customer.newRecord();
}
/**
 * Perform the element default action.
 * Search for a customer
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4E1FDD88-1494-4DAE-9301-C0FF715C8B60"}
 * @AllowToRunInFind
 */
function onSearch(event) {
	forms.customer.searchRecords(searchTerm);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4C0D90EF-3E95-488B-980A-323A0C5BD086"}
 */
function onLoad(event) {
	databaseManager.setAutoSave(false);
}
