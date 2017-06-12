/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0B5E9D4F-E9E8-4158-B737-BBEC4C7D03E6"}
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
 * @properties={typeid:24,uuid:"4A37BA0C-AC6D-4ABF-99FD-446450C9485A"}
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
 * @properties={typeid:24,uuid:"B76E3823-705D-46AA-8819-3DD4C4EECCDA"}
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
 * @properties={typeid:24,uuid:"B834D72F-F866-42D6-A321-18B80B40F578"}
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
 * @properties={typeid:24,uuid:"DA047C4C-701A-471C-A182-ADE50D9F7F79"}
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
 * @properties={typeid:24,uuid:"F8B0DB5A-053B-492C-BD75-4A750074C4EC"}
 */
function onDataChangeInputValue(oldValue, newValue, event) {
	if(newValue)
		foundset.selectRecord(newValue)
		
	return true
}
