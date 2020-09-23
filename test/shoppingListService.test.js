const ShoppingListService = require('../src/shopping-list-service');
const knex = require('knex');

describe('Shopping List Service object', function () {
    let db;

    let testData = [
            {
              item_id: 1,
              item_name: 'Fish tricks',
              price: '13.10',
              date_added: '2020-09-01T23:33:00.501Z',
              checked: false,
              category: 'Main'
            },
            {
              item_id: 2,
              item_name: 'Not Dogs',
              price: '4.99',
              date_added: '2020-09-01T23:33:00.501Z',
              checked: true,
              category: 'Snack'
            },
            {
              item_id: 3,
              item_name: 'Bluffalo Wings',
              price: '5.50',
              date_added: '2020-09-01T23:33:00.501Z',
              checked: false,
              category: 'Snack'
            }
    ];
    
    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        });
    });

    describe('This is for all the tests for the GET items', function () {
        it('should return the table from getAllItems()', function () {

        });
    })
}