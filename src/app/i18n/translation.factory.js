(function() {
    'use strict';

    angular
        .module('angularjsWhiteApp-factories')
        .factory('TranslationFactory', TranslationFactory);

    TranslationFactory.$inject = ['$q', '$http', '$translate', '$templateCache'];

    /* @ngInject */
    function TranslationFactory($q, $http, $translate, $templateCache) {
        var factory = {
            get: get
        };

        return factory;

        ////////////

        /**
         * @ngdoc function
         * @name angularjsWhiteApp-factories.method:get
         * @methodOf angularjsWhiteApp-factories.factory:TranslationFactory
         *
         * @description Retrieve the requested translation from template cache if it was found or from application otherwise
         * @param  {string}  template  The template name. Parameter must contain a ${LANG} string, which will be replaced by the current language.
         * @return {promise}           The template content
         */
        function get(template) {
            var _p = $q.defer(),
                _lang = $translate.use() ? $translate.use() : 'en', // Default language is English
                _tpl = template.replace('${LANG}', _lang),
                _html = '';

            // Try to retrieve from template cache first
            _html = $templateCache.get(_tpl);

            // Template wasn't found in cache, try the application folders
            if (angular.isUndefined(_html)) {
                $http.get(_tpl).then(function(tpl) {
                    _p.resolve(tpl.data);
                }, function(err) {
                    _p.reject(err);
                });
            } else {
                _p.resolve(_html);
            }

            return _p.promise;
        }
    }
})();
