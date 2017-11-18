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
		c.name = name;
		c.count++;
		countrys.push(c);
	}
}

function sortCountries(countrys){

	countrys.sort(function(a,b){
        var countA = a.count; 
        var countB = b.count; 
        if (countA > countB) {
            return -1;
        }
        if (countA < countB) {
            return 1;
        }
        // names must be equal
        return 0;
	});
	console.log(countrys);
	return countrys;
}

module.exports.getCountrys = function(breweries){
	var countrys = [];
	breweries.map(function(el){
		if(el.country!=undefined||el.country!='')
		  checkCountry(countrys,el.country);
	});
	countrys = sortCountries(countrys);
	return countrys;
}

module.exports.filterBreweriesByCountry = function(breweries, country){
	var newbreweries = [];
	if(breweries!=null){
		
        breweries.map(function(el){
		    
		    if(el.country===country){
			    newbreweries.push(el);
		    }
	    });
	}
	else{
		console.log("breweries is null");
	}
	
	return newbreweries;
}

module.exports.filterBeersByBrewerie = function(beers, brewery_id){
	var newbeers = [];
	if(beers!=null){
		beers.map(function(el){
			if(el.brewery_id === brewery_id){
				newbeers.push(el);
			}
		});
	}
	else{
		console.log("no Beers");
	}
	return newbeers;
}