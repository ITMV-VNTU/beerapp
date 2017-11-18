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

    res.render('index', { countries:countrys });
    console.log(countrys)
});
var json = require('json-file');
var fs = require('fs');

// Load a JSON file
//var file = json.read('./beers.json');

router.get('/getBeers', function (req,res,next) {
    console.log(countrys);
    res.render('getBeers',{beers:newbeers,breweries:brewerie,categories:categorie})
})

router.get('/getBreweries', function (req,res,next) {
    //var country = req.qu
    res.render('getBreweries',{breweries:brewerie})

})



module.exports = router;
