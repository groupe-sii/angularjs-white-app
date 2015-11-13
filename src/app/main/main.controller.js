(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController(psResponsive, NAVIGATION) {
        var vm = this;

        vm.sidebarCollapsed = false;
        vm.mainMenuCollapsed = false;
        vm.navigation = NAVIGATION;
        vm.toggleLeftSideBar = toggleLeftSideBar;

        ////////////

        function toggleLeftSideBar(e) {
            e.preventDefault();

            if (psResponsive('tiny')) {
                vm.mainMenuCollapsed = !vm.mainMenuCollapsed;
            } else {
                vm.sidebarCollapsed = !vm.sidebarCollapsed;
            }
        }
    }
})();
