/**
 * @properties={typeid:24,uuid:"021D3A1F-BC48-4E92-BCC3-037837DDDF2D"}
 */
function getName() {
	return "Valuelist"
}

/**
 * @properties={typeid:24,uuid:"820B6284-A1DC-4813-95AE-EFDB35D85C70"}
 */
function getDescription() {
	return "Valuelist";
}

/**
 * @properties={typeid:24,uuid:"CC16BACF-AFE9-4D32-B26E-1587DEB01437"}
 */
function getParent() {
	return null;
}

/**
 * @properties={typeid:24,uuid:"9A3AFA3F-4A52-47DE-B3C1-F2D172E84531"}
 */
function getIconStyleClass() {
	return 'fa-gear';
}
/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3D32E66A-162D-4921-B3FE-DC2542FC4A27"}
 */
function onShow(firstShow, event) {
	_super.onShow(firstShow, event)
	 scopes.svyMicroSamples.showMedia([
	 {imageUrl:"valuelist_1.png"},
	 {imageUrl:"valuelist_2.png"},
	 {imageUrl:"valuelist_3.png"}
	 ]);
}
