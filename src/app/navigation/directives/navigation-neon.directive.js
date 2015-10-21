(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp-directives')
        .directive('navigationNeon', navigationNeon)
        .directive('leafNeon', leafNeon);

    /* @ngInject */
    function navigationNeon() {
        // Usage:
        //      navigation: Navigation array
        //      root-level: TRUE if it is the navigation root level; FALSE otherwise (TRUE by default)
        //
        // Creates:
        //      <navigation-neon navigation="array" root-level="false"></navigation-neon>
        //
        // Array:
        //      [
        //          {
        //              name: "First State",
        //              link: "app.state1",
        //          }, {
        //              name: "Second State",
        //              link: "app.state2",
        //              subtree: [
        //                  {
        //                      name: "State 2.1",
        //                      link: "app.state2.first"
        //                  }, {
        //                      name: "State 2.2",
        //                      link: "app.state2.second"
        //                  }
        //              ]
        //          }
        //      ]

        var directive = {
            scope: {
                navigation: '=',
                rootLevel: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'app/navigation/directives/navigation-neon.tpl.html',
            controller: NavigationNeonController,
            controllerAs: 'nav',
            bindToController: true
        };

        return directive;
    }

    function NavigationNeonController() {
        var vm = this;

        vm.rootLevel = (angular.isDefined(vm.rootLevel)) ? vm.rootLevel : true;
        vm.open = open;

        ////////////

        function open(leaf) {
            if (angular.isArray(leaf.subtree)) {
                leaf.opened = !leaf.opened;
            }
        }
    }

    /////////////////////////////////////////////////////////////////::

    leafNeon.$inject = ['$compile'];

    /* @ngInject */
    function leafNeon($compile) {
        var directive = {
            scope: {
                leaf: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'app/navigation/directives/leaf-neon.tpl.html',
            link: function(scope, element) {
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append($compile('<navigation-neon navigation=\"leaf.subtree\" root-level=\"false\" ng-class=\"{\'visible\': leaf.opened}\"></navigation-neon>')(scope));
                }

            }
        };

        return directive;
    }
})();
