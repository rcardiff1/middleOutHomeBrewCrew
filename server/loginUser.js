var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginUser = new Schema({
  name: String,
  password: Number
});

module.exports = mongoose.model('LoginUser', loginUser);
