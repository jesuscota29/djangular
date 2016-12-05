/**
 * Created by jesuscc29 on 1/12/16.
 */

angular.module('PersonController', []).controller('PersonController', function ($scope, PersonFactory) {

    $scope.personFormVisible = false;
    $scope.personFormErrors = false;

    PersonFactory.getAll(function (persons) {
        $scope.persons = persons;
    });

    $scope.addPerson = function (personData) {
        if (personData.$invalid) {
            return;
        }
        PersonFactory.addPerson(personData, function (person) {
            $scope.persons.push(person);
            clearPersonForm();
        }, function(error) {
            for (var key in error) {
                $("#" + key).parent().addClass("has-error").append(error[key]);
            }
        });
    };

    $scope.showPersonForm = function () {
        $scope.personFormVisible = true;
    };


    $scope.originForm = angular.copy($scope.personData); // Copy original form
    // Clear a form and it's state.
    $scope.cancelPersonForm = function () {
        clearPersonForm();
    };

    function clearPersonForm() {
        $scope.personData = angular.copy($scope.originForm);
        $scope.addPersonForm.$setPristine();
        $scope.personFormVisible = false;
    }

});