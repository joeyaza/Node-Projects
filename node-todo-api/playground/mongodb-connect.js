const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log(err);
	}
	console.log('Connected to MongoDB Server');

	db.collection('Todos').insertOne({
		text: 'something',
		completed: false

	}, (err, result) => {
		if (err) {
			return console.log(err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});


	db.close();
});