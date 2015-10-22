(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.navigation', {
                abstract: true,
                url: 'navigation/',
                templateUrl: 'app/navigation/navigation.html'
            })

            .state('app.navigation.bootstrap', {
                url: 'bootstrap',
                templateUrl: 'app/navigation/bootstrap.html',
                controller: 'NavigationBootstrapController',
                controllerAs: 'b'
            })

            .state('app.navigation.neon', {
                url: 'neon',
                templateUrl: 'app/navigation/neon.html',
                controller: 'NavigationNeonController',
                controllerAs: 'n'
            });
    }
})();
