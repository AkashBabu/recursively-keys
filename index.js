








var keys = [];
// var keys = [], first = true;	

/*var getNonRecursiveKeys = function(object){
	return Object.keys(object);
}

var checkDeeply = function(array){
	array.forEach(function(eachElem){
		if(eachElem.constructor == Object){
			keys.concat(getKeys(eachElem));
		}else if(eachElem.constructor == Array){
			checkDeeply(eachElem);
		}
	})
}

var getKeys = function(object, options){
	if(object){
		if(object.constructor == Object){
			console.log('validated');
			for(var key in object){
				keys.push(key);
				if(object[key].constructor == Object){
					keys = keys.concat(getNonRecursiveKeys(object[key]));
				}else if(object[key].constructor == Array){
					checkDeeply(object[key]);
				}
			}
			return keys;
		}else{
			throw new Error('Error in Arguments Passed for getKeys()');
		}
	}else{
		throw new Error('Error in Arguments Passed for getKeys()');
	}
}*/

// var getKeys = function(object){
// 	keys = [];
// 	return getKeysFunc(object);
// }


var getKeysFunc = function(object, options){
	// if(first){
		
	// }
	
	if(object.constructor == Object){
		if(options.recursive){
			for(var key in object){
				keys.push(key);
				if(object[key].constructor == Object){
					// keys = keys.concat(getKeysFunc(object[key], options));
					keys.push(getKeysFunc(object[key], options));
				}else if(object[key].constructor == Array){
					object[key].forEach(function(eachElem){
						if(eachElem.constructor == Object){
							// keys = keys.concat(getKeysFunc(object[key], options));
							keys.push(getKeysFunc(object[key], options));
						}else if(eachElem.constructor == Array){
							// keys = keys.concat(getKeysFunc(object[key], options));
							keys.push(getKeysFunc(object[key], options));
						}
					})
				}
			}
			first = true;
			// cb(null, keys);
			return keys;
		}else{
			// cb(null, Object.keys(object));
			return Object.keys(object);
		}
		// cb(null, keys);
		return keys;
	}else if (object.constructor == Array){
		object.forEach(function(eachElem){
			if(eachElem.constructor == Object){
				// keys = keys.concat(getKeysFunc(eachElem, options));
				keys.push(getKeysFunc(eachElem, options));
			}else if(eachElem.constructor == Array){
				eachElem.forEach(function(eachInnerElem){
					if(eachInnerElem.constructor == Object){
						// keys = keys.concat(getKeysFunc(eachInnerElem, options));
						keys.push(getKeysFunc(eachInnerElem, options));
					}else if(eachInnerElem.constructor == Array){
						// keys = keys.concat(getKeysFunc(eachInnerElem, options));
						keys.push(getKeysFunc(eachInnerElem, options));
					}
				})
			}
		})
		// cb(null, keys);
		return keys;
	}else{
		// cb('Only Objects are allowed', []);
		throw new Error('Error in Arguments Passed for getKeys()');
		// return;
	}
}


var getKeys = function(object, options){
	// console.log('first time :'  + first);
	keys = [];
	console.log('First');
	// first = false;
	// console.log('first time :'  + first);
	if(arguments.length == 1 && object && object.constructor == Object){
		options = {recursive : false};
	}else if((arguments.length == 2) && object && options && object.constructor == Object && options.constructor == Object){
		
	}else{
		// console.log('')
		// throw new Error('Invalid args for getKeys');
		// if(arguments.length == 0 || arguments.length > 2){
		// 	console.log('Error in number of Args :' + arguments.length + ', args :' + JSON.stringify(arguments));
		// }else if(object){
		// 	console.log('Object : true');
		// }else if(options){
		// 	console.log('Options : true');
		// }
		throw new Error('Error in Arguments Passed for getKeys()s');
	}

	// return getKeysFunc(object, options);
	var objKeys = getKeysFunc(object, options);
	var orgKeys = [];
	for(var key in objKeys){
		if(objKeys[key].constructor == String){
			orgKeys.push(objKeys[key]);
		}
	}
	return orgKeys;
}

module.exports = getKeys;
