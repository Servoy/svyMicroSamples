/**
 * @public 
 * @param {String} content
 *
 * @properties={typeid:24,uuid:"8B749AF7-6B4D-4F4B-9F0A-A581624D8EDA"}
 */
function showInfo(content){
	forms.markdownContent.setContent(content);
	elements.tabs.tabIndex = 1;
}

/**
 * @public 
 * @param {Array<String>} codeLines
 *
 * @properties={typeid:24,uuid:"5B5185FA-BB65-40FF-8C5D-3D3587456F24"}
 */
function showCode(codeLines){
	forms.codeContent.setCode(codeLines);
	elements.tabs.tabIndex = 2;
}

/**
 * @public 
 * @param {Array<{imageUrl:String, caption:String}>} images
 *
 *
 * @properties={typeid:24,uuid:"1AE3FC55-B3BB-4CE7-9F2C-AE6F17DDC65D"}
 */
function showMedia(images){
	forms.mediaContent.setMedia(images)
	elements.tabs.tabIndex = 3;
}