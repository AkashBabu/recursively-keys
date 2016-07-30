








var keys = [];


var getKeysFunc = function(object, options){
	if(object.constructor == Object){
		if(options.recursive){
			for(var key in object){
				keys.push(key);
				if(object[key].constructor == Object || object[key].constructor == Array){
					keys.push(getKeysFunc(object[key], options));
				}
			}
		}else{
			keys =  Object.keys(object);
		}
	}else if (object.constructor == Array){
		object.forEach(function(eachElem){
			if(eachElem.constructor == Object || eachElem.constructor == Array){
				keys.push(getKeysFunc(eachElem, options));
			}
		})
	}else{
		throw new Error('Error in Arguments Passed for getKeys()');
	}
	return keys;
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
