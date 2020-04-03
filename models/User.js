var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    password: String,
    image: String
});

module.exports = mongoose.model("user", userSchema);