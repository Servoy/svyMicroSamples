/**
 * @private 
 * @type {String}
 * @properties={typeid:35,uuid:"67CA9FA8-9340-44BA-854D-965503647BD8"}
 */
var title = 'Welcome to MicroSamples!'

/**
 * @private 
 * @properties={typeid:24,uuid:"64939378-3178-4066-8729-07A7425DC6A9"}
 */
function loadMenu(){
	
	var parents = scopes.svyMicroSamples.getParentForms();
	for(var i in parents){
		var parent = parents[i];
		parent.getName();
		var parentID = parent.controller.getName();
		elements.nav.addMenuItem({
			id: parentID, 
			text:parent.getName(), 
			iconStyleClass:'fa '+parent.getIconStyleClass()+' svy-sidenav-font-icon'
		});
		
		var children = scopes.svyMicroSamples.getChildren(parent);
		for(var i in children){
			var child = children[i];
			elements.nav.addMenuItem({
				id: child.controller.getName(), 
				text:child.getName(), 
				iconStyleClass:'fa '+child.getIconStyleClass()+' svy-sidenav-font-icon'
			}, parent.controller.getName());
		}
	}
	
}
/**
 *
 * @param {object} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D145E880-A184-47F5-8D59-2FBE7B1FDA48"}
 */
function onMenuItemSelected(menuItemId, event) {
	
	// clear tabs
	elements.tabs.removeAllTabs();
	
	// get selected item
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var form = forms[menuItemId];

	// add tab
	elements.tabs.addTab(form,form.getName(),form.getName(),form.getDescription());

	// set title
	title = form.getDescription();
	
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"63A2D10D-E05C-431D-B1A4-E5A190ED0B25"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		loadMenu();
	}
}
