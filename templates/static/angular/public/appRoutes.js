/**
 * Created by jesuscc29 on 1/12/16.
 */

angular.module('appRoutes', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state({
            name: 'Person',
            url: '/',
            templateUrl: 'person/templates/person.html',
            controller: 'PersonController'
        });

        $urlRouterProvider.otherwise('/');
    }]);