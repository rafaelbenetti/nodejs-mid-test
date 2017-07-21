(function() {
    'use strict';

    const positionService = require('./position-service');
    let positionController = {};

    positionController.create = position => positionService.create(position);    
    
    module.exports = positionController;
})();