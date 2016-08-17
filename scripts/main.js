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
        center: {lat: 38.7576313, lng: -95.0092089},
        zoom: 3,
        styles: data.styles,
        mapTypeControl: false
    });

    largeInfowindow = new google.maps.InfoWindow();
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

$('#whatCodersLike').on('click', allInterests);

function allInterests() {

    var interestIcon = makeMarkerIcon('5c2040');
    // highlighted marker color when user mouses over marker.
    var highlightedInterestIcon = makeMarkerIcon('f2d9e6');

    // Use location array to create array of markers on initialize.
    for (var i = 0; i < data.coderLocations.length; i++) {

        let coderLocation = data.coderLocations[i];
        // Get the position from the location array.
        var position = coderLocation.location;

        var interest = coderLocation.interest;

        //get title from location array
        var title = data.coderLocations[i].title;

        var content = data.coderLocations[i].content;
        // Create marker per location, put into markers array.
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            content: content,
            interest: interest,
            animation: google.maps.Animation.DROP,
            icon: interestIcon,
            id: i
        });

        marker.setMap(map);
        // Push the marker to our array of markers.
        coderMarkers.push(marker);
        //Onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });

        // change on mouse hover
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedInterestIcon);
        });
        marker.addListener('mouseout', function () {
            this.setIcon(interestIcon);
        });
    }
}

$('.interestsOptions').on('click', interests);

function interests() {

    var interestVariable = this.attributes["id"].value;

    var index = interestsArray.indexOf(interestVariable);

    //if the interest is not already in the array
    if (index < 0) {
        $(this).addClass("selected");
        // put interest in the array
        interestsArray.push(interestVariable);
    }
    else {
        $(this).removeClass("selected");
        //else if the interest is already on the array, remove it from the array
        interestsArray.splice(index, 1);
    }

    var interestIcon = makeMarkerIcon('5c2040');
    // Create a "highlighted location" marker color for when user mouses over marker.
    var highlightedInterestIcon = makeMarkerIcon('f2d9e6');

    // Use location array to create array of markers on initialize.
    for (var i = 0; i < data.coderLocations.length; i++) {

        let coderLocation = data.coderLocations[i];
        // Get the position from the location array.
        var position = coderLocation.location;

        var interest = coderLocation.interest;

        // if coderLocation.interest is not in interestsArray, go to next part of loop
        if (interestsArray.indexOf(coderLocation.interest) < 0) {
            continue;
        }
        // if coderLocation.interest is in the interests Array, set the title for the new marker
        else if (interestsArray.indexOf(coderLocation.interest) >= 0) {
            //get title from location array
            var title = data.coderLocations[i].title;

            var content = data.coderLocations[i].content;
            // Create marker per location, put into markers array.
            var marker = new google.maps.Marker({
                position: position,
                title: title,
                content: content,
                interest: interest,
                animation: google.maps.Animation.DROP,
                icon: interestIcon,
                id: i
            });

            marker.setMap(map);
            // Push the marker to our array of markers.
            coderMarkers.push(marker);
            //Onclick event to open an infowindow at each marker.
            marker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            });
            // change on mouse hover
            marker.addListener('mouseover', function () {
                this.setIcon(highlightedInterestIcon);
            });
            marker.addListener('mouseout', function () {
                this.setIcon(interestIcon);
            });
        }
    }
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

$('.obstaclesOptions').on('click', obstacles);

function obstacles() {

    var obstacleVariable = this.attributes["id"].value;

    var index = obstaclesArray.indexOf(obstacleVariable);

    if (index < 0) {
        $(this).addClass("selected");
        obstaclesArray.push(obstacleVariable);
    }
    else {
        $(this).removeClass("selected");
        obstaclesArray.splice(index, 1);
        //marker.setMap(null);
    }

    var obstacleIcon = makeMarkerIcon('5c2040');
    // Create a "highlighted location" marker color for when user mouses over marker.
    var highlightedInterestIcon = makeMarkerIcon('f2d9e6');

    // Use location array to create array of markers on initialize.
    for (var i = 0; i < data.coderObstaclesLocations.length; i++) {

        let obstaclesLocations = data.coderObstaclesLocations[i];
        // Get the position from the location array.
        var position = obstaclesLocations.location;

        var obstacle = obstaclesLocations.obstacle;

        if (obstaclesArray.indexOf(obstaclesLocations.obstacle) < 0) {
            continue;
        }
        else if (obstaclesArray.indexOf(obstaclesLocations.obstacle) >= 0) {
            //get title from location array
            var title = data.coderObstaclesLocations[i].title;

            var content = data.coderObstaclesLocations[i].content;

            // Create marker per location, put into markers array.
            var marker = new google.maps.Marker({
                position: position,
                title: title,
                content: content,
                obstacle: obstacle,
                animation: google.maps.Animation.DROP,
                icon: obstacleIcon,
                id: i
            });

            marker.setMap(map);
            // Push the marker to our array of markers.
            coderObstaclesMarkers.push(marker);
            // Onclick event to open an infowindow at each marker.
            marker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            });
            marker.addListener('mouseover', function () {
                this.setIcon(highlightedInterestIcon);
            });
            marker.addListener('mouseout', function () {
                this.setIcon(obstacleIcon);
            });

            marker.addListener('click', function () {
                populateInfoWindow(this, largeInfowindow);
            });
        }
    }
}

