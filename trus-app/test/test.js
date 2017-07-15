var assert = require("assert"); // node.js core module
var app = require("../app.js");

describe('Displays Number as Text', function() {
    it('should map numbers to string', function(done) {
    var req = { 
    	body: {
    		numeric: '10 20 30'
    	},
    	session: {
    		numeric:''
    	}
    };
    var res = { 
		body: {
			numeric: ''
		},
		render: function(view, viewData) {

    }
    };
    console.log(app.logic(req, res));
    });
  });