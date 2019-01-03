var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create a schema
var studentListSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    department: { type: String },
    address: { type: String },
    email: { type: String },
    contact: { type: String },
    password: { type: String },
    isRole:{type:String,default:"student"}



});

var student = mongoose.model('student', studentListSchema);

module.exports=student;