var express = require('express');
var router = express.Router();
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('d7d54b992833aa6dc7c1478cb6833f70');

var fetch = require('node-fetch')


/* GET home page. */
router.get('/', function(req, res, next) {

    var beer = null;
    // /beer/:beerId

    brewdb.style.all(function(error,data){
      beer=data;
        //console.log(data)
        fetch('http://api.brewerydb.com/v2/breweries?key=d7d54b992833aa6dc7c1478cb6833f70',{
            method:'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Origin': '',
                'Host': 'api.producthunt.com'
                }
            }).then(function (response) {
            console.log(response)
            return response.json()
                .then(function (data) {
                    console.log(data)
                })
        })
        res.render('index', { data: beer });
    });


});

module.exports = router;
