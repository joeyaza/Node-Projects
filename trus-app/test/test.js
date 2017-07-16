var assert = require("assert"); // node.js core module
var app = require("../app.js");

describe('Displays Number as Text', function() {
    it('should map numbers to string', function(done) {
    var req = { 
    	body: {
    		numeric: '8 5 12 12 15'
    	},
    	session: {
    		numeric:''
    	}
    };
    var res = { 
		body: {
			numeric: ''
		},
		render: function() {
    	}
    };
    var z = app.logic(req, res);
       assert.equal(z, "hello");
       done();
    });

  });