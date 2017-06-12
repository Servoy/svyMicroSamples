/**
 * @properties={typeid:24,uuid:"EE509A2C-9297-4D9F-8A64-B6C224063FDE"}
 */
function getParent() {
	return forms.basicComponents;
}

/**
 * @properties={typeid:24,uuid:"2A4726C5-FBCF-4610-AECD-B38C9CF4B642"}
 */
function getName() {
	return 'Web Elements'
}

/**
 * @properties={typeid:24,uuid:"33675DCE-0338-4D22-B025-B2B9A9620C43"}
 */
function getDescription() {
	return 'Web Elements';
}

/**
 * @properties={typeid:24,uuid:"D176E75C-3D01-4B38-BD3C-4BD1A2E69FB3"}
 */
function getIconStyleClass() {
	return 'fa fa-file-text-o';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8BA74825-AFBD-4140-8B47-674B811AB1D0"}
 */
function onSubmit(event) {
	application.output('listBox: ' + scopes.svyWebElements.listBox);
	
	forms.tabPanelBase.elements.tabs.tabIndex=2;
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
 * @properties={typeid:24,uuid:"2411139D-536B-4029-AAE9-19644B731191"}
 */
function onComboBoxChange(oldValue, newValue, event) {
	application.output("newValue "+newValue);	
	foundset.selectRecord(newValue);
	return true;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0C1FFDC7-CBA7-41FB-BFBF-5D622FEF8BA1"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	controller.setSelectedIndex(3);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DEBCA677-06BD-4998-B713-FA0082C1C40E"}
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
 * @properties={typeid:24,uuid:"A83A5FAD-EC91-4D5A-98C2-D7EAF39C65BE"}
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
 * @properties={typeid:24,uuid:"7E2736F7-2311-4B6A-BDE1-F0EA3CD2F620"}
 */
function onDataChangeInputValue(oldValue, newValue, event) {
	if(newValue)
		foundset.selectRecord(newValue)
		
	return true
}
