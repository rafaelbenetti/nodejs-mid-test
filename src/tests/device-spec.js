(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const devices = require('./mock/devices.js');
    const COLLECTION = '/devices';

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

    describe('Finding All devices', () => {
        it('Expect status 200', (done) => {
            request(app)
                .get(COLLECTION)
                .expect(200, done);
        });

        it('Expect json content', (done) => {
            request(app)
                .get(COLLECTION)
                .expect('Content-Type', 'application/json; charset=utf-8', done);
        });
    });

    describe('Finding one device by id', () => {
        it('Expect status 200', (done) => {

            let device = devices[0];

            request(app)
                .get(`${COLLECTION}/${device._id}`)
                .expect(200, done);
        });

        it('Expect status 404', (done) => {
            request(app)
                .get(`${COLLECTION}/not_valid_id`)
                .expect(404, done);
        });

        it('Expect json content', (done) => {
            request(app)
                .get(COLLECTION)
                .expect('Content-Type', 'application/json; charset=utf-8', done);
        });
    });
})();