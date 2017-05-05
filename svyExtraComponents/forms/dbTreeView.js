/**
 * @properties={typeid:24,uuid:"4FB4CC43-5294-4093-87B6-FAC9AA2559EC"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"573EBC8A-FE48-498D-B132-1DF0833D5389"}
 */
function getName() {
	return 'DBTreeView'
}

/**
 * @properties={typeid:24,uuid:"C369CA91-AA2D-47F8-82CE-B4D990E6C80E"}
 */
function getDescription() {
	return 'DBTreeView';
}

/**
 * @properties={typeid:24,uuid:"8DF20318-91EF-4BBF-A1FA-E3C85B91C8DA"}
 */
function getIconStyleClass() {
	return 'fa fa-tree';
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"4808E350-D0BB-4C4F-92A4-C7DEE2A5C2AC"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
	elements.dbtreeview.bindings = [{
		datasource: databaseManager.getDataSource('example_data', 'customers'),
		nrelationname : 'customers_to_orders',
		textdataprovider: "customerid"
	},{
		datasource: databaseManager.getDataSource('example_data', 'orders'),
		textdataprovider: "orderid"
		
	}];
	elements.dbtreeview.addRoots(foundset);
	elements.dbtreeview.refresh();
	
	return;
}

/**
 *
 * @param {string} dataproviderName
 * @param {true} grouping
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"205710EE-31C2-4F02-9905-D297B524FBB6"}
 */
function onGroupChanged(dataproviderName, grouping) {
	
//	foundset.sort(dataproviderName);
	return;
	
	if (grouping) {
		var fs = foundset.duplicateFoundSet();
		//fs.sort(dataproviderName + ' asc');
		//fs.loadRecords();
		
		//if(fs.find()) {
			// fs[dataproviderName]
		//}
		
		// TODO handle relation
		var query = foundset.getQuery();
		var column = query.getColumn(dataproviderName);
		query.where.remove("grouping");
		
		// sorted by the given column
		query.result.clear();
		query.result.distinct = true
		query.result.add(column);
		query.sort.clear();
		query.sort.add(column);
		application.output(databaseManager.getSQL(query));
		
		// TODO how does it load the next chunk ?
		var ds = databaseManager.getDataSetByQuery(query,10);
		var pks = ds.getColumnAsArray(1);
		
		var fsQuery = foundset.getQuery();
		fsQuery.where.remove("grouping");
		fsQuery.where.add("grouping", column.isin(pks));
		// has to reduce the query.
		
		foundset.loadRecords(fsQuery);
		
	}
}

/**
 *
 * @param {string} dataproviderName
 * @param {string} value
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5991F762-F341-4D9C-8C0B-F34B12FABDC8"}
 */
function onNodeExpanded(dataproviderName, value) {

}
