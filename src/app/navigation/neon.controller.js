(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .controller('NavigationNeonController', NavigationNeonController);

    NavigationNeonController.$inject = [];

    /* @ngInject */
    function NavigationNeonController() {
        var vm = this;

        vm.navigation = [];
    }
})();
