console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = process.argv[2];
console.log(process.argv);
console.log('Yargs:', argv);


if (command === 'add'){
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	console.log('listing all notes')
} else if (command === 'read') {
	console.log('fetching note') 
} else if (command === 'remove') {
	console.log('deleting note')
} else {
	'Not Sure!!!!'
};