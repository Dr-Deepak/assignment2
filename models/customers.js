var mongoose = require('mongoose');

var plm = require('passport-local-mongoose');

var CustomerSchema = new mongoose.Schema
({
   firstname: {type: String, required: 'first name is required'},
   lastname: {type: String, required: 'last name is required'},
   username: {type: String, required: 'username is required'},
   password: {type: String},
   oauthID : {type:String},
   created : {type:Date}
});
CustomerSchema.plugin(plm);
