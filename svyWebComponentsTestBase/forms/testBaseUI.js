/**
 * @param event
 *
 * @properties={typeid:24,uuid:"37406FBE-A597-49F3-B085-968A08BFD696"}
 */
function updateUI(event) {
	if (!elementHasProperty("enabled")) elements.btnEnabled.enabled = false;
	if (!elementHasProperty("readOnly")) elements.btnReadOnly.enabled = false;
	
	elements.btnFormEnabled.enabled = true;
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3CD903DC-B5FD-4F64-AFB4-DC8A20A680E7"}
 */
function onLoad(event) {
	_super.onLoad(event);
	elements.btn_shutdown.putClientProperty(APP_UI_PROPERTY.TRUST_DATA_AS_HTML,true);
}