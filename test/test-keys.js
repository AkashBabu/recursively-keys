







 
var getKeys = require('../index.js')
var assert = require('chai').assert;

var options = {recursive : true};

describe('Recursive-Keys-Test : ', function(){
	before(function(){
		console.log('Begining the test now');
	});
	
	it('Test for null', function(){
		assert.throws(function(){
				getKeys(null, options);
		}, 'Error in Arguments Passed for getKeys()');
	});

	it('Test for Undefined', function(){
		var object;
		assert.throws(function(){
			getKeys(object);
		}, 'Error in Arguments Passed for getKeys()');
	});
	
	it('Test for Arrays', function(){
		var arr = [1,2,3,4];
		var myKeys = [];
		assert.throws(function(){
			getKeys(arr);
		}, 'Error in Arguments Passed for getKeys()');
	});
	
	it('Test for Object', function(){
		var object = {a : 1, b : 2};
		var myKeys = ['a', 'b'];
		var obtainedKeys = getKeys(object, options);
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test for Object with inner Objects', function(){
		var object = {a : 1, b : 2, c: { l : 4}};
		var myKeys = ['a', 'b', 'c'];
		var obtainedKeys = getKeys(object);
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test for Object with Array', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4}};
		var myKeys = ['a', 'b', 'c'];
		var obtainedKeys = getKeys(object);
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test for Object with inner Object with Array', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c'];
		var obtainedKeys = getKeys(object);
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test with 4 parameter', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c', 'l', 'm', 'x', 'y'];
		var obtainedKeys = [];
		assert.throws(function(){
				getKeys(object, options, null, null);
			}, 'Error in Arguments Passed for getKeys()'
		)
	});
	
	it('Test with options and callback interchanged', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c', 'l', 'm', 'x', 'y'];
		var obtainedKeys = [];
		assert.throws(function(){
				getKeys(object, function(err, keys){
					obtainedKeys = keys;
				}, options)
			}, 'Error in Arguments Passed for getKeys()'
		)
	});
	
	it('Test with recursive == true', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c', 'l', 'm', 'x', 'y'];
		var obtainedKeys = getKeys(object, options);
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});

	it('Test with Object having inner array having Object or inner array having object', function(){
		var object = {a : 1, b : [1, {c : [[{d : 2}, {e : 3}], 5]}]};
		var myKeys = ['a', 'b', 'c', 'd', 'e'];
		var obtainedKeys = getKeys(object, options);
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	after(function(){
		console.log('Testing has been completed');
	});
})


















