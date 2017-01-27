
/**
 * @public 
 * @return {Array<RuntimeForm<AbstractMicroSample>>}
 * @properties={typeid:24,uuid:"06495180-369F-439E-8213-FC5B4C01373C"}
 */
function getParentForms() {
	
	// get all forms and filter out parents
	var parents = [];
	var samples = scopes.svyUI.getRuntimeFormInstances(forms.AbstractMicroSample)
	for(var i in samples){
		/** @type {RuntimeForm<AbstractMicroSample>} */
		var form = samples[i];
		if(!form.getParent()){
			parents.push(form); 
		}
	}
	
	// sort by name
	parents.sort(
		sortSamples
	);
	
	return parents;
}

/**
 * Gets all children of a parent form
 * @public 
 * @param {RuntimeForm<AbstractMicroSample>} parent
 * @return {Array<RuntimeForm<AbstractMicroSample>>}
 * @properties={typeid:24,uuid:"0EF9909A-5437-4453-80DC-765FE70F7634"}
 */
function getChildren(parent){
	
	// get all forms and filter out children
	var children = [];
	var samples = scopes.svyUI.getRuntimeFormInstances(forms.AbstractMicroSample)
	for(var i in samples){
		/** @type {RuntimeForm<AbstractMicroSample>} */
		var form = samples[i];
		if(form.getParent() === parent){
			children.push(form);
		}
	}
	
	// sort by name
	children.sort(sortSamples);
	return children;
}

/**
 * Sorts samples alphabetically (assuming same level)
 * @private 
 * @param {RuntimeForm<AbstractMicroSample>} form1
 * @param {RuntimeForm<AbstractMicroSample>} form2
 *
 * @properties={typeid:24,uuid:"A59D5FA2-2656-4BDB-913C-56CD8156F9E4"}
 */
function sortSamples(form1,form2){
	if(form1.getName() < form2.getName()){
		return -1
	}
	if(form1.getName() > form2.getName()){
		return 1
	}
	return 0;
}
