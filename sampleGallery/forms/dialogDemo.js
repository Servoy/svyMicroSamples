
/**
 * Perform the element default action.
 * @private
 *
 * @properties={typeid:24,uuid:"AA443D48-D25B-4902-91D4-84E448BDD56D"}
 */
function showInfo() {
	plugins.dialogs.showInfoDialog('Welcome to Servoy','Hello World!');
}

/**
 * Perform the element default action.

 * @private
 * @override 
 * @return {Array<String>}
 * @properties={typeid:24,uuid:"FA88F057-2922-4C29-8784-F85FD2AAAD4E"}
 */
function getMoreInfo(){
	var content = [
		'# Dialogs Plugin',
		'-----',
		'We have the **BEST** dialogs',
		'* We can do **info**',
		'* We can do **warnings**',
		'* We can do **error**'
	];
//	scopes.svyMicroSamples.showInfo(content.join('\n\n'));
	return content;
}

/**
 * @properties={typeid:24,uuid:"01953027-817B-403D-98DA-F925F11F2A59"}
 */
function showCodeInfo(){
	var lines = forms.AbstractMicroSample.printMethodCode(showInfo);
	scopes.svyMicroSamples.showCode(lines);
}
/**
 * @properties={typeid:24,uuid:"AA4BA9A8-5AA3-4FE3-908A-45404BB123F2"}
 */
function showCodeError(){
	var lines = forms.AbstractMicroSample.printMethodCode(showError);
	scopes.svyMicroSamples.showCode(lines);
}
/**
 * @properties={typeid:24,uuid:"D8A12790-6EDD-4D19-AD3E-07330DCFD24E"}
 */
function showCodeWarning(){
	var lines = forms.AbstractMicroSample.printMethodCode(showWarning);
	scopes.svyMicroSamples.showCode(lines);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"342B1696-A98C-4944-8FB6-A4E46C982390"}
 */
function showWarning(event) {
	plugins.dialogs.showWarningDialog('Welcome to Servoy','Hello World!');
}

/**
 * @properties={typeid:24,uuid:"6C8A82E6-477A-47AE-B4EB-6F915E5F4FDA"}
 */
function showError(){
	plugins.dialogs.showErrorDialog('Welcome to Servoy','Hello World!');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C4699FBB-B031-4138-A3E7-09BC32EE064F"}
 */
function showMedia(event) {
	var images = [
		{imageUrl:'http://www.peckhamarchitecture.com/wp-content/uploads/2016/06/362088.png',caption:'Servoy Super Heroes'},
		{imageUrl:'https://s-media-cache-ak0.pinimg.com/736x/fd/3f/70/fd3f70302d028c2957b07dd223b2e3e7.jpg',caption:'Servoy Super Heroes'},
		{imageUrl:'http://www.nea.org/assets/img/pubToday/1105/superheroes1.png',caption:'Servoy Super Heroes'}
		
	];
	forms.content.showMedia(images);
}
