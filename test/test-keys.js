

var getKeys = require('../index.js')
var assert = require('chai').assert;

var options = {recursive : true};

describe('recursive-keys-test', function(){
	before(function(){
		console.log('Begining the test now');
	});
	
	it('Test for null', function(){
		assert.throws(function(){
			getKeys(null, function(err, keys){
		})}, 'Invalid args');
	});

	it('Test for Undefined', function(){
		var object;
		assert.throws(function(){
			getKeys(object, function(err, keys){
		})}, 'Invalid args');
	});
	
	it('Test for Arrays', function(){
		var arr = [1,2,3,4];
		var myKeys = [];
		getKeys(arr, function(err, keys){
			myKeys = keys;
		});
		assert.isNull(myKeys, 'Result for arrays is not null')
	});
	
	it('Test for Object', function(){
		var object = {a : 1, b : 2};
		var myKeys = ['a', 'b'];
		var obtainedKeys = [];
		getKeys(object, function(err, keys){
			obtainedKeys = keys;
		});
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test for Object with inner Objects', function(){
		var object = {a : 1, b : 2, c: { l : 4}};
		var myKeys = ['a', 'b', 'c'];
		var obtainedKeys = [];
		getKeys(object, function(err, keys){
			obtainedKeys = keys;
		});
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test for Object with Array', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4}};
		var myKeys = ['a', 'b', 'c'];
		var obtainedKeys = [];
		getKeys(object, function(err, keys){
			obtainedKeys = keys;
		});
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test for Object with inner Object with Array', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c'];
		var obtainedKeys = [];
		getKeys(object, function(err, keys){
			obtainedKeys = keys;
		});
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test with different Order of parameter', function(){
		assert.throws(function(){
			getKeys(function(){}, null)}, 'Invalid args');
	});
	
	it('Test with 4 parameter', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c', 'l', 'm', 'x', 'y'];
		var obtainedKeys = [];
		assert.throws(function(){
				getKeys(object, options, function(err, keys){
					obtainedKeys = keys;
				}, null)
			}, 'Invalid args'
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
			}, 'Invalid args'
		)
	});
	
	it('Test with recursive == true', function(){
		var object = {a : [1, 'a', 5, 'asdf'], b : 2, c: { l : 4, m : {x : [1,32,45], y : 6}}};
		var myKeys = ['a', 'b', 'c', 'l', 'm', 'x', 'y'];
		var obtainedKeys = [];
		getKeys(object, options, function(err, keys){
			obtainedKeys = keys;
		});
		assert.sameMembers(myKeys, obtainedKeys, 'Keys dont match');
	});
	
	it('Test with no callback function as parameter', function(){
		var object = {a : 1};
		assert.throws(function(){
				getKeys(object, options)
			},'Invalid args'
		)
	});
	
	after(function(){
		console.log('Testing has been completed');
	});
})


















