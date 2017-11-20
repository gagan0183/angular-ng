var app = angular.module('app', []);
app.controller('FirstController', function($scope) {
    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter += amount;
    }
    $scope.subtract = function(amount) {
        $scope.counter -= amount;
    }
});

app.controller('ParseController', function($scope, $parse) {
    $scope.$watch('expr', function(newVal, oldVal, scope) {
        if(newVal !== oldVal) {
            var parseFun = $parse(newVal);
            console.log(parseFun);
            $scope.parseValue = parseFun(scope);
        }
    });
});