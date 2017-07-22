(function() {
    'use strict';

    let blackListService = {};
    
    let enabled = process.env.BLACK_LIST_ENABLED;
    let serialNumberWithProblem = process.env.BLACK_LIST_SERIAL_NUMBER || '1234XPTO';

    blackListService.isBlocked = function(device) {
        return enabled && device.serialNumber === serialNumberWithProblem;
    };

    module.exports = blackListService;
})();