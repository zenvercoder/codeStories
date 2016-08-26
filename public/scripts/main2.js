var map;
var galvanizeMarkers = [];
var interestsArray = [];
var coderMarkers = [];
var obstaclesArray = [];
var coderObstaclesMarkers = [];
var largeInfowindow;


function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.192731, lng: -11.777344},
        zoom: 2,
        styles: data.styles,
        mapTypeControl: false
    });

    largeInfowindow = new google.maps.InfoWindow();
}

$('.colorsOptions').on('click', addStyle);

function addStyle() {
    $('.colorsOptions').removeClass("selected");
    $(this).addClass("selected");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.7576313, lng: -95.0092089},
        zoom: 4,
        styles: data.styles[$(this).attr('mapstyle')],
        mapTypeControl: false
    });
}


//// Populate infowindow when marker clicked. Only one infowindow which will open at the marker that is clicked, and populate based on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        // Clear infowindow content to give the streetview time to load.
        infowindow.setContent(marker.content);
        infowindow.marker = marker;
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function () {
            infowindow.marker = null;
        });
        infowindow.open(map, marker);
    }
}

function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
        '|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21, 34));
    return markerImage;
}

// This function will loop through the markers array and display them all.
function showGalvanize() {

    var galvanizeIcon = 'https://135c1.https.cdn.softlayer.net/80135C1/media/v1/AUTH_d0619b05-07fc-49f0-8249-da585ea45ce5/cache/6b/39/6b39c116b9cef09c8730f178ab38f5d9.png';

    // Use location array to create array of markers on initialize.
    for (var i = 0; i < data.galvanizeLocations.length; i++) {
        // Get the position from the location array.
        var position = data.galvanizeLocations[i].location;
        //get title from location array
        var title = data.galvanizeLocations[i].title;
        // Create marker per location, put into markers array.
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            //the the markers hit the floor, let the markers hit the.... floooooooorrrrr!!!
            animation: google.maps.Animation.DROP,
            icon: galvanizeIcon,
            id: i
        });
        // Push the marker to our array of markers.
        galvanizeMarkers.push(marker);
        // Onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
    }

    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < galvanizeMarkers.length; i++) {
        galvanizeMarkers[i].setMap(map);
        bounds.extend(galvanizeMarkers[i].position);
    }
    map.fitBounds(bounds);
}

// This function will loop through the Galvanizes and hide them all.
function hideGalvanize() {
    for (var i = 0; i < galvanizeMarkers.length; i++) {
        galvanizeMarkers[i].setMap(null);
    }
}

document.getElementById('showGalvanize').addEventListener('click', showGalvanize);
document.getElementById('hideGalvanize').addEventListener('click', hideGalvanize);

// this will run when everything has been loaded. It won't run until other scripts have loaded
$(document).ready(function() {


// Initialize Firebase
    var config = {
        apiKey: "AIzaSyApBPV1BrVOwQMHFNMN_pvUvd_dv7kPFx0",
        authDomain: "code-stories.firebaseapp.com",
        databaseURL: "https://code-stories.firebaseio.com",
        storageBucket: "code-stories.appspot.com",
    };
    firebase.initializeApp(config);



    //https://code-stories.firebaseio.com/stories.json?print=pretty
    //GET

    $.get( "https://code-stories.firebaseio.com/stories.json", function( data ) {
        //stories = data;
        console.log(data);
    });

    //$(".dropdown-button").dropdown();
    initMap();

});

