(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .controller('NavigationNeonController', NavigationNeonController);

    /* @ngInject */
    function NavigationNeonController() {
        var vm = this;

        vm.navigation = [
            {
                name: '<i class="fa fa-home"></i><span class="title">Home',
                link: 'app.home'
            },
            {
                name: '<i class="fa fa-bars"></i><span class="title">Navigation</span>',
                subtree: [
                    {
                        name: '<span class="title">Bootstrap</span>',
                        link: 'app.navigation.bootstrap'
                    },
                    {
                        name: '<span class="title">Neon</span>',
                        link: 'app.navigation.neon'
                    }
                ]
            }
        ];
    }
})();
