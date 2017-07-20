/**
 * @properties={typeid:24,uuid:"94134764-0E56-40D1-9E99-94A3CC48DD52"}
 */
function getParent() {
	return forms.containerSamples;
}

/**
 * @properties={typeid:24,uuid:"954D9BDF-A780-4DCA-B005-472F143B5F3E"}
 */
function getName() {
	return 'Tabless Panel'
}

/**
 * @properties={typeid:24,uuid:"22D3A421-4D5D-469A-A108-B22C6C99EEC9"}
 */
function getDescription() {
	return 'Tabless Panel';
}

/**
 * @properties={typeid:24,uuid:"E8C859EA-6C94-4099-AF84-60EC8C0E9FEC"}
 */
function getIconStyleClass() {
	return 'fa fa-file-o';
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"206FDA30-3909-4A7F-A865-B15D0D3A37D8"}
 */
function onActionButtonPrevious(event) {
	var tabIndex = forms.tablessPanel.elements.tab_tablessPanel_tab1.tabIndex;
	if (tabIndex > 1){
		forms.tablessPanel.elements.tab_tablessPanel_tab1.tabIndex = tabIndex - 1;
	}
	//application.output('tabIndex '+forms.tablessPanel.elements.tab_tablessPanel_tab1.tabIndex);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"5923FD73-5D08-43B9-9FD8-5CBCCA0703AF"}
 */
function onActionButtonNext(event) {
	var tabIndex = forms.tablessPanel.elements.tab_tablessPanel_tab1.tabIndex;
	if (tabIndex < 4){
		forms.tablessPanel.elements.tab_tablessPanel_tab1.tabIndex = tabIndex + 1;
	}
	//application.output('tabIndex '+forms.tablessPanel.elements.tab_tablessPanel_tab1.tabIndex);
}
