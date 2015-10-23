(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app.guidelines', {
                url: 'guidelines',
                templateUrl: 'app/guidelines/guidelines.html',
                controller: 'GuidelinesController',
                controllerAs: 'g'
            });
    }
})();
