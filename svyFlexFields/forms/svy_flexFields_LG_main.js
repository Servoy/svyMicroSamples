
/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"D03840EC-86E3-4711-AD01-C4DA32BCAA11"}
 */
function getName() {
	return "Non-Responsive";
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"40BD96E8-2361-4DAE-8C97-68336ED22FD4"}
*/
function getDescription() {
	return "Admin can create sets of fields.  Each Customer record has data for all sets.";
	/** When the number of arguments that ought to be send into the _super call are known,
	 the _super call can also be made like this: _super.getDescription(arg1,arg2)*/
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"07245EC9-0A32-4138-832E-A0654A9272EA"}
*/
function getParent() {
	return forms.svy_flexFields_main;
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"BE721D40-087D-46AF-9D41-5B614C4C9644"}
*/
function getIconStyleClass() {
	return "fa-square-o";
	/** When the number of arguments that ought to be send into the _super call are known,
	 the _super call can also be made like this: _super.getIconStyleClass(arg1,arg2)*/
}
