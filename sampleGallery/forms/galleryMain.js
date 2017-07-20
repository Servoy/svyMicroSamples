/**
 * @private 
 * @type {String}
 * @properties={typeid:35,uuid:"4C94E620-F8D4-474F-83E3-59BC13F5DFB2"}
 */
var title = 'Welcome to MicroSamples!';

/**
 * @private 
 * @properties={typeid:35,uuid:"1B44FA52-FF45-4089-9C89-5F79AB82312F",variableType:-4}
 */
var suppressMenuEvent = false;

/**
 * @private 
 * @properties={typeid:24,uuid:"2BB0DE65-2A70-47AD-AA3E-5730F6083A0D"}
 */
function buildMenu(){
	
	elements.nav.clearMenuItems();
	var parents = scopes.svyMicroSamples.getParentForms();
	for(var i in parents){
		createMenuItem(parents[i]);
	}	
}

/**
 * @private 
 * @param {RuntimeForm<AbstractMicroSample>} item
 *
 * @properties={typeid:24,uuid:"99B290AF-3597-4D1D-B812-D334CF1B964C"}
 */
function createMenuItem(item){
	
	// add item
	var parent = item.getParent();
	var parentName = !parent ? null : parent.controller.getName();
	elements.nav.addMenuItem({
		id: item.controller.getName(), 
		text:item.getName(), 
		iconStyleClass:'fa '+item.getIconStyleClass()+' svy-sidenav-font-icon'
	}, parentName);
	
	// recursively add children
	var children = scopes.svyMicroSamples.getChildren(item);
	for(var i in children){
		var child = children[i];
		createMenuItem(child);
	}
}

/**
 *
 * @param {String} menuItemId
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"26BAA020-52A7-46ED-B0CC-F0A1E8FE04E3"}
 */
function onMenuItemSelected(menuItemId, event) {
	suppressMenuEvent = true;
	var ret = showSample(menuItemId);
	suppressMenuEvent = false;
	return ret;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"696B263B-32A1-4978-A630-785906095510"}
 */
function onShow(firstShow, event) {
	if(firstShow){
		buildMenu();
	}
	elements.tabs.dividerLocation = .99;
}

/**
 * @properties={typeid:24,uuid:"F5F20A0C-4458-4B94-B666-B453CA14C92D"}
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
 * @properties={typeid:24,uuid:"09880D3C-A938-42AF-A7CC-0BD1B6FBBB24"}
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
 * @properties={typeid:24,uuid:"AF953A2B-DEAC-4511-914A-A7F97396ADDB"}
 */
function showWebSite(){
	var sample = getActiveSample();
	if(!sample) return;
	var url = sample.getWebSiteURL()
	if(!url) return;
	
	application.showURL(url);
}

/**
 * @properties={typeid:24,uuid:"199B63E5-0FA2-4110-84BA-8060C9FAAC5D"}
 */
function download(){
	var sample = getActiveSample();
	if(!sample) return;
	var url = sample.getDownloadURL();
	if(!url) return;
	
	application.showURL(url);
}

/**
 * @properties={typeid:24,uuid:"D372854A-7FBC-4CAB-A810-3AE7891FBB92"}
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
 * @properties={typeid:24,uuid:"E127CE48-394A-4750-8E7A-FD8E08EB1EA0"}
 */
function minimizeContent(){
	elements.tabs.setRightForm(null);
	elements.tabs.dividerLocation = .99;
	application.closeAllWindows();
}

/**
 * @private 
 * @return {RuntimeForm<AbstractMicroSample>}
 * @properties={typeid:24,uuid:"AD40C270-1EB2-4D64-982D-50C3F0F40D8C"}
 */
function getActiveSample(){
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var sample = elements.tabs.getLeftForm();
	return sample;
}

/**
 * @public 
 * @param {String} id
 * @return {Boolean}
 * @properties={typeid:24,uuid:"179AA8C9-DC13-473D-9B09-BCD08BA34BE3"}
 */
function showSample(id) {
	
	// get selected item
	/** @type {RuntimeForm<AbstractMicroSample>} */
	var form = forms[id];
	if(!form){
		application.output("Sample form with id `"+id+"` not found",LOGGINGLEVEL.ERROR);
		return false;
	} else {
		application.output("Sample form with id `" +id+ "` selected", LOGGINGLEVEL.DEBUG);
	}
	
	if(!suppressMenuEvent) {
		if(scopes.svySystem.isNGClient()) {
			elements.nav.setSelectedMenuItem(id);
		}
	}
	
	// add tab
	elements.tabs.setLeftForm(form);
	elements.tabs.setRightForm(forms.content);
	elements.tabs.dividerLocation = .99;
//	elements.tabs.addTab(form,form.getName(),form.getName(),form.getDescription());

	// set title, only if method is there
	if(form.getDescription) {
		title = form.getDescription();
	} else {
		application.output("Can't set title, method `getDescription` is missing on form `" + id + '`', LOGGINGLEVEL.INFO);
		title = '';
	}
	return true;
}
