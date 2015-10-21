(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .controller('NavigationBootstrapController', NavigationBootstrapController);

    NavigationBootstrapController.$inject = [];

    /* @ngInject */
    function NavigationBootstrapController() {
        var vm = this;

        vm.navigation = [
            {
                name: 'Home',
                link: 'app.home'
            },
            {
                name: 'About',
                link: 'app.about'
            },
            {
                name: 'Contact',
                link: 'app.contact'
            },
            {
                name: 'Dropdown',
                subtree: [
                    {
                        name: 'Action',
                        link: 'app.dropdown.action'
                    },
                    {
                        name: 'Another action',
                        link: 'app.dropdown.aaction'
                    },
                    {
                        name: 'Something else here',
                        link: 'app.dropdown.seh'
                    },
                    {divider: true},
                    {
                        header: true,
                        name: 'Nav header'
                    },
                    {
                        name: 'Separated link',
                        link: 'app.dropdown.sl'
                    },
                    {
                        name: 'One more separated link',
                        link: 'app.dropdown.omsl'
                    }
                ]
            }
        ];

        vm.rightNavigation = [
            {
                name: 'Bootstrap',
                link: 'app.navigation.bootstrap'
            },
            {
                name: 'Neon',
                link: 'app.navigation.neon'
            }
        ];
    }
})();
