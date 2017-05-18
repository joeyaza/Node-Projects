const expect = require('expect');
const utils = require('./utils');

it('should add 2 numbers', () => {
	let res = utils.add(33, 11);
	expect(res).toBe(44).toBeA('number');
});

it('should square a number', ()=> {
	let res = utils.square(2);
	expect(res).toBe(4).toBeA('number');
});

// it('should expect some values', () => {
// 	// expect({name: 'Joe'}).toEqual({name: 'Joe'});

// 	// expect([2,3,4]).toExclude(1);

// 	expect({
// 		name: 'Joe',
// 		age: 30,
// 		location: 'London'
// 	}).toExclude({
// 		age: 26
// 	})
// });

it('should verify first and last names', ()=> {
	var user = {location: "London", age: 30};
	var res = utils.setName(user, 'Joe Az');

	expect(res).toInclude({
		firstName: 'Joe',
		lastName: 'Az'
	});

});