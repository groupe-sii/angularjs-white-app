(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app.routing', {
                abstract: true,
                url: 'routing/',
                templateUrl: 'app/routing/routing.html'
            })

        .state('app.routing.angularui-router', {
            url: 'angularui-router',
            templateUrl: 'app/routing/angularui-router.html',
            controller: 'RoutingAngularuiRouterController',
            controllerAs: 'rui'
        })

        .state('app.routing.angular-new-router', {
            url: 'angular-new-router',
            templateUrl: 'app/routing/angular-new-router.html',
            controller: 'RoutingAngularNewRouterController',
            controllerAs: 'rnew'
        });
    }
})();
