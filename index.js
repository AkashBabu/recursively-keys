








var keys = [];


var getKeysFunc = function(object, options){
	if(object.constructor == Object){
		if(options.recursive){
			for(var key in object){
				keys.push(key);
				if(object[key].constructor == Object){
					keys.push(getKeysFunc(object[key], options));
				}else if(object[key].constructor == Array){
					object[key].forEach(function(eachElem){
						if(eachElem.constructor == Object){
							keys.push(getKeysFunc(object[key], options));
						}else if(eachElem.constructor == Array){
							keys.push(getKeysFunc(object[key], options));
						}
					})
				}
			}
			first = true;
			return keys;
		}else{
			return Object.keys(object);
		}
		return keys;
	}else if (object.constructor == Array){
		object.forEach(function(eachElem){
			if(eachElem.constructor == Object){
				keys.push(getKeysFunc(eachElem, options));
			}else if(eachElem.constructor == Array){
				eachElem.forEach(function(eachInnerElem){
					if(eachInnerElem.constructor == Object){
						keys.push(getKeysFunc(eachInnerElem, options));
					}else if(eachInnerElem.constructor == Array){
						keys.push(getKeysFunc(eachInnerElem, options));
					}
				})
			}
		})
		return keys;
	}else{
		throw new Error('Error in Arguments Passed for getKeys()');
	}
}


var getKeys = function(object, options){
	keys = [];
	if(arguments.length == 1 && object && object.constructor == Object){
		options = {recursive : false};
	}else if(!((arguments.length == 2) && object && options && object.constructor == Object && options.constructor == Object)){
		throw new Error('Error in Arguments Passed for getKeys()s');
	}

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
