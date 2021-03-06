
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { user : req.user} );
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};


/*
 * GET account page
 */
exports.account = { }
exports.account.login = function (req, res) {
	res.render('account/login');
};

exports.account.logout = function (req, res) {
	req.logout();
	res.redirect('/');
};
