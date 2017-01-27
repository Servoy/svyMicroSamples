angular.module('chatChat', ['servoy']).directive('chatChat', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: "=svyHandlers",
				api: "=svyApi",
				servoyApi: "=svyServoyapi"
			},
			link: function($scope, $element, $attrs) {
				var $messages = $('.messages-content'),
					d, h, m,
					i = 0;

				$messages.mCustomScrollbar();

				function updateScrollbar() {
					$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
							scrollInertia: 10,
							timeout: 0
						});
				}

				function setDate() {
					d = new Date()
					if (m != d.getMinutes()) {
						m = d.getMinutes();
						$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
					}
				}

				function insertMessage() {
					msg = $('.message-input').val();
					if ($.trim(msg) == '') {
						return false;
					}
					$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
					setDate();
					$('.message-input').val(null);
					updateScrollbar();

					$scope.handlers.onSendingMessage(msg);
				}

				$('.message-submit').click(function() {
					insertMessage();
				});

				$(window).on('keydown', function(e) {
						if (e.which != 13) {
							$scope.handlers.onTypingMessage();

							return
						}

						insertMessage();
						return false;
					})

				$scope.api.showTyping = function() {
					$('<div class="message loading new"><figure class="avatar"><img src="trump.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
					updateScrollbar();
					setTimeout(function() {
							$('.message.loading').remove();
						}, 2000)
				}

				$scope.api.showReceivedMessage = function(message) {
					$('<div class="message new"><figure class="avatar"><img src="trump.png" /></figure>' + message + '</div>').appendTo($('.mCSB_container')).addClass('new');
					setDate();
					updateScrollbar();
				}
			},			
			controller: function($scope, $element, $attrs) { },
			templateUrl: 'chat/chat/chat.html'
		};
	})
	