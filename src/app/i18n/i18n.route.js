(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider
            .state('app.i18n', {
                url: 'i18n',
                templateUrl: 'app/i18n/i18n.html',
                controller: 'I18NController',
                controllerAs: 'i'
            })

            .state('app.i18n-static', {
                url: 'i18n/static',
                templateProvider: function(TranslationFactory) {
                    return TranslationFactory.get('app/i18n/i18n-static.${LANG}.html').then(function(tpl) {
                        return tpl;
                    });
                }
            });
    }
})();