$('#coderObstacles').on('click', allObstacles);

function allObstacles() {
    var obstacleIcon = makeMarkerIcon('5c2040');
    // Create a "highlighted location" marker color for when user mouses over marker.
    var highlightedInterestIcon = makeMarkerIcon('f2d9e6');

    // Use location array to create array of markers on initialize.
    for (var i = 0; i < data.coderObstaclesLocations.length; i++) {

        let obstaclesLocations = data.coderObstaclesLocations[i];
        // Get the position from the location array.
        var position = obstaclesLocations.location;

        var obstacle = obstaclesLocations.obstacle;

        var title = data.coderObstaclesLocations[i].title;

        var content = data.coderObstaclesLocations[i].content;

        // Create marker per location, put into markers array.
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            content: content,
            obstacle: obstacle,
            animation: google.maps.Animation.DROP,
            icon: obstacleIcon,
            id: i
        });

        marker.setMap(map);
        // Push the marker to our array of markers.
        coderObstaclesMarkers.push(marker);
        // Onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedInterestIcon);
        });
        marker.addListener('mouseout', function () {
            this.setIcon(obstacleIcon);
        });

        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
    }
}


$('.random').on('click', randomStory);

function randomStory() {

    var randoIcon = makeMarkerIcon('5c2040');
    // Create a "highlighted location" marker color for when user mouses over marker.
    var highlightedRandoIcon = makeMarkerIcon('f2d9e6');

    // number btwm 1-2
    var whichArray = Math.floor(Math.random() * (2) + 1);

    if (whichArray == 1) {
        var max = data.coderLocations.length;
        var whichObject = (Math.floor(Math.random() * (max) + 1)) - 1;
        var randomInterestObject = data.coderLocations[whichObject];
        //console.log(randomInterestObject);

        var randoInterestPosition = randomInterestObject.location;

        var randoInterest = randomInterestObject.obstacle;

        var randoInterestTitle = randomInterestObject.title;

        var randoInterestContent = randomInterestObject.content;

        // Create marker per location, put into markers array.
        var marker = new google.maps.Marker({
            position: randoInterestPosition,
            title: randoInterestTitle,
            content: randoInterestContent,
            obstacle: randoInterest,
            animation: google.maps.Animation.DROP,
            icon: randoIcon,
            id: whichObject
        });

        marker.setMap(map);
        // Push the marker to our array of markers.
        coderMarkers.push(marker);
        // Onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedRandoIcon);
        });
        marker.addListener('mouseout', function () {
            this.setIcon(randoIcon);
        });

    }
    else if (whichArray == 2) {
        var maxObs = data.coderObstaclesLocations.length;
        var whichObsObject = (Math.floor(Math.random() * (maxObs) + 1)) - 1;
        console.log('whichObsObject=', whichObsObject);
        var randomObsObject = data.coderObstaclesLocations[whichObsObject];

        var randoObsPosition = randomObsObject.location;

        var randoObstacle = randomObsObject.obstacle;

        var randoObsTitle = randomObsObject.title;

        var randoObsContent = randomObsObject.content;

        // Create marker per location, put into markers array.
        var marker = new google.maps.Marker({
            //position: randoObsPosition,
            position: randoObsPosition,
            title: randoObsTitle,
            content: randoObsContent,
            obstacle: randoObstacle,
            animation: google.maps.Animation.DROP,
            icon: randoIcon,
            id: whichObsObject
        });``

        marker.setMap(map);
        // Push the marker to our array of markers.
        coderObstaclesMarkers.push(marker);
        // Onclick event to open an infowindow at each marker.
        marker.addListener('click', function () {
            populateInfoWindow(this, largeInfowindow);
        });
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedRandoIcon);
        });
        marker.addListener('mouseout', function () {
            this.setIcon(randoIcon);
        });
    }
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
    var bigOne = document.getElementById('bigOne');
// create a database reference and create a child location to the text location
    var dbRef = firebase.database().ref().child('text');
// synchronize using on function. Using ES2015 arrow function, I can do it all in one line
    dbRef.on('value', snap => bigOne.innerText = snap.val());

// go to firebase console. database > rules > remove all security by setting read and write to true
// publish. it will say: "Your security rules are defined as public, anyone can read or write to your database"
// only have it set to true while you're developing because anyone can read or write to your database

    initMap();

    //https://code-stories.firebaseio.com/stories.json?print=pretty
    //GET

    // Create a new XMLHttpRequest object to start
    var storiesRequest = new XMLHttpRequest();

// Create a function that is called when the request status has changed
    storiesRequest.onreadystatechange = function () {
        // When the readyState is 4 that means the request has completed
        if (this.readyState == 4 && this.status == 200) {
            // We know the data is JSON, so let's parse it to JS
            var storiesRetrieved = JSON.parse(this.responseText);
            // And now we can consume the data from Reddit. :)
            console.log(storiesRetrieved);


        }
    }

// Tell the XMLHttpRequest where you want it to go and how
    storiesRequest.open('GET', 'https://code-stories.firebaseio.com/stories.json?print=pretty');

// Send it off! Good luck little XMLHttpRequest! :D
    storiesRequest.send();

});

