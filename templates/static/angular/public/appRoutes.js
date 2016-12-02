/**
 * Created by jesuscc29 on 1/12/16.
 */

angular.module('appRoutes', ['ui.router']).constant('BASE_URL', 'http://localhost:8000/api/personas/')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state({
            name: 'Person',
            url: '/personas',
            templateUrl: 'static/angular/public/components/person/templates/person.html',
            controller: 'PersonController'
        });

        $urlRouterProvider.otherwise('/');
    }]);