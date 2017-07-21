(function () {
    'use strict';

    const mongoose = require('mongoose');
    const NAME_SCHEMA = 'Position';

    let positionSchema = mongoose.Schema({
        latitude: Number,
        longitude: Number,
        deviceSN: String        
    });

    let Position = mongoose.model(NAME_SCHEMA, positionSchema);

    module.exports = Position;
})();