(function () {
    'use strict';

    const express = require('express');
    let positionController = require('./position-controller');
    let deviceController = require('../device/device-controller');    

    let router = express.Router();

    router.route('/:deviceId')
        .post((req, res, next) => {
            deviceController
                .findById(req.params.deviceId)
                .then((device) => processPositionData(device, req, res, next));
        });

    function processPositionData(device, req, res, next) {
        if (!device)
            return res.sendStatus(404);

        positionController
            .create(req.body, device)
            .then(() => res.sendStatus(200))
            .catch(next);
    }

    module.exports = router;
})();