var express = require('express');
var router = express.Router();
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('d7d54b992833aa6dc7c1478cb6833f70');

var fetch = require('node-fetch')
var jsonfile = require('jsonfile')
var file = './routes/beers.json'


/* GET home page. */
router.get('/', function(req, res, next) {

    var beer = null;
    // /beer/:beerId

    brewdb.style.all(function(error,data){
      beer=data;
        res.render('index', { data: beer });
    });


});
var json = require('json-file');
var fs = require('fs');

// Load a JSON file
//var file = json.read('./beers.json');

router.get('/getBeers', function (req,res,next) {

    var brewerie=JSON.parse(fs.readFileSync('./routes/breweries.json','utf8'))
    var beer = JSON.parse(fs.readFileSync('./routes/beers.json', 'utf8'));
    var categorie=JSON.parse(fs.readFileSync('./routes/categories.json','utf8'))
    console.log(brewerie);

    res.render('getBeers',{beers:beer.beers,breweries:brewerie,categories:categorie})

})
router.get('/getBreweries', function (req,res,next) {

    var brewerie=JSON.parse(fs.readFileSync('./routes/breweries.json','utf8'))
    var beer = JSON.parse(fs.readFileSync('./routes/beers.json', 'utf8'));
    var categorie=JSON.parse(fs.readFileSync('./routes/categories.json','utf8'))
    console.log(brewerie);

    res.render('getBreweries',{breweries:brewerie})

})

module.exports = router;
