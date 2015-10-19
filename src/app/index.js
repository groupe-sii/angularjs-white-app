(function() {
    'use strict';

    /**
     * @ngdoc object
     * @name angularjsWhiteApp
     * @description angularjsWhiteApp main module
     */
    angular
        .module('angularjsWhiteApp', [
            'pascalprecht.translate',
			'ngCookies',
			'ngTouch',
			'ngSanitize',
			'ngMessages',
			'ngAria',
			'restangular',
			'ui.router',
			'ui.bootstrap',
			'angularjsWhiteApp-config',
			'toastr'
        ])
        .config(config)
        .run(run);

    config.$inject = ['$translateProvider', 'LANGUAGES'];

    /* @ngInject */
    function config($translateProvider, LANGUAGES) {
        // Translation
        var language = navigator.browserLanguage || navigator.language;
        $translateProvider.translations('en', LANGUAGES.en);
        $translateProvider.translations('fr', LANGUAGES.fr);
        $translateProvider.preferredLanguage((angular.isDefined(LANGUAGES[language])) ? language : 'en');
    }

    /* @ngInject */
    function run() {}
})();
