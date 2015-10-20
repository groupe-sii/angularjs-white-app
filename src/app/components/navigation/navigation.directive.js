(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp-directives')
        .directive('navigation', navigation)
        .directive('leaf', leaf);

    /* @ngInject */
    function navigation() {
        // Usage:
        //      navigation: Navigation array
        //      root-level: TRUE if it is the navigation root level; FALSE otherwise
        //
        // Creates:
        //      <navigation navigation="array" root-level="true"></navigation>
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
        //                      divider: true,
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
            templateUrl: 'app/components/navigation/navigation.tpl.html',
            controller: NavigationController,
            controllerAs: 'nav',
            bindToController: true
        };

        return directive;
    }

    function NavigationController() {
        var vm = this;

        vm.open = open;

        ////////////

        function open(leaf) {
            if (angular.isArray(leaf.subtree)) {
                leaf.opened = !leaf.opened;
            }
        }
    }

    /////////////////////////////////////////////////////////////////::

    leaf.$inject = ['$compile'];

    /* @ngInject */
    function leaf($compile) {
        var directive = {
            scope: {
                leaf: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/navigation/leaf.tpl.html',
            link: function(scope, element) {
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append($compile('<navigation navigation=\"leaf.subtree\" ng-class=\"{\'visible\': leaf.opened}\"></navigation>')(scope));
                }

            }
        };

        return directive;
    }
})();
