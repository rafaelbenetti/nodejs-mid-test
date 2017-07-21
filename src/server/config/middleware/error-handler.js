(function () {
    'use strict';

    const MESSAGE_INTERNAL_ERROR = 'We had a problem to process your request.';
    const INTERNAL_ERROR = 'We had a problem to process your request.';

    function errorHandler(err, req, res, next) {

        return res.status(500).json({
            message: MESSAGE_INTERNAL_ERROR,
            error: INTERNAL_ERROR
        });
    }

    module.exports = errorHandler;
})();