/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"D524CEC7-31DD-4B05-BDD3-D91262650C47"}
 */
function getName() {
	return 'Test Sample child'
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"D87D5FA4-7E87-4B10-B94C-DC5B3010E0B1"}
*/
function getDescription() {
	return 'This is a test';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"1C5BAAEE-99A9-43E6-97CB-9D86092ACB65"}
*/
function getIconStyleClass() {
	return 'fa-user-circle'
}

/**
*
* @return {RuntimeForm<AbstractMicroSample>}
*
* @properties={typeid:24,uuid:"35E0B04D-DD52-482C-9058-AAC6B22B0F0D"}
*/
function getParent() {
	return forms.testSample;
}