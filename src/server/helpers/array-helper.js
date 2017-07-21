(function() {
    'use strict';

    let arrayHelper = {};

    arrayHelper.isArray = function(object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    };

    module.exports = arrayHelper;
})();