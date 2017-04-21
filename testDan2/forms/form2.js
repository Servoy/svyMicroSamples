/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"04DFEE55-C7A0-4743-90C4-9470DE71C5D3",variableType:4}
 */
var demoIndex = null;

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"854C34F8-E9E1-4A06-B401-2DE5EE3936BF"}
 */
function onAction(event) {
	forms.tabPanelBase.elements.tabs.tabIndex=1;
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"62D97605-2CAF-4632-A422-9F40AC7B1845"}
 */
function onComboBoxChange(oldValue, newValue, event) {
	application.output("newValue "+newValue);
	
	foundset.selectRecord(newValue);
	
	//application.output("foundset.getSelectedIndex() "+foundset.getSelectedIndex());
	
	
	
	/*var initialIndex = controller.getSelectedIndex();
	application.output("initialIndex "+initialIndex);
	
	application.output("newIndex "+newValue);*/
	//controller.setSelectedIndex(newValue);
	
	
	return true;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"221F125A-46DF-4D79-B531-A2E4A4641DB6"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	//application.output("hello");
	controller.setSelectedIndex(3);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B9225405-E150-4BD6-A565-69C229059CD4"}
 */
function onActionNext(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() + 1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"874CDE4B-1C83-4215-8F78-BE64929D05C9"}
 */
function onActionPrev(event) {
	foundset.setSelectedIndex(foundset.getSelectedIndex() - 1)
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7707D53C-D745-43BC-AE98-9F27B53FB3A9"}
 */
function onDataChangeInputValue(oldValue, newValue, event) {
	if(newValue)
		foundset.selectRecord(newValue)
		
	return true
}
