(function () {
    'use strict';

    const mongoose = require('mongoose');
    const bluebird = require('bluebird');

    const databaseConfig = require(`../server/config/${process.env.NODE_ENV}/database-config`);
    const url = `${databaseConfig.address}:${databaseConfig.port}/${databaseConfig.database}`;

    describe('Database management', () => {
        it('Dropping database', (done) => {
            mongoose.Promise = bluebird;
            mongoose.connect(url, {
                    useMongoClient: true
                })
                .then((db) => {
                    db.dropDatabase();
                    done();
                });
        });
    });
})();