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
//	elements.tabs.removeAllTabs();
	
	// get selected item
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var form = forms[menuItemId];

	// add tab
	elements.tabs.setLeftForm(form);
	elements.tabs.setRightForm(forms.content);
	elements.tabs.dividerLocation = .99;
//	elements.tabs.addTab(form,form.getName(),form.getName(),form.getDescription());

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


/**
 * @properties={typeid:24,uuid:"067E4CCA-0D0C-43E4-BC4E-6A459B30C5D5"}
 */
function showInfo(){

	var sample = getActiveSample();
	if(!sample) return;
	var info = sample.getMoreInfo();
	if(!info) return;
	forms.markdownContent.setContent(info);
	elements.tabs.setRightForm(forms.markdownContent);
	elements.tabs.dividerLocation = .5;
}

/**
 * @properties={typeid:24,uuid:"F2098145-23B6-4C08-8FBC-BCFC2823829B"}
 */
function showCode(){
	
	elements.tabs.dividerLocation = .99;
	
	var sample = getActiveSample();
	if(!sample) return;
	var code = sample.getSampleCode();
	if(!code || !code.length)return;
	
	forms.codeContent.setCode(code);
	elements.tabs.setRightForm(forms.codeContent);
	elements.tabs.dividerLocation = .5;
}

/**
 * @properties={typeid:24,uuid:"B3EBAD0B-D8A0-4C8B-8C3F-81902A9B71F8"}
 */
function showWebSite(){
	var sample = getActiveSample();
	if(!sample) return;
	var url = sample.getWebSiteURL()
	if(!url) return;
	
	application.showURL(url);
}

/**
 * @properties={typeid:24,uuid:"B6C93985-9D0C-4777-A406-FB993D0602D6"}
 */
function download(){
	var sample = getActiveSample();
	if(!sample) return;
	var url = sample.getDownloadURL();
	if(!url) return;
	
	application.showURL(url);
}

/**
 * @properties={typeid:24,uuid:"5BF89434-1E75-44B1-B1C1-CABD5393BFBB"}
 */
function maximizeContent(){
	var form = elements.tabs.getRightForm();
	elements.tabs.setRightForm(null);
	elements.tabs.dividerLocation = .99;

	var win = application.createWindow(application.getUUID().toString(),JSWindow.MODAL_DIALOG);
	win.resizable = true;
	var w = application.getScreenWidth() - 100;
	var h = application.getScreenHeight() - 100;
	win.setSize(w,h);
	win.undecorated = false;
	win.show(form);
}

/**
 * @properties={typeid:24,uuid:"433B8501-8870-4636-BC48-9122B52D7789"}
 */
function minimizeContent(){
	elements.tabs.setRightForm(null);
	elements.tabs.dividerLocation = .99;
	application.closeAllWindows();
}

/**
 * @private 
 * @return {RuntimeForm<AbstractMicroSample>}
 * @properties={typeid:24,uuid:"BF8EDA3A-C500-4E35-9DA8-C17852385BE6"}
 */
function getActiveSample(){
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var sample = elements.tabs.getLeftForm();
	return sample;
}