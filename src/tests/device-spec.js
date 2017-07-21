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

            let device = devices[0];

            request(app)
                .post(COLLECTION)
                .send(device)
                .expect(200, done);
        });

        it('Expect status 400', (done) => {

            let device = devices[0];

            request(app)
                .post(COLLECTION)
                .send(device)
                .expect(400, done);
        });

        it('Expect message DeviceId duplicated', (done) => {

            let device = devices[0];
            let expectedResult = {
                "message": "DeviceId must be unique.",
                "error": "Database schema validation error."
            };

            request(app)
                .post(COLLECTION)
                .send(device)
                .expect(400)
                .expect(expectedResult, done);
        });
    });
})();