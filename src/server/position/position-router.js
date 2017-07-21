(function () {
    'use strict';

    const express = require('express');
    let positionController = require('./position-controller');
    let deviceController = require('../device/device-controller');
    let arrayHelper = require('../helpers/array-helper');

    let router = express.Router();

    router.route('/:id')
        .post((req, res, next) => {
            deviceController
                .findById(req.params.id)
                .then((device) => processPositionData(device, req, res, next));
        });

    function processPositionData(device, req, res, next) {
        if (!device)
            return res.sendStatus(404);

        let position = setSerialNumberFor(req.body, device);
        positionController
            .create(position)
            .then(() => res.sendStatus(200))
            .catch(next);
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

    module.exports = router;
})();