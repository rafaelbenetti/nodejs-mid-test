(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    
    const COLLECTION = '/devices';

    describe('Finding All devices', () => {
        it('Expect status 200', (done) => {            
            request(app)
                .get(COLLECTION)
                .expect(200, done);
        });
    });
})();