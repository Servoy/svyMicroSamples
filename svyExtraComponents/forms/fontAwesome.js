/**
 * @properties={typeid:24,uuid:"B4526769-2F1D-48A0-A110-5211F7F05282"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"3BA72923-260D-4A77-A41A-55FB9E4224A2"}
 */
function getName() {
	return 'Font Awesome'
}

/**
 * @properties={typeid:24,uuid:"18890C39-6057-47FD-8337-AFE4012944D9"}
 */
function getDescription() {
	return 'Font Awesome';
}

/**
 * @properties={typeid:24,uuid:"25206B10-10F5-4EE4-A44F-621AADCE1BC5"}
 */
function getIconStyleClass() {
	return 'fa fa-font-awesome';
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EF74E9B6-F988-4D67-AA69-53257E83617D"}
 */
function onShow(firstShow, event) {
	
}

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"804D44CF-0C6F-41A9-BF75-20A35CB5890A"}
 */
function onAction(event) {
	if (elements.text1.visible == true){
		elements.text1.visible = false;
	}
	else if (elements.text1.visible == false){
		elements.text1.visible = true;
	}

}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"592B3EF9-E5BC-4FF4-868D-C2D5D7FA207C"}
 */
function onShow1(firstShow, event) {
	elements.text1.visible = false;
}