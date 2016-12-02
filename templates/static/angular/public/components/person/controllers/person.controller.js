/**
 * Created by jesuscc29 on 1/12/16.
 */

angular.module('PersonController', []).controller('PersonController', function($scope, PersonFactory) {

    $scope.message = 'Hello world!';

    PersonFactory.getAll(function(persons) {
        $scope.persons = persons;
    });

    $scope.addPerson = function() {
        var randomPerson = {
            name: "abc",
            last_name: "defg",
            birthdate: "2016-11-11"
        };
        PersonFactory.addPerson(randomPerson, function(person) {
            $scope.persons.push(person);
        });
    }

});