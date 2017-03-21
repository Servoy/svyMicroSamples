/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0ACE684D-8B09-422E-9096-75FA85116E36",variableType:8}
 */
var xValue = 40;

/**
 * @properties={typeid:24,uuid:"FAC710FD-1DCB-4465-AFBE-756F270F2953"}
 */
function getName() {
	return "Hardcoded valuelist"
}

/**
 * @properties={typeid:24,uuid:"4C728EDB-420B-4BEB-9003-7CB612F11C06"}
 */
function getDescription() {
	return "Simple Hardcoded Valuelist, no code required";
}

/**
 * @properties={typeid:24,uuid:"43B20568-5B84-4C57-9F32-516369406BF3"}
 */
function getParent() {
	return forms.valuelistparent;
}

/**
 * @properties={typeid:24,uuid:"B398F9DA-10BD-49C9-9243-37D199B02831"}
 */
function getIconStyleClass() {
	return 'fa-gear';
}

/**
 * TODO generated, please specify type and doc for the params
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"81B55AA9-8B36-4D47-AD2B-FB9E19E1257E"}
 */
function onShow(firstShow, event) {
	 _super.onShow(firstShow, event)
	 scopes.svyMicroSamples.showMedia([
	 {imageUrl:"valuelist_1.png"},
	 {imageUrl:"valuelist_2.png"},
	 {imageUrl:"valuelist_3.png"}
	 ]);
}