/**
 * @properties={type:8,typeid:36,uuid:"4120E900-D472-4428-BC2F-F1E93831A05D"}
 */
function subtotal() {
	if (quantity && unitprice && discount) {
		var amt = quantity * unitprice * (1 - discount);
		return parseFloat(amt.toFixed(2));
	} else if (quantity && unitprice) {
		var amt = quantity * unitprice;
		return parseFloat(amt.toFixed(2));
	} else {
		return 0;
	}
}

/**
 * @properties={type:8,typeid:36,uuid:"A432FFB0-C602-4FA7-BC45-016ACFA79051"}
 */
function order_total() {
	
	if (utils.hasRecords(order_details_to_orders) ) {
		var orderRecord = order_details_to_orders.getSelectedRecord();
		var total = 0;
		for (var i = 1; i <= orderRecord.orders_to_order_details.getSize(); i++) {
			var record = orderRecord.orders_to_order_details.getRecord(i);
			total += record.subtotal;
		}
		return total + orderRecord.freight;
	} else {
		return 0;
	}
}
