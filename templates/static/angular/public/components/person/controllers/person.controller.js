/**
 * Created by jesuscc29 on 1/12/16.
 */

angular.module('PersonController', ['ui.bootstrap']).controller('PersonController', function ($scope, PersonFactory, ModalService) {

    $scope.personFormVisible = false;
    $scope.personFormErrors = false;

    PersonFactory.getAll(function (persons) {
        $scope.persons = persons;
    });

    $scope.addPerson = function (personData) {
        PersonFactory.addPerson(personData, function (person) {
            $scope.persons.push(person);
            clearPersonForm();
        }, function (error) {
            console.log(error);
            alert("Please validate form.");
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

    $scope.showConfirmRemove = function(person_pk) {
        ModalService.showModal({
            templateUrl: "static/angular/public/components/person/templates/modals/confirm_delete.html",
            controller: "ModalCtrl",
            scope: $scope
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                if (result) {
                    alert("Borrando: " + person_pk);
                }
            });
        });
    };

    /* Date picker click options for person */
    $scope.dpBirthdate = {
        opened: false
    };

    $scope.openDPBirthdate = function () {
        $scope.dpBirthdate.opened = true;
    };

    /* ------ End DatePicker options ------- */


});