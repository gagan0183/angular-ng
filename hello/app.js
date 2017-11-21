var email = angular.module('emailParser', []);

email.config(['$interpolateProvider', function($interpolateProvider) {
       $interpolateProvider.startSymbol('__');
       $interpolateProvider.endSymbol('__'); 
    }])
    .factory('EmailParser', ['$interpolate', function($interpolate) {
        return {
            parse: function(text, context) {
                var template = $interpolate(text);
                return template(context);
            }
        }
    }]);

angular.module('filt', [])
    .filter('capitialize', function() {
        return function(input) {
            if(input) {
                return input[0].toUpperCase() +
                       input.slice(1);
            }
        }
    });

var app = angular.module('app', ['emailParser', 'filt']);
app.controller('EmailController', ['$scope', 'EmailParser', function($scope, EmailParser) {
    $scope.$watch('emailBody', function(body) {
        if(body) {
            $scope.previewText = EmailParser.parse(body, {
                to: $scope.to
            });
        }
    });
}]);