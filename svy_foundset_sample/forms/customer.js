/**
 * @public
 * @properties={typeid:24,uuid:"F32F0A3A-3E9E-4B17-B470-B6E430D2931B"}
 */
function deleteRecord() {
	//Deleting a record
	//GENERAL SQL Statements
	//DELETE FROM CUSTOMERS WHERE ID = ID; (of selected record)

	databaseManager.startTransaction(); // Start a database transaction.
	foundset.deleteRecord(); // Delete the currently selected record.

}

/**
 * @public
 * @properties={typeid:24,uuid:"96F8AF5D-1AD2-4AC4-A3DF-D17D2662EA7F"}
 */
function newRecord() {
	//Deleting a record
	//GENERAL SQL Statements
	//INSERT INTO CUSTOMERS VALUES (col1, col2, etc...);

	databaseManager.startTransaction(); // Start a database transaction.
	foundset.newRecord();
}

/**
 * @AllowToRunInFind
 * @param searchTerm
 *
 * @properties={typeid:24,uuid:"4CFDD002-F37F-492E-A366-802C0F4E38AF"}
 */
function searchRecords(searchTerm) {
	//Query for a record using Foundset.find Mode.
	//GENERAL SQL Statement
	//SELECT * FROM CUSTOMERS WERE contactname = '%searchterm%';

	foundset.find(); //enter find mode.
	foundset.contactname = '%' + searchTerm + '%'; //search using the contactname column for an item that matches.
	foundset.search() //execute search.
}
