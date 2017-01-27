
/**

 * @private
 *
 * @properties={typeid:24,uuid:"852A8AEE-EC31-4421-9EB3-4F2567072316"}
 */
function showFieldValuesForm() {	
	//remove tabs from tabpanel
	elements.tabsFieldValues.removeAllTabs();
	
	//if the form currently exists, revert it
	var success = history.removeForm('svy_fieldvalues_main');
	if (success) {
	    solutionModel.revertForm('svy_fieldvalues_main');
	}
	
	//change the form
	var fvForm = solutionModel.getForm('svy_fieldvalues_main')
	
	//Gather fieldnames and create fields on form with labels
	if (scopes.svyFlexFields.gv_svy_fieldset_id) {
		//fvForm.newLabel(companyname,0,0,80,20)
		
		//gather fieldnames for selected fieldset and sort on sequence
		/** @type {JSFoundSet<db:/example_data/svy_fieldnames>} */
		var fieldNameFS = svy_fieldnames$gv_svy_fieldset_id;
		fieldNameFS.sort('sequence asc');
		
		//set element location variables
		var xPos = 0;
		var yPos = 0;
		var xMargin = 10;
		var yMargin = 5;
		
		for (var i = 1; i <= fieldNameFS.getSize(); i++) {
			var record = fieldNameFS.getRecord(i);
			//create label for field and update xPos
			fvForm.newLabel(record.name,xPos,yPos,80,20);
			xPos += (80 + xMargin);
			
			//create field
			/** @type {{fieldtype: Number, colName: String, height:Number, width:Number}} */
			var fieldSizeProperties = scopes.svyFlexFields.en_fieldtypes[record.fieldtype];
//			var variable = fvForm.newVariable('myVar' + i, JSVariable.TEXT);
//			variable.defaultValue = "This is a default value";
			var fvField = fvForm.newField(null, fieldSizeProperties.fieldtype, xPos, yPos, fieldSizeProperties.width, fieldSizeProperties.height);
			
			//create the relationship to connect to dataprovider
			var fvRelName = 'customers_' + record.svy_fieldname_id + '_fieldname';
			var fvRel = solutionModel.newRelation(fvRelName, 'db:/example_data/customers', 'db:/example_data/svy_fieldvalues', JSRelation.INNER_JOIN);
			fvRel.newRelationItem('customerid','=','customerid');
			var fvRelItemLiteral1 = fvRel.newRelationItem('1','=','svy_fieldname_id');
			fvRelItemLiteral1.primaryLiteral = record.svy_fieldname_id;
			
			//set the field's dataprovider
			fvField.dataProviderID = fvRelName + '.' + fieldSizeProperties.colName;
			
			//update yPos and reset xPos
			xPos = 0;
			yPos += (yMargin + fieldSizeProperties.height)
		}
	}
	forms.svy_fieldvalues_main.controller.recreateUI();
	
	//add the tab back to the tabpanel
	elements.tabsFieldValues.addTab(forms.svy_fieldvalues_main);
	
	
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

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EDFD5CB0-5E80-43EA-8967-CF92093601DC"}
 */
function onDataChange$gv_svy_fieldset_id(oldValue, newValue, event) {
	showFieldValuesForm();
	return true
}
