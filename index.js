(function () {
    'use strict';

    let versionChecker = require('./src/server/config/version-checker');
    versionChecker.check();

    let http = require('http');
    let app = require('./src/server/config/express');

    let host = {
        port: 3000
    };

    http.createServer(app)
        .listen(host.port, () => {
            console.log(`Node server on port: ${host.port}`);
        });
})();