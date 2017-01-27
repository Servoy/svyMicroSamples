
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"57108D50-7C88-466C-BD6B-9759DD394FBD"}
 */
function testMethod(event) {
	scopes.svyFlexFields.addFieldsToForm(event,1)

}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"365880BE-BDD0-4FAF-A4BB-9E4B262ADA96"}
 */
function onDataChangeFieldSets(oldValue, newValue, event) {
	var form = scopes.svyFlexFields.addFieldsToForm(event,foundset.svy_fieldset_id)
	elements.tab.containedForm = form
	
	return true
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"43D9F02A-E3D0-4E78-BA3C-146A7CC06324"}
 */
function onRecordSelection(event) {
	var form = scopes.svyFlexFields.addFieldsToForm(event,foundset.svy_fieldset_id)
	elements.tab.containedForm = form
}
