
/**
 * @type {plugins.ClientManager.BroadCaster}
 * 
 * @private
 * 
 * @properties={typeid:35,uuid:"7C4B63C4-F18C-4BAA-8C21-B0AB4EF6B051",variableType:-4}
 */
var broadcasterTyping = null;

/**
 * @type {plugins.ClientManager.BroadCaster}
 * 
 * @private
 * 
 * @properties={typeid:35,uuid:"54C77905-1298-45C8-AD08-8C44BE7F1489",variableType:-4}
 */
var broadcasterMessage = null;

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6DE644F9-9882-4AC5-B41E-11F06599ABA8"}
 */
function onLoad(event) {
	if (application.getApplicationType() != APPLICATION_TYPES.NG_CLIENT) {
		return;
	}
	
	broadcasterTyping = plugins.ClientManager.getBroadCaster('servoy', '1', showTyping);
	broadcasterMessage = plugins.ClientManager.getBroadCaster('servoy', '2', showReceivedMessage);
}

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
	var content = elements.chat.getContent();
	
	application.output(content);
	
	return;
	
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
 * @properties={typeid:24,uuid:"C22F0827-B129-47E2-8733-F5E77A1B41A2"}
 */
function getName() {
	return 'Chat';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"096EC1CA-7CB5-418C-8579-96CBCAEA4D3B"}
*/
function getDescription() {
	return 'Chat here!';
}

/**
*
* @return {String}
*
* @properties={typeid:24,uuid:"1BE5CCCF-9C37-4087-B28C-C28058D8E3F7"}
*/
function getIconStyleClass() {
	return 'fa-weixin';
}

/**
 * @private
 *
 * @properties={typeid:24,uuid:"33FA8962-5065-4298-80A5-4DC92C4766CD"}
 */
function onTypingMessage() {
	broadcasterTyping.broadcastMessage('');

}

/**
 * @param {String} message
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3A66A19C-7358-4051-BFC6-50FC98EFEDDA"}
 */
function onSendingMessage(message) {
	broadcasterMessage.broadcastMessage(message);
	
	var lines = forms.AbstractMicroSample.printMethodCode(onSendingMessage);
	forms.content.showCode(lines);
}

/**
 * @param {String} name
 * @param {String} channel
 * @param {String} message
 * 
 * @private
 * 
 * @properties={typeid:24,uuid:"EDEB22EB-E874-43C3-9F66-EC4FECB0BF68"}
 */
function showReceivedMessage(name, channel, message) {
	elements.chat.showReceivedMessage(message);
}

/**
 * @param {String} name
 * @param {String} channel
 * @param {String} message
 * 
 * @private
 * 
 * @properties={typeid:24,uuid:"AA0E19C2-1049-48FC-A6B3-B25D74D9E29A"}
 */
function showTyping(name, channel, message) {
	if (message == '1') {
		elements.chat.showTyping();
	} else {
		elements.chat.hideTyping();
	}
}
