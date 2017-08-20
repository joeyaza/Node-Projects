var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/node-blog');


router.get('/add', function(req, res, next) {
	res.render('addcategory', {
		'title': "Add Category"
	});
});

router.post('/add', function(req, res, next) {
	//get form values
	var title = req.body.title;
	//form validation
	req.checkBody('title', 'title field is required').notEmpty();
	//check errors
	var errors = req.validationErrors();

	if(errors) {
		res.render('addcategory', {
			"errors": errors,
			"title": title,
		});
	} else {
		var categories = db.get('posts');

		//submit to db
		categories.insert({
			"title": title,
		}, function(err, category) {
			if (err) {
				res.send('There was an issue saving your data!');
			} else {
				req.flash('success', 'Success!');
				res.location('/');
				res.redirect('/');
			}
		});
	}
});

module.exports = router;
