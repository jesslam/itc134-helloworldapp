const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Database = mongoose.model('Greetings',Schema({
    _id : String,
    greeting: String,
    language: String,
}));

//get database data
Database.find();
console.log(Database.find());

//Export the model
module.exports = Database;
console.log(module.exports);