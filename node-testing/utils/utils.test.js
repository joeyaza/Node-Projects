const utils = require('./utils');

it('should add 2 numbers', () => {
	let res = utils.add(33, 11);
	if (res !== 44) {
		throw new Error(`Expected 44, got ${res}.`)
	}
});

it('should square a number', ()=> {
	let res = utils.square(2);
	if (res !== 4) {
		throw new Error(`Expected 4, got ${res}.`)
	}
})