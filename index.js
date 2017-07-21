(function() {
    'use strict';

    let versionChecker = require('./version-checker');
    versionChecker.check();

    let http = require('http');

    let server = http.createServer((req, res) => {
        res.end('Hello World');
    });

    server.listen(3000, () => {
        console.log('Server is running!');
    });
})();