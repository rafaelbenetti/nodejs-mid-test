(function() {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const devices = require('./mock/devices.js');
    const positions = require('./mock/positions.js');
    const COLLECTION = '/positions';

    describe('Creating new positions', () => {
        it('Expect status code 200 for one position', (done) => {

            let device = devices[0];
            let position = positions[0];

            request(app)
                .post(`${COLLECTION}/${device._id}`)
                .send(position)
                .expect(200, done);
        });

        it('Expect status code 200 for many positions', (done) => {

            let device = devices[0];

            request(app)
                .post(`${COLLECTION}/${device._id}`)
                .send(positions)
                .expect(200, done);
        });

        it('Expect status code 404', (done) => {

            let position = positions[0];

            request(app)
                .post(`${COLLECTION}/NOT_VALID_DEVICE_ID`)
                .send(position)
                .expect(404, done);
        });

        it('Insert device for BLACKLIST', (done) => {

            let device = devices[2];
            device.serialNumber = '1234XPTO';

            request(app)
                .post('/devices')
                .send(device)
                .expect(200, done);
        });
            
        it('Expect status code 403 BLACKLIST', (done) => {
            
            let device = devices[2];   

            request(app)
                .post(`${COLLECTION}/${device._id}`)
                .send(positions)
                .expect(403, done);
        });
    });
})();