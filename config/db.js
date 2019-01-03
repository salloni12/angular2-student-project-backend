
var mongoose = require("mongoose");

module.exports = () => {

    //connect to mongodb
    mongoose.connect('mongodb://localhost:27017/student');

    //on connection
    mongoose.connection.on('connected', () => {
        console.log("connected to database mongodb at port ");
    });

    mongoose.connection.on('error', (err) => {
        if (err) {
            console.log('error in database' + err);
        }

    });
}