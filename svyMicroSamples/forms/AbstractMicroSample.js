/**
 * Show the display name of the sample for navigation 
 * @public 
 * @return {String}
 * @properties={typeid:24,uuid:"EB63D830-02F7-4CE4-BC4F-96E36F200217"}
 */
function getName(){
	throw 'Method must be implemented'
}

/**
 * Show the description, i.e. tooltip
 * 
 * @public 
 * @return {String}
 * @properties={typeid:24,uuid:"64E4FDEA-B37D-403E-81D6-54E4E62961A4"}
 */
function getDescription(){
	throw 'Method must be implemented'
}

/**
 * Gets the parent form for hierarchy
 * @public 
 * @return {RuntimeForm<AbstractMicroSample>}
 * @properties={typeid:24,uuid:"4F502D68-AD7C-46FE-90E6-4364A13E857E"}
 */
function getParent(){
	return null;
}

/**
 * Gets an optional icon style class for menu navigation
 * @public 
 * @return {String}
 * @properties={typeid:24,uuid:"03913234-F650-4704-B138-4C8EA9BE27C2"}
 */
function getIconStyleClass(){
	return null;
}

/**
 * @protected 
 * @param {String} content 
 * @properties={typeid:24,uuid:"C60F058E-C986-4BC6-82A4-42531234E698"}
 */
function showBodyContent(content){
	
}

/**
 * @protected 
 * @param {Array<Array<byte>>} media
 * @properties={typeid:24,uuid:"52AC4BAE-F629-487C-9EE3-22F416E157ED"}
 */
function showMedia(media){
	
}

/**
 * Return the lines of code
 * @protected 
 * @param {Array<String>} code
 * @properties={typeid:24,uuid:"8E9F08C7-15E5-420C-98B9-D276F9EE8F29"}
 */
function showCode(code){
	
}