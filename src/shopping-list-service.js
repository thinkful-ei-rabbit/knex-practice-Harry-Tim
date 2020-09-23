const knex = require ('knex');
require('dotenv').config();
const db = knex ({
    client: 'pg',
    connection: process.env.TEST_DB_URL
});

const shoppingListService = {
    getAllItems() {
        return db.from ('shopping_list').select ('*') .then(res =>{console.log(res)}) 
    }
}
shoppingListService.getAllItems;
module.exports = shoppingListService;