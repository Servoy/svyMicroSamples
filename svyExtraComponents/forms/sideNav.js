/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"013E5743-75A0-4680-BF37-149451C32094"}
 */
var selectedIconClass = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"141EC128-D88E-487F-A49E-15C3DA6B3222"}
 */
var newMenuItem = null;

/**
 * @properties={typeid:24,uuid:"FB4188F4-6CDE-4F71-A7C5-62B340B30AF6"}
 */
function getParent() {
	return forms.svyExtraComponentsMain;
}

/**
 * @properties={typeid:24,uuid:"75755C40-A950-4919-B7CB-CC90ED1E7DE7"}
 */
function getName() {
	return 'Side Nav'
}

/**
 * @properties={typeid:24,uuid:"D39F1B5E-FFA7-4F2A-A71A-1BA041A0EA5C"}
 */
function getDescription() {
	return 'Side Nav';
}

/**
 * @properties={typeid:24,uuid:"4EF8E4F3-EA71-406C-8BB3-29EC681DB1D5"}
 */
function getIconStyleClass() {
	return 'fa fa-bars';
}

/**
 * @properties={typeid:24,uuid:"BB05152A-EA54-4D36-AF52-BFBDAB15372D"}
 */
function getSampleCode() {
	return printMethodCode(forms.sideNav.initNav)
	.concat(printMethodCode(forms.sideNav.createMenuItem))
	.concat(printMethodCode(forms.sideNav.onMenuItemSelected))
	.concat(printMethodCode(forms.sideNav.submenuActions))
}

/**
 * @properties={typeid:24,uuid:"73C1CD30-F22A-46C2-856F-BD3C0B817A32"}
 */
function getWebSiteURL() {
	return 'https://github.com/Servoy/example-solutions/tree/master/sideNavExample'
}

/**
 * @properties={typeid:24,uuid:"893A2D35-A00A-4EF2-AB9A-55D726D20FE5"}
 */
function initNav(){
	
	
	/** @type {Array<servoyextra-sidenav.MenuItem>} */
	var items = [
		{
			id: 'home', 
			text:'Home', 
			iconStyleClass:'fa fa-home svy-sidenav-font-icon',
			data:{formName:'home'}
		},
		
		{divider:true, styleClass:'svy-sidenav-divider'},
		
		{
			id: 'customers', 
			text:'Customers', 
			iconStyleClass:'fa fa-users svy-sidenav-font-icon',
			data:{formName:'customers'}
		},
		{
			id: 'orders', 
			text:'Orders', 
			iconStyleClass:'fa fa-credit-card svy-sidenav-font-icon',
			data:{formName:'orders'}
		},
		{
			id: 'employees', 
			text:'Employees', 
			iconStyleClass:'fa fa-user svy-sidenav-font-icon',
			data:{formName:'employees'},
			menuItems: [{
				id: 'suppliers', 
				text:'Suppliers', 
				iconStyleClass:'fa fa-truck svy-sidenav-font-icon',
				data:{formName:'suppliers'}
			},
			{
				id: 'shippers', 
				text:'Shippers', 
				iconStyleClass:'fa fa-plane svy-sidenav-font-icon',
				data:{}
			}]
			  
		},
		
		{divider:true, styleClass:'svy-sidenav-divider'}
	];
	
	elements.sidenav.setRootMenuItems(items);
	
	elements.sidenav.setMenuItemExpanded('employees', false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"F856C02A-56A7-4A36-B87F-67F39CB7995B"}
 */
function createMenuItem(event) {

	if ( (newMenuItem == null) || (newMenuItem.length < 2) ){
		elements.warningLabel.visible = true;
		elements.warningLabel2.visible = false;
	}
	else if (selectedIconClass == null){
		elements.warningLabel2.visible = true;
		elements.warningLabel.visible = false;
	}
	else {
		application.output('selectedIconClass'+selectedIconClass);
		var menuItem = {
			  id: newMenuItem,
			  text: newMenuItem,
			  iconStyleClass: 'fa ' + selectedIconClass + ' svy-sidenav-font-icon'
			  };
			 
		elements.sidenav.addMenuItem(menuItem);
		newMenuItem =  null;
		elements.warningLabel.visible = false;
		elements.warningLabel2.visible = false;
	}

}

/**
 * @param {JSEvent} event
 *
 * @public
 *
 * @properties={typeid:24,uuid:"26270490-3A87-4944-A244-B7A5F8E2DD97"}
 */
function onMenuItemSelected(event, menuItem) {
	selectedIconClass = menuItem.itemId;
	elements.dropdown_727.text = menuItem.text;	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"B349CC4B-C846-4667-A131-74759905B561"}
 */
function submenuActions(event) {
	if (!elements.sidenav.isMenuItemExpanded('employees')){
		elements.sidenav.setMenuItemExpanded('employees', true);
		elements.submenuExpanded.text = 'Close Employees Submenu';
	}
	else {
		elements.sidenav.setMenuItemExpanded('employees', false);
		elements.submenuExpanded.text = 'Open Employees Submenu';
	}
}
