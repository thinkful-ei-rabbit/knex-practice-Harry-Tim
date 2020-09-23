'use strict';


const shoppingListService = {
  getAllItems(db) {
    return db
      .select('*')
      .from('shopping_list');
  }
};

module.exports = shoppingListService;