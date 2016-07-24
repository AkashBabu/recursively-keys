








var getKeys = function(object, options, cb){
	var keys, first = true;
	if(first){
		keys = [];
		first = false;
		if(arguments.length > 1 && arguments.length < 4){
			if((object && (options instanceof Function)) && arguments.length == 2){
				cb = options;
				options = {recursive : false};
			}else if((object && options && (cb instanceof Function))){

			}else{
				throw new Error('Invalid args for getKeys');
			}
		}else{
			throw new Error('Invalid args for getKeys');
		}
	}
	
	if(object.constructor == Object){
		if(options.recursive){
			for(var key in object){
				keys.push(key);
				if(object[key] instanceof Object){
					getKeys(object[key], options, function(err, obtainedKeys){
						if(!err && (obtainedKeys.length > 0)){
							keys = keys.concat(obtainedKeys);
						}

					})
				}
			}
			first = true;
			cb(null, keys);
			return;
		}else{
			cb(null, Object.keys(object));
			return;
		}
		cb(null, keys);
		return;
	}else{
		cb('Only Objects are allowed', keys);
		return;
	}
}

module.exports = getKeys;
