'use strict';

const knex = require('knex');
const shoppingListService = require('../src/shopping-list-service');
const { expect } = require('chai');

describe('Shopping List Service object', function () {
  let db;
  let testData = [
    {
      id: 1,
      name: 'Fish tricks',
      price: '13.10',
      date_added: new Date('2020-09-01T23:33:00.501Z'),
      checked: false,
      category: 'Main'
    },
    {
      id: 2,
      name: 'Not Dogs',
      price: '4.99',
      date_added: new Date('2020-09-01T23:33:00.501Z'),
      checked: false,
      category: 'Snack'
    },
    {
      id: 3,
      name: 'Bluffalo Wings',
      price: '5.50',
      date_added: new Date('2020-09-01T23:33:00.501Z'),
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

  before(() => {
    return db('shopping_list').truncate();
  });

  afterEach(() => {
    return db('shopping_list').truncate();
  });

  after(() => db.destroy());

  context('Given \'shopping_list\' contains data', () => {

    beforeEach(() => {
      return db
        .into('shopping_list')
        .insert(testData);
    });

    describe('testing getAllItems()', function () {
      it('should return the table from getAllItems()', function () {
        return shoppingListService.getAllItems(db)
          .then(actual => {
            expect(actual).to.eql(testData);
          });
      });
    });
  

    describe('testing getById()', function() {
      it('should return the correct shopping item', () => {
        const testId = testData[1].id;
      
        return shoppingListService.getById(db, testId)
          .then(actual => {
            expect(actual[0]).to.eql(testData[1]);
          });
      });
    });

    describe('testing delete()', function() {
      it('deleteItem() removes an item from shopping_list table', () => {
        const idToDelete = 3;
        return shoppingListService.deleteItem(db, idToDelete)
        .then(() => shoppingListService.getAllItems(db))
          .then(allItems => {
            const expected = testItems
            .filter(item => item.id !== idToDelete)
            .map(item => ({
              ...item,
              checked: false,
            }));
            expect(allItems).to.eql(expected);
          });
        });
      }
  
    



  }); //end of given shopping list context
);