/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8F7A0EC6-7CB9-44E0-8DCC-5B7B113FECFD"}
 */
function onAdd(event) {
	forms.customer.newRecord();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3F2C86EF-A488-4530-90D3-308EA40C6798"}
 */
function onDelete(event) {
	forms.customer.deleteRecord();
}