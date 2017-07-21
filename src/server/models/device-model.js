(function () {
    'use strict';

    const mongoose = require('mongoose');
    const NAME_SCHEMA = 'Device';

    let deviceSchema = mongoose.Schema({
        _id: String,
        serialNumber: String,
        deviceId: {
            type: String,
            unique: true
        },
        name: String
    }, {
        _id: false
    });

    let Device = mongoose.model(NAME_SCHEMA, deviceSchema);

    module.exports = Device;
})();