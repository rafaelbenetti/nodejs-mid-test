(function () {
    'use strict';

    const express = require('express');    
    const bodyParser = require('body-parser');    
    const deviceRouter = require('../device/device-router');
            
    const databaseManager = require('../config/database-manager');
    databaseManager.connect(); 

    let app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }); 

    app.use(bodyParser.json());        
    app.use('/devices', deviceRouter);

    module.exports = app;
})();