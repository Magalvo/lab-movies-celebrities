//  Add your code here
const { Schema, model } = require('mongoose');

const celebritieSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebritie = model('Celebritie', celebritieSchema);

module.exports = Celebritie;
