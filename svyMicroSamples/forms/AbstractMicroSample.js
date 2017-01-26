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