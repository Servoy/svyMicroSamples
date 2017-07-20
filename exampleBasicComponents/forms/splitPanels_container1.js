/**
 * @properties={typeid:24,uuid:"252DD553-68C7-410B-BE8E-2FF9A223BE12"}
 */
function getParent() {
	return forms.containerSamples;
}

/**
 * @properties={typeid:24,uuid:"14D345EF-1CB0-40F9-8915-1A8E581E1EEF"}
 */
function getName() {
	return 'Split Panels Containers'
}

/**
 * @properties={typeid:24,uuid:"CA6F6E74-CE88-4912-84B5-A14E35EE3EB9"}
 */
function getDescription() {
	return 'Split Panels Containers';
}

/**
 * @properties={typeid:24,uuid:"F5914AB2-C94B-47E8-ACFE-28B4BB0C2D8F"}
 */
function getIconStyleClass() {
	return 'fa fa-columns';
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FC17C3A0-114C-4EDC-B9E5-CB37C93C6903"}
 */
function onShow(firstShow, event) {
	elements.split.dividerLocation = 100;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3E804D6E-D342-45C2-B449-25BFA32FF3BE"}
 */
function onLoad(event) {
	//var test = forms.container1_splitPanels.elements.split.getWidth();
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"33BFB8ED-1068-473C-92E9-8E2BE97D15CC"}
 */
function onResize(event) {
	elements.split.dividerLocation = elements.split.getHeight() / 2;
}
