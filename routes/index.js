var express = require('express');
var router = express.Router();
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('d7d54b992833aa6dc7c1478cb6833f70');

var fetch = require('node-fetch')
var jsonfile = require('jsonfile')
var file = './beers.json'


/* GET home page. */
router.get('/', function(req, res, next) {

    var beer = null;
    // /beer/:beerId

    brewdb.style.all(function(error,data){
      beer=data;
        res.render('index', { data: beer });
    });


});
router.get('/getBeers', function (req,res,next) {
    jsonfile.readFile(file, function(err, obj) {
        console.log(obj)
        res.render('getBeers',{data:obj})
    })
})

module.exports = router;
