var express = require('express');
var router = express.Router();
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('d7d54b992833aa6dc7c1478cb6833f70');

var fetch = require('node-fetch')
var jsonfile = require('jsonfile')
var file = './routes/beers.json'

var logic = require('../public/javascripts/logic.js');

var brewerie = null;
var beer = null;
var categorie = null;
var newbeers = null;
var countrys = null;

/* GET home page. */

router.get('/getBeer', function(req, res, next) {

    var beer = null;
    // /beer/:beerId
    brewdb.style.all(function(error,data){
      beer=data;
        res.render('getBeer', { data: beer });
    });

});

router.get('/', function(req, res, next) {

    var beer = null;
    // /beer/:beerId
    brewerie = JSON.parse(fs.readFileSync('./routes/breweries.json','utf8'))
    beer = JSON.parse(fs.readFileSync('./routes/beers.json', 'utf8'));
    categorie = JSON.parse(fs.readFileSync('./routes/categories.json','utf8'))
    newbeers = logic.filterBeers(beer);
    countrys = logic.getCountrys(brewerie);

    res.render('index', { title:"Welcome", data:{countrys}});
});
var json = require('json-file');
var fs = require('fs');

// Load a JSON file
//var file = json.read('./beers.json');

router.get('/getBeers', function (req,res,next) {
    var brewery_id = req.query.brewery_id;
    if(brewery_id!=undefined||brewery_id!=null){
        var data = logic.filterBeersByBrewerie(newbeers, brewery_id);
        console.log(data);
        res.render('getBeers',{beers:data,breweries:brewerie,categories:categorie})
    }
    else{
         res.render('getBeers',{beers:newbeers,breweries:brewerie,categories:categorie})
    }
})

router.get('/getBreweries', function (req,res,next) {
    var country = req.query.country;
    console.log(country);
    if(country!=undefined){
        var data = logic.filterBreweriesByCountry(brewerie, country);
        res.render('getBreweries',{breweries:data});
    }
    else
        res.render('getBreweries',{breweries:brewerie})
})

module.exports = router;
