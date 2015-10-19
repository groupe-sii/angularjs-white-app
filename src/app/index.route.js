(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })

            .state('app.home', {
                url: '',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
