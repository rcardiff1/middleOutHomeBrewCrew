var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerUser = new Schema({
    name: String,
    valId: Number
});

// registerUser.methods.generateHash = function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// registerUser.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('RegisterUser', registerUser);
