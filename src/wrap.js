(function(angular) {
    'use strict';
    angular.module('wrap', [])
        .factory('wrap', ['$templateCache', '$compile', function($templateCache, $compile) {
            return {
                wrap: function(scope, el, template) {
                    var wrapperEl = document.createElement("div");
                    wrapperEl.innerHTML = $templateCache.get(template);
                    var replacedEl = wrapperEl.children[0];
                    $compile(angular.element(replacedEl))(scope);
                    var rplEl = el[0].parentNode.replaceChild(replacedEl, el[0]);
                    if (replacedEl.children.length > 0) {
                        replacedEl.insertBefore(rplEl, replacedEl.children[0]);
                    } else {
                        replacedEl.appendChild(rplEl);
                    }
                    return {
                        0: rplEl,
                        1: replacedEl
                    };
                }
            };
        }]);
})(angular);
