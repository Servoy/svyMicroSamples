
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A963F1E5-8AAB-463A-BF04-B37705DE1EDD"}
 */
function onAction$addFieldSet(event) {
	foundset.newRecord(true,true);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"12A85A21-6EDF-408B-AD2F-859C63753451"}
 */
function onAction$deleteFieldSet(event) {
	foundset.deleteRecord();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"9176139B-F506-4153-A0B7-2FC011E4026A"}
 */
function onAction$addFieldSetFieldName(event) {
	//get next sequence
	var nextSeq = (svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.getSize() > 0 ? svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.max_sequence : 0 ) + 1;
	//create new record
	var record = foundset.getRecord(foundset.getSelectedIndex());
	var fieldNameRec = record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.getRecord(record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.newRecord(false,true));
	databaseManager.saveData(fieldNameRec);	
	fieldNameRec.sequence = nextSeq;
	databaseManager.saveData(fieldNameRec);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E7DFB654-9A54-4BDA-B8C5-29E93D42D300"}
 */
function onAction$deleteFieldSetFieldName(event) {
	//get current selected fieldNameRec
	var record = foundset.getRecord(foundset.getSelectedIndex());
	if (record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.deleteRecord(record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.getSelectedIndex())) {
		record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.sort('sequence asc');
		for (var i = 1; i <= record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.getSize(); i++) {
			var fieldNameRec = record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id.getRecord(i);
			fieldNameRec.sequence = i;			
		}
		databaseManager.saveData(record.svy_fieldsets_to_svy_fieldnames$svy_fieldset_id);
	}

}
