exports.getAllUsers = (req, res, next) => {
    res.render('admin/users');
}

exports.postCreateUser = (req, res, next) => {
    res.redirect('/');
}