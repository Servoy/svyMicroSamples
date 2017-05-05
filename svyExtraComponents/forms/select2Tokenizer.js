/**
 * @properties={typeid:24,uuid:"CF9C328B-AB11-4A2F-BB68-AD8EFD8886BF"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"7FFE8AA2-C3A2-4330-8234-7F51B5325A11"}
 */
function getName() {
	return 'Select2 Tokenizer'
}

/**
 * @properties={typeid:24,uuid:"D7C6DC43-0CD4-4338-9DBB-BF8867608C80"}
 */
function getDescription() {
	return 'Select2 Tokenizer';
}

/**
 * @properties={typeid:24,uuid:"927E7D97-533E-422E-96E9-78293BE046C6"}
 */
function getIconStyleClass() {
	return 'fa fa-list-alt';
	
	//elements.select2tokenizer_24
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7B82F640-3AEB-43AB-B2AE-ED0D79B72193"}
 */
function onFocusGained(event) {
	elements.feedback.text = "The focus is on!";
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"46C92228-B1DB-4012-A4A7-30173BF86812"}
 */
function onFocusLost(event) {
	elements.feedback.text = "The focus is lost!";

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"23EBEF26-6935-4B1E-8BD2-ABEBF4175DE8"}
 */
function onShow(firstShow, event) {
	elements.feedback.text = "";
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3D5CDD21-3A6E-4383-A349-6785C38D4BF0"}
 */
function onAction(event) {
	if (elements.select2tokenizer_24c.enabled == true){
		elements.select2tokenizer_24c.enabled =  false;
		elements.button1.text = "Enable";
	}
	else {
		elements.select2tokenizer_24c.enabled =  true;
		elements.button1.text = "Disable";
	}
	
}
