
/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"F419E679-FD6C-4397-866D-412FBA8DF701"}
 */
function getDescription() {
	return 'Custom fields responsive';
	/** When the number of arguments that ought to be send into the _super call are known,
	 the _super call can also be made like this: _super.getDescription(arg1,arg2)*/
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"31736A5F-0EC9-4570-A383-E91D112EDD21"}
*/
function getIconStyleClass() {
	return 'fa-arrows-h';
	/** When the number of arguments that ought to be send into the _super call are known,
	 the _super call can also be made like this: _super.getIconStyleClass(arg1,arg2)*/
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"565C9E65-0A7D-465C-906A-B82A6BE60771"}
*/
function getName() {
	return 'Responsive';
	/** When the number of arguments that ought to be send into the _super call are known,
	 the _super call can also be made like this: _super.getName(arg1,arg2)*/
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9BB408FD-2E57-4777-8E28-A6E06985EC1C"}
 */
function nextRecord(event) {
	forms.customers.controller.setSelectedIndex(forms.customers.controller.getSelectedIndex()+1)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"829A23FC-BC6B-4FF7-84D1-FE9496B76036"}
 */
function prevRecord(event) {
	forms.customers.controller.setSelectedIndex(forms.customers.controller.getSelectedIndex()-1)
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"357F7F61-780C-4486-AE48-9A3B11EF6F06"}
*/
function getParent() {
	return forms.svy_flexFields_main
}
