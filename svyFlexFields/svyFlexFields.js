/**
 * @enum 
 * @properties={typeid:35,uuid:"92CC5082-F245-4A0D-8453-7D7A734BE973",variableType:-4}
 */
var en_fieldtypes = {
	TEXT: {fieldtype: JSField.TEXT_FIELD, colName: 'fld_text', height:20, width:230},
	DATE: {fieldtype: JSField.CALENDAR, colName: 'fld_date', height:20, width:230},
	NUMBER: {fieldtype: JSField.TEXT_FIELD, colName: 'fld_number', height:20, width:230},
	IMAGE: {fieldtype: JSField.IMAGE_MEDIA, colName: 'fld_image', height:120, width:230}
};

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BC3B6115-180F-400C-94AB-941041500986",variableType:4}
 */
var gv_svy_fieldset_id = null;

/**
 * @param {JSEvent} event
 * @param {Number} fieldSetId
 * @properties={typeid:24,uuid:"7E731AFD-E08F-4E7B-BAEF-9383DF25750E"}
 */
function addFieldsToForm(event, fieldSetId) {
	var formName = event.getFormName()
	var jsForm = solutionModel.getForm(formName)
	var foundsetFieldSets = datasources.db.example_data.svy_fieldsets.getFoundSet()

	var table = databaseManager.getTable(jsForm.dataSource)
	var pkColumn = table.getRowIdentifierColumnNames()[0] //for this sample we expect one PK on a table

	foundsetFieldSets.loadRecords(fieldSetId)
	var foundsetFieldNames = foundsetFieldSets.svy_fieldsets_to_svy_fieldnames
	var globalParentRecordIdName = 'flex' + pkColumn
	if (solutionModel.getGlobalVariable('svyFlexFields', globalParentRecordIdName)) {
		solutionModel.removeRelation(globalParentRecordIdName)
	}
	var globalParentRecordId = solutionModel.newGlobalVariable('svyFlexFields', globalParentRecordIdName, JSVariable.TEXT)
	globalParentRecordId.defaultValue = forms[formName][pkColumn]
	for (var i = 1; i <= foundsetFieldNames.getSize(); i++) {
		var recordFieldNames = foundsetFieldNames.getRecord(i);

		//set up the relation for the field
		var relationName = 'field_value' + formName + foundsetFieldNames.name

		if (solutionModel.getRelation(relationName)) {
			solutionModel.removeRelation(relationName)
		}

		var relation = solutionModel.newRelation(relationName, jsForm.dataSource, datasources.db.example_data.svy_fieldvalues.getDataSource(), JSRelation.INNER_JOIN)

		var globalsFieldNameId = solutionModel.newGlobalVariable('svyFlexFields', 'flexName' + recordFieldNames.svy_fieldname_id, JSVariable.TEXT)
		globalsFieldNameId.defaultValue = foundsetFieldNames.svy_fieldname_id
		relation.newRelationItem(globalParentRecordId.name, '=', 'parent_record_id')
		relation.newRelationItem(globalsFieldNameId.name, '=', 'svy_fieldname_id')

		var dataprovider = scopes[relation.name].fld_date

		if (recordFieldNames.fieldtype == 'TEXT') {
			dataprovider = scopes[relation.name].fld_text
		}

		switch (recordFieldNames.fieldtype) {
		case 'TEXT':
			dataprovider = scopes[relation.name].fld_text
			break;
		case 'NUMBER':
			dataprovider = scopes[relation.name].fld_text
			break;
		case 'DATE':
			dataprovider = scopes[relation.name].fld_date
			break;
		case 'MEDIA':
			dataprovider = scopes[relation.name].fld_image
			break;
		}

		createField(dataprovider, recordFieldNames.fieldtype, recordFieldNames.sequence)
	}

	function createField(dataProvider, type, pos) { }

}

