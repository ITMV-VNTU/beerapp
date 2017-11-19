console.log("map.js");
var map;
function initMap(){
    console.log("Init")
    map = new google.maps.Map(document.getElementById('map'), {
        center:{lat:-34.397, lng: 150.644},
        zoom: 8
     });
}