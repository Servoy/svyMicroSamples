/**
 * @private 
 * 
 * @properties={typeid:24,uuid:"DF139811-B9E7-4DB1-8644-0F945BBE2FB7"}
 */
function test_showSample__runWithWrongID__ExpectReturnFalse() {
	// Assign
	var wrongFormName = 'thisFormDoesNotExist'
	// Act
	var vResult = globals.showSample(wrongFormName);
	
	//Assert
	jsunit.assertFalse(vResult);
}

/**
 * @private 
 * 
 * @properties={typeid:24,uuid:"59C7BD96-5881-4AF9-A424-934085BDA80A"}
 */
function test_showSample__runWithCorrectID__ExpectReturnTrue() {
	// Assign
	var correctFormName = 'welcome'
	// Act
	var vResult = globals.showSample(correctFormName);
	
	//Assert
	jsunit.assertTrue(vResult);
}