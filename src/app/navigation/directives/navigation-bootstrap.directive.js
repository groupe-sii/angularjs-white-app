(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp-directives')
        .directive('navigationBootstrap', navigationBootstrap);

    /* @ngInject */
    function navigationBootstrap() {
        // Usage:
        //      navigation: Navigation array
        //      class:      You can add some CSS classes (e.g: navbar-right)
        //
        // Creates:
        //      <navigation-bootstrap navigation="array"></navigation-bootstrap>
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
        //                      header: true,
        //                      name: "State 2.2"
        //                  }
        //              ]
        //          }
        //      ]

        var directive = {
            scope: {
                navigation: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: 'app/navigation/directives/navigation-bootstrap.tpl.html'
        };

        return directive;
    }
})();
