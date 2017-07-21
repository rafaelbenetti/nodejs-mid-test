(function () {
    'use strict';

    const mongoose = require('mongoose');

    let Device = require('../models/device-model');

    let deviceService = {};

    deviceService.find = function () {
        return Device.find({});
    };

    module.exports = deviceService;
})();