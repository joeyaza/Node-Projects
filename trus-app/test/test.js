var assert = require("assert");
var app = require("../app.js");

describe('Displays Number as Text', function() {
    it('should map numbers to maze', function(done) {
    var z = app.testLogic('13 27 26 5');
       assert.equal(z, "maze");
       done();
    });
    it('should map numbers to pusheenicorn', function(done) {
    var z = app.testLogic('432 21 19 5832 5 135 14 6561 59049 15 486 275562');
       assert.equal(z, "pusheenicorn");
       done();
    });
    it('should map numbers to trussle tech', function(done) {
    var z = app.testLogic('20 486 21 513 19 324 5 21924 540 135 3 8');
       assert.equal(z, "trussle tech");
       done();
    });
    it('should map numbers hello world', function(done) {
    var z = app.testLogic('8 5 324 8748 295245 730 23 405 13122 12 108');
       assert.equal(z, "hello world");
       done();
    });
  });