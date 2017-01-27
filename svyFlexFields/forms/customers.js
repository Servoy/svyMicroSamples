
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
