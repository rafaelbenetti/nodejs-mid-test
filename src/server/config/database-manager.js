(function () {
    'use strict';

    const mongoose = require('mongoose');
    const bluebird = require('bluebird');

    let manager = {};

    manager.connect = function () {
        // The default promise of mongoose is deprecated, that's why I am using bluebird.
        mongoose.Promise = bluebird;
        mongoose
            .connect('mongodb://db:27017', {
                useMongoClient: true
            })
            .then((db) => {
                console.log('Connected on database!!');
            });
    };

    module.exports = manager;
})();