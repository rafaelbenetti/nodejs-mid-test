(function () {
    'use strict';

    const mongoose = require('mongoose');
    const bluebird = require('bluebird');

    const databaseConfig = require(`./${process.env.NODE_ENV}/database-config`);
    const url = `${databaseConfig.address}:${databaseConfig.port}/${databaseConfig.database}`;

    let manager = {};

    manager.connect = function () {
        // The default promise of mongoose is deprecated, that's why I am using bluebird.
        mongoose.Promise = bluebird;
        mongoose
            .connect(url, {
                useMongoClient: true
            })
            .then((db) => {
                console.log('Connected on database!!');
            });
    };

    module.exports = manager;
})();