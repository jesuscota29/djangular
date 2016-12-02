/**
 * Created by jesuscc29 on 1/12/16.
 */

angular.module('PersonController', []).controller('PersonController', function($scope, PersonFactory) {

    $scope.message = 'Hello world!';

    PersonFactory.get(function(persons) {
        $scope.persons = persons;
    })

});