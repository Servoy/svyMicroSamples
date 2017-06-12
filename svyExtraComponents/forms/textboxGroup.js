/**
 * @properties={typeid:24,uuid:"17876E87-5FFA-4055-B7C9-2261A6C32F27"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"F92F4690-F61C-42FB-A49C-FC78C9F6D0EE"}
 */
function getName() {
	return 'Textbox Group'
}

/**
 * @properties={typeid:24,uuid:"951113AE-479F-4701-ABBE-DEA0669A0028"}
 */
function getDescription() {
	return 'Textbox Group';
}

/**
 * @properties={typeid:24,uuid:"69ADC12D-B835-419C-B532-32730D8FAD93"}
 */
function getIconStyleClass() {
	return 'fa fa-keyboard-o';
}

/**
 * @properties={typeid:24,uuid:"AEC657D2-A4D2-4D7D-8781-53DA2098762B"}
 */
function getMoreInfo() {
	return 'The Textbox Group component allows the user to attach an icon to a input type text element.';
}

/**
 * @properties={typeid:24,uuid:"8952A70F-C469-4018-88FB-49E2E628FDD4"}
 */
function getWebSiteURL() {
	return 'https://github.com/Servoy/servoy-extra-components/tree/master/textfieldgroup';
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"61E25E92-1C7E-43EF-920F-45B4209ECE85"}
 */
function onShow(firstShow, event) {
	//elements.textfieldgroup_351
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"56ACAC79-D7A6-4C28-AC5A-D4036F65B903"}
 */
function onFocusGained(event) {
	elements.feedback.text = "Focus on!";
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"745509D3-6E00-4C68-9514-3FB0EE3C2918"}
 */
function onFocusLost(event) {
	elements.feedback.text = "Focus lost!";

}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5BC785A7-0E76-4EBC-9DFF-6E8EB7DBA8FE"}
 */
function onAction(event) {
	elements.textfieldgroup_351cc.requestFocus();
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AFA7856F-60E6-4ACC-ACC9-41D79FDB5E36"}
 */
function onAction1(event) {
	elements.textfieldgroup_351c.requestFocus();
}

/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"92F97A96-1215-4DE0-8CD9-4553E1BFAB85"}
 */
function onDataChange(oldValue, newValue, event) {
	elements.feedback.text = "Writing...";
	return false;
}
