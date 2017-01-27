{
	"name": "chat-chat",
	"displayName": "chat",
	"version": 1,
	"definition": "chat/chat/chat.js",
	"libraries": [{
		"name": "jquery.mCustomScrollbar.js",
		"version": "1",
		"url": "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js",
		"mimetype": "text/javascript"
	},{
		"name": "normalize.css",
		"version": "1",
		"url": "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css",
		"mimetype": "text/css"
	}, {
		"name": "fonts",
		"version": "1",
		"url": "https://fonts.googleapis.com/css?family=Open+Sans",
		"mimetype": "text/css"
	}, {
		"name": "jquery.mCustomScrollbar.css",
		"version": "1",
		"url": "https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css",
		"mimetype": "text/css"
	}, {
		"name": "chat.css",
		"version": "1",
		"url": "chat/chat/chat.css",
		"mimetype": "text/css"
	}],
	"model":
	{
		"chatName": {
			"type": "string"
		},
		"chatTitle": {
			"type": "string"
		},
		"chatImage": {
			"type": "media"
		}
	},
	"handlers":
		{
		"onTypingMessage": {
			"parameters": [
			]
		},
		"onSendingMessage":
			{
			"parameters": [
				{
					"name": "message",
					"type": "String"
				}
			]
		}
	},
	"api":
	{
		"showTyping": {
			"parameters": [
			]
		},
		"showReceivedMessage": {
			"parameters": [
				{
					"name": "message",
					"type": "string"
				}
			]
		}
	}
}
