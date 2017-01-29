angular.module('svycodeboxCodebox',['servoy']).directive('svycodeboxCodebox', function($timeout) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
	  link: function postLink(scope, element, attrs) {
		 var update = function(){
              $timeout(function () {
                  var prettified = prettyPrintOne(scope.model.code,null,true);
                  element.find('pre').html(prettified);
              }, 0);
          }
          scope.$watch('model.code', function () {
              update();
          }, true);
     },
      templateUrl: 'svycodebox/codebox/codebox.html'
    };
  })