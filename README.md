





Recursive-Keys

=====================================================

A simple library that helps you to get all the keys in an Object even DEEPLY.


## Installation

	npm install recursive-keys --save


## Usage
	
	var getKeys = require('recursive-keys');

	var options = {recursive : true};

	var object = {
		a: 1,
		b : 2,
		c : [1,23,45],
		d : {
			x : 1,
			a : 2,
			v : [3,2,1,5]
		}
	}

	getKeys(object, options, function(err, keys){
		console.log('Keys : ' + keys);
	});

	// This will result in -- Keys : a,b,c,d,x,a,v


	getKeys(object, [options], callback)

	object - A JSON object
	options - A JSON object which can include
		recursive - (boolean) if true, it will return all the keys deeply. If false, it will only return the first 	            level of keys.
		(Other options will be included in further versions)
	callback - (err, keys) if err, then it will return the reason, else keys will be returned.


## Tests

	npm test


## Contributing
	
	In lieu of a formal styleguide, take care to maintain the existing coding style.
	Add unit tests for any new or changed functionality. Lint and test your code.


## Release History

	* 0.1.0 Initial Release