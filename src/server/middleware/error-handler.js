(function () {
    'use strict';

    const messages = require('./error-messages');

    function errorHandler(err, req, res, next) {

        if (err.name === 'MongoError' && err.code === 11000) {
            return res.status(400).json({
                message: messages.MESSAGE_MONGO_ERROR,
                error: messages.SCHEMA_VALIDATION_ERROR
            });
        }

        return res.status(500).json({
            message: messages.MESSAGE_INTERNAL_ERROR,
            error: messages.INTERNAL_ERROR
        });
    }

    module.exports = errorHandler;
})();