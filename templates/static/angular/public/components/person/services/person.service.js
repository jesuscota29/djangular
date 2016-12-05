/**
 * Created by jesuscc29 on 2/12/16.
 */

angular.module('PersonService', []).factory('PersonFactory', function($http) {

    return {
        getAll : function (callback) {
            $http.get(BASE_URL + 'persons/').success(callback);
        },

        addPerson : function(personData, callback, errorCallback) {
            $http.post(BASE_URL + 'persons/', personData).success(callback).error(errorCallback);
        }
    }

});