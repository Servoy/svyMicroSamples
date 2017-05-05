/**
 * @properties={typeid:24,uuid:"D2C19BED-4795-47A3-84E9-770B6FD4DE34"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"7D6B0D89-46E2-4D97-B118-B883779EC885"}
 */
function getName() {
	return 'Table'
}

/**
 * @properties={typeid:24,uuid:"9C6BFA83-FC6D-421B-9458-1D49560EA33B"}
 */
function getDescription() {
	return 'Table';
}

/**
 * @properties={typeid:24,uuid:"3A140953-954C-41D2-96B0-C62BAF9E2970"}
 */
function getIconStyleClass() {
	return 'fa fa-table';
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FE5E08C7-444C-4A42-87F9-A24CC56446AA"}
 */
function removeColumn(event) {
	var columnsCount = elements.table_811.getColumnsCount();
	if (columnsCount == 0){
		//elements.table_811.newColumn(datasources.db.servoy_training.customers.getTable().getColumn('Name').getDataProviderID());
		elements.table_811.newColumn('address');
	}
	else {
		elements.table_811.removeColumn(columnsCount - 1);
	}
	
}
