const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DataSchema = new Schema({
    greeting: {type: String, required: true, max: 100},
    language: {type: String, required: true, max: 100},

});
//Export the model
module.exports = mongoose.model('Data', DataSchema);