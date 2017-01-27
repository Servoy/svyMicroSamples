
/**

 * @private
 *
 * @properties={typeid:24,uuid:"852A8AEE-EC31-4421-9EB3-4F2567072316"}
 */
function showFieldValuesForm() {
	//remove tab from tabpanel
	elements.tabsFieldValues.removeAllTabs();
	
	//if the form currently exists, remove it
	if (solutionModel.getForms().indexOf('svy_fieldvalues_main') != -1) {
		solutionModel.removeForm('svy_fieldvalues_main');
	}
	
	//create the form
	var fvForm = solutionModel.cloneForm('svy_fieldvalues_main', solutionModel.getForm('svy_fieldvalues_template'));
	elements.tabsFieldValues.addTab(forms['svy_fieldvalues_main'], null, null, null, null, null, null);
	
	fvForm.newLabel(companyname,0,0,200,20);
	
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7C19DEBD-04F6-47F3-BE90-7249528D6666"}
 */
function onRecordSelection(event) {
	showFieldValuesForm();
}
