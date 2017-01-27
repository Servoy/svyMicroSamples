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
	var jsFormOrg = solutionModel.getForm(formName)
	var foundsetFieldSets = datasources.db.example_data.svy_fieldsets.getFoundSet()
	solutionModel.revertForm('customfields')
	 var jsForm = solutionModel.getForm('customfields');
	

	var table = databaseManager.getTable(jsFormOrg.dataSource)
	var pkColumn = table.getRowIdentifierColumnNames()[0] //for this sample we expect one PK on a table

	foundsetFieldSets.loadRecords(fieldSetId)
	var foundsetFieldNames = foundsetFieldSets.svy_fieldsets_to_svy_fieldnames
	var globalParentRecordIdName = 'flex' + pkColumn
	if (solutionModel.getGlobalVariable('svyFlexFields', globalParentRecordIdName)) {
		solutionModel.removeGlobalVariable('svyFlexFields', globalParentRecordIdName)
	}
	var globalParentRecordId = solutionModel.newGlobalVariable('svyFlexFields', globalParentRecordIdName, JSVariable.TEXT)
	globalParentRecordId.defaultValue = '"'+forms[formName][pkColumn]+'"'
	for (var i = 1; i <= foundsetFieldNames.getSize(); i++) {
		var recordFieldNames = foundsetFieldNames.getRecord(i);

		//set up the relation for the field
		var relationName = 'field_value' + formName + recordFieldNames.name
application.output('relation '+relationName)
		if (solutionModel.getRelation(relationName)) {
			var relation = solutionModel.getRelation(relationName)
			
		}
		else
		{
			var relation = solutionModel.newRelation(relationName, jsFormOrg.dataSource, datasources.db.example_data.svy_fieldvalues.getDataSource(), JSRelation.INNER_JOIN)
			var globalsFieldNameIdName = 'flexName' + recordFieldNames.svy_fieldname_id
			if (solutionModel.getGlobalVariable('svyFlexFields', globalsFieldNameIdName)) {
				solutionModel.removeGlobalVariable('svyFlexFields', globalsFieldNameIdName)
			}
			var globalsFieldNameId = solutionModel.newGlobalVariable('svyFlexFields', globalsFieldNameIdName, JSVariable.TEXT)
			globalsFieldNameId.defaultValue = recordFieldNames.svy_fieldname_id
			relation.newRelationItem('scopes.svyFlexFields.'+globalParentRecordId.name, '=', 'parent_record_id')
			relation.newRelationItem('scopes.svyFlexFields.'+globalsFieldNameId.name, '=', 'svy_fieldname_id')
		}

	

		var dataprovider 


		switch (recordFieldNames.fieldtype) {
		case '2':
			dataprovider = relation.name+'.fld_text'
			break;
		case '3':
			dataprovider = relation.name+'.fld_text'
			break;
		case '1':
			dataprovider = relation.name+'.fld_date'
			break;
		case '4':
			dataprovider = relation.name+'.fld_image'
			break;
		}

		application.output('dataprovider '+dataprovider + ' seq '+ recordFieldNames.sequence)
		createField(dataprovider, recordFieldNames.fieldtype, recordFieldNames.sequence, recordFieldNames.label)
	}


	
	
	function createField(dataProvider, type, pos, labelText) {
	var column, row, label,textfield, media, date
	switch (type) {
		case '2':

	    //add row/column/label/number
	    row = jsForm.getLayoutContainer('container').newLayoutContainer(pos); 
	    row.tagType = 'row';
	    row.cssClasses = 'row';
	    row.name = 'row1';
	    row.packageName = '12grid';
	    
	    column = row.newLayoutContainer(1);
	    column.tagType = 'column';
	    column.cssClasses = 'col-md-6';
	    column.name = 'column1';
	    column.packageName = '12grid';
	    label = column.newWebComponent('lbl_text','bootstrapcomponents-label',1);
	    textfield = column.newWebComponent('textfield1','bootstrapcomponents-textbox',1);

	    label.setJSONProperty('text',labelText)
	    label.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    textfield.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    textfield.setJSONProperty('dataProvider', dataprovider);	
		break;

		case '3':

		
	    //add row/column/label/number
	    row = jsForm.getLayoutContainer('container').newLayoutContainer(pos); 
	    row.tagType = 'row';
	    row.cssClasses = 'row';
	    row.name = 'row2';
	    row.packageName = '12grid';
	    
	    column = row.newLayoutContainer(1);
	    column.tagType = 'column';
	    column.cssClasses = 'col-md-6';
	    column.name = 'column1';
	    column.packageName = '12grid';
	    label = column.newWebComponent('lbl_number','bootstrapcomponents-label',1);
	    textfield = column.newWebComponent('number','bootstrapcomponents-textbox',1);

	    label.setJSONProperty('text',labelText)
	    label.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    textfield.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    textfield.setJSONProperty('dataProvider', dataprovider);	
		break;

		case '1':


	    
	    //add row/column/label/date
	    row = jsForm.getLayoutContainer('container').newLayoutContainer(pos); 
	    row.tagType = 'row';
	    row.cssClasses = 'row';
	    row.name = 'row2';
	    row.packageName = '12grid';
	    
	    column = row.newLayoutContainer(1);
	    column.tagType = 'column';
	    column.cssClasses = 'col-md-6';
	    column.name = 'column1';
	    column.packageName = '12grid';
	    label = column.newWebComponent('lbl_number','bootstrapcomponents-label',1);
	    date = column.newWebComponent('textfield99','bootstrapcomponents-calendar',1);

	    label.setJSONProperty('text',labelText)
	    label.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    
	    date.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    date.setJSONProperty('dataProvider', dataprovider);	
		break;

		case '4':


	    //add row/column/label/media
	    row = jsForm.getLayoutContainer('container').newLayoutContainer(pos); 
	    row.tagType = 'row';
	    row.cssClasses = 'row';
	    row.name = 'row2';
	    row.packageName = '12grid';
	    
	    column = row.newLayoutContainer(1);
	    column.tagType = 'column';
	    column.cssClasses = 'col-md-6';
	    column.name = 'column1';
	    column.packageName = '12grid';
	    label = column.newWebComponent('lbl_number','bootstrapcomponents-label',1);
	    media = column.newWebComponent('textfield99','bootstrapcomponents-imagemedia',1);

	    label.setJSONProperty('text',labelText)
	    label.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    media.setJSONProperty('border', 'LineBorder,1,#ccffcc');
	    media.setJSONProperty('dataProvider', dataprovider);	

		break; 
		
		}	
	}
	
	
	
	forms['customfields'].controller.recreateUI()
	
	return  forms['customfields']
	

	
	

}

