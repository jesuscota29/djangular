/**
 * Created by jesuscc29 on 1/12/16.
 */

'use strict';

var BASE_URL = 'http://127.0.0.1:8000/api/';

angular.module('Djangular',
    ['appRoutes', 'PersonController', 'PersonService', 'angularModalService']
).run(run);

/**
 * @name run
 * @desc Update xsrf $http headers to align with Django's defaults
 */
function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
}