var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var multer = require('multer');
var upload = multer({ dest: './public/images/uploads'});
var db = require('monk')('localhost/node-blog');


router.get('/add', function(req, res, next) {
	var categories = db.get('categories');
	console.log(categories);
	categories.find({},{}, function(err, categories) {
		res.render('addpost',{
			"title": "Add Post",
			"categories": categories
		})
	});
});

router.post('/add', upload.single('mainimg'), function(req, res, next) {
	//get form values
	var title = req.body.title;
	var category = req.body.category;
	var body = req.body.body;
	var author = req.body.author;
	var date = new Date();
	if(req.files && req.files.mainimage) {
		var mainImageOriginalName = req.files.mainimage.originalname;
		var mainImageName = req.files.mainimage.name;
	} else {
		var mainImageName = 'noimage.png';
	}

	//form validation
	req.checkBody('title', 'title field is required').notEmpty();
	req.checkBody('body', 'body field is required').notEmpty();

	//check errors
	var errors = req.validationErrors();

	if(errors) {
		res.render('addpost', {
			"errors": errors,
			"title": title,
			"body": body
		});
	} else {
		var posts = db.get('posts');

		//submit to db
		posts.insert({
			"title": title,
			"body": body,
			"category": category,
			"date": date,
			"author": author,
			"image": mainImageName
		}, function(err, post) {
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