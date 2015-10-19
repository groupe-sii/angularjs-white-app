(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .controller('MainController', MainController);

    MainController.$inject = ['psResponsive'];

    /* @ngInject */
    function MainController(psResponsive) {
        var vm = this;

        vm.sidebarCollapsed = false;
        vm.mainMenuCollapsed = false;
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
