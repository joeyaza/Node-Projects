var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', {
  	'title': 'Register'
  })
});

router.get('/login', function(req, res, next) {
  res.render('login', {
  	'title': 'Login'
  })
});

router.post('/register', function(req, res, next) {
	// get form vals
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// check for img 
	if(req.files) {
		console.log('uploading..');
		var profileImageOriginalName = req.files.profileimage.originalname;
		var profileImageName = req.files.profileimage.name;
		var profileImageMime = req.files.profileimage.mimetype;
		var profileImagePath = req.files.profileimage.path;
		var profileImageExt = req.files.profileimage.extension;
		var profileImageSize = req.files.profileimage.size;
	} else {
		//set default image
		var profileImageName = 'noimage.png';
	}

	// Form Validation
	req.checkBody('name', 'Name field is required').notEmpty();
	req.checkBody('email', 'Email field is required').notEmpty();
	req.checkBody('email', 'Email Required').isEmail();
	req.checkBody('username', 'Username field is required').notEmpty();
	req.checkBody('password', 'Password field is required').notEmpty();
	req.checkBody('password2', 'Make sure passwords match!').equals(req.body.password);

	// Check for Errors

	var errors = req.validationErrors();

	if(errors) {
		res.render('register',{
			errors: errors,
			name: name,
			email: email,
			username: username,
			password: password,
			password2: password2
		});
	} else {
		var newUser = new User({
			errors: errors,
			name: name,
			email: email,
			username: username,
			password: password,
			profileimage: profileImageName
		});

		// create the user in database
		User.createUser(newUser, function(err, user) {
			if (err) throw err;
			console.log(user);
		});

		// send message to user to say has been created
		req.flash('success', 'You are now registered! Thanks!');

		res.location('/');
		res.redirect('/');
	}

});




module.exports = router;
