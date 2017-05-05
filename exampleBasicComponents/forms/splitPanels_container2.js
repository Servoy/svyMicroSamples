/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"294A1B75-F6A6-4C13-BA40-C290A0CC0285"}
 */
function onShow(firstShow, event) {
	//elements.split.dividerLocation = elements.split.getWidth() / 2;
	//application.output("result 2: " + elements.split.getWidth() / 2);
	elements.split.dividerSize = 1
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"29ACA059-5D26-44AD-BB57-1C9E30266E18"}
 */
function onResize(event) {
	elements.split.dividerLocation = elements.split.getWidth() * 3/4;
}
