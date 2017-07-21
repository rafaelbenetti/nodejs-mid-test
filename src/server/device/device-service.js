(function () {
    'use strict';

    const mongoose = require('mongoose');
    let Device = require('../models/device-model');
    let deviceService = {};

    deviceService.find = function () {
        return Device.find({});
    };

    deviceService.findById = function (id) {
        return Device.findOne({
            "_id": id
        });
    };

    deviceService.create = function (device) {
        return Device.create(device);
    };

    module.exports = deviceService;
})();