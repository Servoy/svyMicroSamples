
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"220DC872-5493-49D1-ACFD-618EA5395460"}
 */
function onEmailChatAction(event) {
	var msgText = 'Chat History<html>This is your chat history<img src=""></html>';
	
	var success = plugins.mail.sendMail('mnaeimi@servoy.com', 'sales@servoy.com', 'Chat History', msgText);
	if (success){
		// success message
	}else{
		// failed message
	}
}


/**
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"67892011-89C6-46AF-BDF8-819EEC2D83AD"}
 */
function getName() {
	return 'Chat';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"D6CF8752-F74E-4D6B-9FAB-60C4DF6164FB"}
*/
function getDescription() {
	return 'Chat here!';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"3F8BA430-1E34-4E15-B6FD-80865D1B0672"}
*/
function getIconStyleClass() {
	return 'fa-home'
}