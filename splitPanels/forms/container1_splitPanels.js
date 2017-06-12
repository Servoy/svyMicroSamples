/**
 * @properties={typeid:24,uuid:"F51E3EB3-DF9E-4541-A871-844F52B57838"}
 */
function getName() {
	return 'Split Panels Containers'
}

/**
 * @properties={typeid:24,uuid:"1DCEE406-9150-407A-923E-335EC9AE6C08"}
 */
function getDescription() {
	return 'Split Panels Containers Demo';
}

/**
 * @properties={typeid:24,uuid:"29265C10-1B33-4D78-B060-863AFB840EB1"}
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
 * @properties={typeid:24,uuid:"0223229E-D8D9-4025-8D0E-4FCE17F348C2"}
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
 * @properties={typeid:24,uuid:"47D3B481-E0F2-4CE1-9E45-A12AD858FB13"}
 */
function onLoad(event) {
	var test = forms.container1_splitPanels.elements.split.getWidth();
	application.output("split1: " + test);
}

/**
 * Callback method when form is resized.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"87A9B11A-EDBC-419E-8546-420A275654FA"}
 */
function onResize(event) {
	elements.split.dividerLocation = elements.split.getHeight() / 2;
}
