(function() {
    'use strict';

    const positionService = require('./position-service');
    let arrayHelper = require('../helpers/array-helper');
    let positionController = {};

    positionController.create = function(position, device) {
        position = setSerialNumberFor(position, device);
        return positionService.create(position);
    }    
     
    function setSerialNumberFor(position, device) {
        if (arrayHelper.isArray(position)) 
            position.map((p) => mapSerialNumber(p, device));
        else 
            position.deviceSN = device.serialNumber;
        return position;
    } 

    function mapSerialNumber(position, device) {
        position.deviceSN = device.serialNumber;
        return position;
    };

    module.exports = positionController;
})();