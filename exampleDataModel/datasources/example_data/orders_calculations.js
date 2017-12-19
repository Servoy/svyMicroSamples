/**
 * @properties={type:12,typeid:36,uuid:"8D7A754C-F2C6-4DDB-8A2E-625B0DAD62E5"}
 */
function orderStatus() {
	// TODO use i18n or Enum
	var status = "New Order";
	if (requireddate) {
		if (shippeddate) {
			status = "Completed";
		} else {
			status = "Planned";
		}
	}
	return status;
}

/**
 * @properties={typeid:36,uuid:"BCD5FD4A-9054-4572-B0F0-61A62C0315CA"}
 */
function orderStatusStyleClass() {
	switch (orderStatus) {
	case "New Order":
		return "text-info";
		break;
	case "Completed": 
		return "text-success";
		break;
	case "Planned": 
		return "text-info";
		break;
	default:
		break;
	}
	return "text-info";
}

/**
 * @properties={type:12,typeid:36,uuid:"8D28CA37-8150-4AF6-8B6E-3A004F856C3B"}
 */
function displayAddress() {
	return [shipaddress,
	shipcity,
	shipcountry + ' ' + shippostalcode].join('\n');
}

/**
 * Returns the calculated total of the order all items + freight
 * @properties={type:8,typeid:36,uuid:"D4BA139C-3E72-48D1-BDD4-ADA10D44F3BE"}
 */
function order_total() {
	var total = 0;
	for (var i = 1; i <= orders_to_order_details.getSize(); i++) {
		var record = orders_to_order_details.getRecord(i);
		total += record.subtotal;
	}
	return total + freight;
}
