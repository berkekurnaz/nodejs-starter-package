/* Add Model */
var User = require("../models/User");

exports.getAllUsers = (req, res, next) => {
    res.render('users', { layout: false });
}

exports.postCreateUser = (req, res, next) => {
    res.redirect('/');
}