module.exports.filterBeers = function(beers){
	var newbeers = [];
	beers.beers.map(function(el){
		if(el.descript!=""&&el.brewery_id!=""){
			newbeers.push(el);
		}
	});
	return newbeers;
}

function checkCountry(countrys, name){
	
	var country = {
		name:null,
		count: 0
	}
	var flag = true;
	countrys.map(function(el){
		if(el.name===name&&el.name!=undefined){
			flag = false;
			el.count++;
		}
	});
	if(flag){
		var c = country;
		c.name=name;
		c.count++;
		countrys.push(c);
	}
}

module.exports.getCountrys = function(breweries){
	var countrys = [];
	console.log("getCountrys");
	breweries.map(function(el){
		if(el.country!=undefined)
		  checkCountry(countrys,el.country);
	});
	
	return countrys;
}

module.exports.filterBreweriesByCountry = function(breweries, country){
	var newbreweries = [];
	breweries.map(function(el){
		if(el.country===country){
			newbreweries.push(el);
		}
	});
	return newbreweries;
}