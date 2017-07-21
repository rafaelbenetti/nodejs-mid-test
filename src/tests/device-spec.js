(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const devices = require('./mock/devices.js');
    
    const COLLECTION = '/devices';

    describe('Finding All devices', () => {
        it('Expect status 200', (done) => {            
            request(app)
                .get(COLLECTION)
                .expect(200, done);
        });
    });

    describe('Creating new devices', () => {
        it('Expect status 200', (done) => {

            var device = devices[0];

            request(app)
                .post(COLLECTION)
                .send(device)
                .expect(200, done);
        })
    });
})();