(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController($timeout, AppTechnologiesService, toastr) {
        var vm = this;

        vm.awesomeThings = [];
        vm.siiTechs = [];
        vm.classAnimation = 'rubberBand';
        vm.showToastr = showToastr;

        getAppTechnologies();

        ////////////

        function showToastr() {
            toastr.info('Generator Gulp Angular / SII');
            vm.classAnimation = '';
        }

        function getAppTechnologies() {
            vm.awesomeThings = AppTechnologiesService.getTechs();
            vm.siiTechs = AppTechnologiesService.getSIITechs();
        }
    }
})();