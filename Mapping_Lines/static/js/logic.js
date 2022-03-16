// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -102.3790], 4);

let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]

    // [37.6213, -122.3790],
    // [40.7899, -111.9791],
    // [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    //style: dash


  }).addTo(map);
   

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);