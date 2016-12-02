/**
 * Created by jesuscc29 on 2/12/16.
 */

angular.module('PersonService', []).factory('PersonFactory', function($http) {

    return {
        get : function (callback) {
            $http.get(BASE_URL + 'persons/').success(callback);
        }
    }

});