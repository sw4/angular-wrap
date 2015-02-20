(function (angular) {
    'use strict';
    angular.module('ux.utility.wrap', [])
        .factory('uxWrap', ['$templateCache','$compile',function ($templateCache,$compile) {
            return {
                wrap:function(scope, el, template){
                    var wrapperEl=document.createElement("div");
                    wrapperEl.innerHTML=$templateCache.get(template);
                    var replacedEl=wrapperEl.children[0];
                    $compile(angular.element(replacedEl))(scope);
                    var radioEl = el[0].parentNode.replaceChild(replacedEl, el[0]);
                    replacedEl.insertBefore(radioEl, replacedEl.children[0]);
                }
            };
        }]);
})(angular);
