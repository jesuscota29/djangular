/**
 * Created by jesuscc29 on 12/6/16.
 */

var app = angular.module('Djangular');
app.controller('ModalCtrl', ['$scope', 'close', function($scope, close) {
    $scope.close = function(result) {
        close(result); // close, but give 500ms for bootstrap to animate
    };
}]);