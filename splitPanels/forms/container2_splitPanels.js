
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1EC75351-3CC1-42A8-B13C-F76A3E10FEB2"}
 */
function onShow(firstShow, event) {
	//elements.split.dividerLocation = elements.split.getWidth() / 2;
	//application.output("result 2: " + elements.split.getWidth() / 2);
	application.output("form 2 " + controller.getFormWidth());
	elements.split.dividerSize = 1
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"79051622-559E-4669-A942-E15D58892939"}
 */
function onResize(event) {
	elements.split.dividerLocation = elements.split.getWidth() * 3/4;
}
