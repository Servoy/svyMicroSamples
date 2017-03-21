/**
 * Perform the element default action.
 * @protected 
 *
 * @properties={typeid:24,uuid:"4AF4EA8E-8975-43D6-95A5-7AA2E96E0111"}
 */
function maximize() {
	forms.galleryMain.maximizeContent();


//	var win = application.createWindow(application.getUUID().toString(),JSWindow.DIALOG);
////	win.undecorated = true;
//	win.setSize(1000,800);
//	win.show(this);
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"7E2BC9BB-0B2A-4739-9416-8E5243F94E96"}
 */
function restore(){
	close();
}

/**
 * @properties={typeid:24,uuid:"A96C8979-0F8B-4864-BD40-07B6D4BE3B9B"}
 */
function close(){
	forms.galleryMain.minimizeContent();
}
