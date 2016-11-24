var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');
var CustomerSchema = new mongoose.Schema
({
   firstname: {type: String},
    lastname: {type: String},
         sin: {type: String},
    username: {type: String},
    password: {type: String},
    oauthID : {type:String},
    created : {type:Date}
});
CustomerSchema.plugin(plm);
module.exports = mongoose.model('Customers', CustomerSchema);
