(function() {
    'use strict';

    const deviceService = require('./device-service');

    let deviceController = {};

    deviceController.find = deviceService.find;
    deviceController.create = device => deviceService.create(device);
    
    module.exports = deviceController;
})();