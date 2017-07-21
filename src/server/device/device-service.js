(function () {
    'use strict';

    const mongoose = require('mongoose');

    let Device = require('../models/device-model');

    let deviceService = {};

    deviceService.find = function () {
        return Device.find({});
    };

    deviceService.create = function (device) {
        return Device.create(device);
    };

    module.exports = deviceService;
})();