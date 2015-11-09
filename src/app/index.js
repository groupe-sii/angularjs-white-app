(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name angularjsWhiteApp
     * @description angularjsWhiteApp main module
     */

    angular.module('angularjsWhiteApp-factories', []);
    angular.module('angularjsWhiteApp-services', []);
    angular.module('angularjsWhiteApp-directives', []);
    angular.module('angularjsWhiteApp-filters', []);

    angular
        .module('angularjsWhiteApp', [
			'ngCookies',
			'ngTouch',
			'ngSanitize',
			'ngMessages',
			'ngAria',
			'restangular',
			'ui.router',
			'ui.bootstrap',
            'psResponsive',
            'pascalprecht.translate',
            'toastr',
            'hljs',
			'angularjsWhiteApp-config',
            'angularjsWhiteApp-factories',
            'angularjsWhiteApp-services',
            'angularjsWhiteApp-directives',
            'angularjsWhiteApp-filters'
        ])
        .config(config)
        .run(run);

    config.$inject = ['$translateProvider', 'hljsServiceProvider', 'LANGUAGES'];

    /* @ngInject */
    function config($translateProvider, hljsServiceProvider, LANGUAGES) {

        // Translation
        var language = navigator.browserLanguage || navigator.language;
        $translateProvider.translations('en', LANGUAGES.en);
        $translateProvider.translations('fr', LANGUAGES.fr);
        $translateProvider.preferredLanguage((angular.isDefined(LANGUAGES[language])) ? language : 'en');

        // Highlight JS
        hljsServiceProvider.setOptions({
            tabReplace: '    '
        });
    }

    /* @ngInject */
    function run() {}
})();
