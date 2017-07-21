(function() {
    'use strict';

    const express = require('express');
    let router = express.Router();

    router.route('/')
        .get((req, res, next) => {
            res.json({"success": true});
        });

    module.exports = router;
})();