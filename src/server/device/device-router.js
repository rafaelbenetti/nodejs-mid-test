(function () {
    'use strict';

    const express = require('express');
    let deviceController = require('./device-controller');

    let router = express.Router();

    router.route('/')
        .get((req, res, next) => {
            deviceController
                .find()
                .then(devices => res.json(devices))
                .catch(next);
        })
        .post((req, res, next) => {
            deviceController
                .create(req.body)
                .then(() => res.sendStatus(200))
                .catch(next);
        });

    module.exports = router;
})();