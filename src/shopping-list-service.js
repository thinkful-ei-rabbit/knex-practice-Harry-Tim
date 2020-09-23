'use strict';


const shoppingListService = {
  getAllItems(db) {
    return db
      .select('*')
      .from('shopping_list');
  },
  getById(db, id) {
    return db
      .select('*')
      .from('shopping_list')
      .where('id', id);
  }
};

module.exports = shoppingListService;