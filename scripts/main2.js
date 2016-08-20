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

