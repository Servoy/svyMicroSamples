
/**
 * @type {plugins.ClientManager.BroadCaster}
 * 
 * @private
 * 
 * @properties={typeid:35,uuid:"95EBCCBD-8438-4B1F-A483-5C4730657041",variableType:-4}
 */
var broadcasterTyping = null;

/**
 * @type {plugins.ClientManager.BroadCaster}
 * 
 * @private
 * 
 * @properties={typeid:35,uuid:"75E48504-17B9-4D84-8210-800E0CF7C3AF",variableType:-4}
 */
var broadcasterMessage = null;

/**
 * @type {String}
 * 
 * @private
 *
 * @properties={typeid:35,uuid:"6494B7B4-E613-496D-AC0D-763AF15A9410"}
 */
var msg = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"BA5E06B0-956A-491B-8F43-85F147269AD0"}
 */
function onLoad(event) {
	broadcasterTyping = plugins.ClientManager.getBroadCaster('servoy', '1', showTyping);
	broadcasterMessage = plugins.ClientManager.getBroadCaster('servoy', '2', showReceivedMessage);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B8035DA3-0544-4381-A72E-46754F9AA5FE"}
 */
function onActionSend(event) {
	broadcasterMessage.broadcastMessage(msg);
	
	msg = '';
}

/**
 * @param {String} name
 * @param {String} channel
 * @param {String} message
 * 
 * @private
 * 
 * @properties={typeid:24,uuid:"70718E84-5E4A-4419-8E4B-AFB680FB75C0"}
 */
function showReceivedMessage(name, channel, message) {
	application.output('message: ' + message);
}

/**
 * @param {String} name
 * @param {String} channel
 * @param {String} message
 * 
 * @private
 * 
 * @properties={typeid:24,uuid:"EC5549D9-1A23-41C0-9517-2B4B8BC92A1E"}
 */
function showTyping(name, channel, message) {
	application.output('typing...');
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"A0F4C257-2E59-440D-AC49-712D06E18AF0"}
 */
function onFocusGainedMsg(event) {
	broadcasterTyping.broadcastMessage('1');
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3A25E4DA-7F7E-413C-A2B5-CFE0A218AC60"}
 */
function onFocusLostMsg(event) {
	broadcasterTyping.broadcastMessage('0');
}
