const ShoppingListService = require('../src/shopping-list-service');
const knex = require('knex');
require('dotenv').config();

describe('Shopping List Service object', function () {
    let db;
    
    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        });
    });

    describe('This is for all the tests for the GET items', function () {
        it('getAllItems', function () )
    })
}