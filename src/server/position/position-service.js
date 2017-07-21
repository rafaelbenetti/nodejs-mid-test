(function () {
    'use strict';

    const mongoose = require('mongoose');
    let Position = require('../models/position-model');
    let positionService = {};

    positionService.create = function (position) {
        return Position.create(position);
    };

    module.exports = positionService;
})();