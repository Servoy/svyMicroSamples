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
 * @properties={typeid:24,uuid:"97CCF050-4089-4702-BABA-2B9082A35009"}
 */
function getMoreInfo() {
	return "<a href='https://wiki.servoy.com/display/public/DOCS/DB+Tree+View' target=_blank>Servoy Wiki Documentation</a>";
}

/**
 * @properties={typeid:24,uuid:"4D6951C8-2E41-4FEB-9CD8-7BB495ACEB7F"}
 */
function getWebSiteURL() {
	return 'https://github.com/Servoy/servoy-extra-components/tree/master/dbtreeview';
}

/**
 * @properties={typeid:24,uuid:"4978268A-D74C-434B-B2FB-5BEBB36FE75C"}
 */
function getSampleCode() {
	return printMethodCode(forms.dbTreeView.onShow)
		.concat(printMethodCode(forms.dbTreeView.callbackfunction));
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"4808E350-D0BB-4C4F-92A4-C7DEE2A5C2AC"}
 */
function onShow(event) {
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
	
	elements.dbtreeview.setCallBackInfo(databaseManager.getDataSource('example_data', 'orders'),callbackfunction,'orderid');
	
	return;
}

/**
 * @properties={typeid:24,uuid:"D427688B-986A-46DA-AC18-872F8DD79BD4"}
 */
function callbackfunction(orderid){	
	foundset.selectRecord(orderid);
	
	forms.dbTreevIewForm2.loadOrder(orderid);
	
	/*
	var products = datasources.db.example_data.order_details.createSelect();
	products.result.addPk();
	products.where.add(products.columns.orderid.eq(orderid));*/
	
	return;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"C327D034-7CA8-4111-ACDF-D106BE16448D"}
 */
function expandAll(event) {
	var roots = elements.dbtreeview.roots;
	//application.output("roots[0].length "+roots[0].length);
	//application.output("roots[1] "+roots[1]);
	for (var i = 0; i < roots[0].length; i++) {
		//elements.dbtreeview.setExpandNode(roots[i],true)();
	}
}

/**
 * @properties={typeid:24,uuid:"D2EEAE11-31F9-450B-BF7A-B2D9FC1FA85C"}
 */
function collapseAll(){
	/*var roots = elements.dbtreeview;
	for (var i = 0; i < roots.length; i++) {
		elements.dbtreeview.setExpandNode(roots[i], false);
	}*/
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
