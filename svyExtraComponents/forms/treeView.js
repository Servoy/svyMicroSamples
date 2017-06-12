/**
 * @properties={typeid:24,uuid:"52EFD779-1091-48F8-89E3-3749E55ABA65"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"78C4D5CA-087C-483C-A6F1-510BE03809D3"}
 */
function getName() {
	return 'TreeView'
}

/**
 * @properties={typeid:24,uuid:"E075DFB5-478C-4334-8ECD-7BA2315355C7"}
 */
function getDescription() {
	return 'TreeView';
}

/**
 * @properties={typeid:24,uuid:"3B488C54-A0D9-48CC-BA24-8B2F0B7EF804"}
 */
function getIconStyleClass() {
	return 'fa fa-tree';
}



/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4A6CDD00-14CB-4F75-8630-FD34A113F63E"}
 */
var foo = 'Foobar!';

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0D0E96AF-1ED5-4E05-B594-962273C2B507"}
 */
function loadTree(event) {
	
	var categoryImage = "media:///labels.png";
	var productImage = "media:///food.png";
	
	//	create the data set for the tree
	var ds = databaseManager.createEmptyDataSet(0,['id','pid','icon','treeColumn']);
	
	//	load all product categories
	var categories = datasources.db.example_data.categories.getFoundSet();
	categories.sort('categoryname asc',true);
	categories.loadAllRecords();
	
	for (var i = 1; i <= categories.getSize(); i++) {
		var category = categories.getRecord(i);
		ds.addRow([category.categoryid, null, categoryImage, category.categoryname]);
		var products = category.categories_to_products;
		for (var j = 1; j <= products.getSize(); j++) {
			var product = products.getRecord(j);
			ds.addRow([product.categoryid, category.categoryid, productImage, product.productname]);
		}
	}
	
	
	elements.tree.jsDataSet = ds;
//	elements.tree.setDataSet(ds);
}

/**
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"48B9A02E-7FA9-4DC5-A3A5-34D3771C392B"}
 */
function expandAll(event) {
	var roots = elements.tree.getRootNodes();
	for (var i = 0; i < roots.length; i++) {
		elements.tree.expandNode(roots[i]);
	}
}

/**
 * @properties={typeid:24,uuid:"6C2A6EA6-7EBB-48B7-AC03-BA3E012367B5"}
 */
function collapseAll(){
	var roots = elements.tree.getRootNodes();
	for (var i = 0; i < roots.length; i++) {
		elements.tree.collapseNode(roots[i]);
	}
}


/**

 * @private
 *
 * @properties={typeid:24,uuid:"BDD03677-D70D-4BC3-A645-FDC5B606CD8D"}
 */
function onNodeClicked() {
	//application.output('xxx '+ elements.tree.getSeletedNode());
}
