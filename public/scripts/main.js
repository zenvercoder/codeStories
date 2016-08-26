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
        zoom: 2,
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
        zoom: 2,
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
        });

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

    var interestChosen;

    $("#interest").click(function () {
        $("#obstacle").removeClass("btn-primary").addClass("btn-info");
        $(this).removeClass("btn-info").addClass("btn-primary");
        $(".obstacleList").css("display", "none");
        hideForm();
        $(".interestList").toggle("slow", function () {
            // Animation complete.
        });
    });

    $(".interestsOptions").click(function () {

        interestChosen = $(this).attr('id');
        var interestText = $(this).text();

        $('.interestChosenSentence').text('How has ' + interestText + ' brought you to coding?');
        $(".interestStoryField").toggle("slow", function () {
            // Animation complete.
        });
        $(".imgUpload").toggle("slow", function () {
            // Animation complete.
        });
    });

    $("#obstacle").click(function () {
        $("#interest").removeClass("btn-primary").addClass("btn-info");
        $(this).removeClass("btn-info").addClass("btn-primary");
        $(".interestList").css("display", "none");
        hideForm();
        $(".obstacleList").toggle("slow", function () {
            // Animation complete.
        });

    });

    $(".obstaclesOptions").click(function () {
        $(".obstacleStoryField").toggle("slow", function () {
            // Animation complete.
        });
        $(".imgUpload").toggle("slow", function () {
            // Animation complete.
        });
    });

    function hideForm() {
        $(".interestStoryField").css("display", "none");
        $(".obstaclessOptions").css("display", "none");
        $(".obstacleStoryField").css("display", "none");
        $(".imgUpload").css("display", "none");

    };

    $('#submit').on('click', function (e) {
        //Submit must have preventDefault to prevent page postback
        e.preventDefault();
        // get elements
        var nameElement = $('#name').val();
        // this is the correct way to get the value of a text input field
        var storyElement = $('#interestStory').val();
        var interestStoryLocation = $('#interestStoryLocation');
        //
        //
        //
        //
        // Get the address or place that the user entered.
        var obstacleAddress = document.getElementById('obstacleStoryLocation').value;
        var interestStoryAddress = document.getElementById('interestStoryLocation').value;

        var address;
        var lat;
        var lng;

        function geoLocate() {

            // Initialize the geocoder, create new geocoder instance
            var geocoder = new google.maps.Geocoder();

            //var destination = address;
            if (obstacleAddress == '') {
                address = interestStoryAddress;
            }
            else {
                address = obstacleAddress;
            }

            // Make sure the address isn't blank.
            if (address == '') {
                window.alert('You must enter an area or address.');
            } else {
                // Geocode the address.
                geocoder.geocode(
                    {
                        address: address
                        //you can add a component restriction here like:
                        //componentRestrictions: {locality: 'Denver'}
                    }, function (results, status) {
                        //after we get the results, check geocoder status
                        if (status == google.maps.GeocoderStatus.OK) {
                            console.log("address= ", address);
                            //console.log('results[0].geometry.location.lat()= ', results[0].geometry.location.lat());
                            lat = results[0].geometry.location.lat();
                            lng = results[0].geometry.location.lng();

                            var newStoryObj = {
                                //"contact": {
                                //    "name": '',
                                //    "email": '',
                                //    "github": '',
                                //    "linkedIn": '',
                                //    "codePen": ''
                                //},
                                "interest": interestChosen,
                                "location": {
                                    "lat": lat,
                                    "lng": lng

                                },
                                "address": address,
                                "name": nameElement,
                                "obstacle": '',
                                "story": storyElement,
                                "img": 'url'
                            };

                            //console.log("newStoryObj.location.lat= ", newStoryObj.location.lat);
                            console.log("newStoryObj= ", newStoryObj);

                            // Firebase is a global var, only init one time!!!
                            var dbRef = firebase.database().ref();
                            var storiesRef = dbRef.child('customStories');

                            // when data is added, this function will get called
                            storiesRef.on("child_added", function (snap) {
                                console.log("new story added: " + JSON.stringify(snap.val()));
                            //    navigate to map with the id as a url parameter
                            //    codestories&id=the hash from firebase. retrieve with javascript
                            });

                            // This causes the firebase update
                            storiesRef.push(newStoryObj);

                        } else {
                            window.alert('We could not find that location - try entering a more' +
                                ' specific place.');
                        }
                    });
            }
        }

        geoLocate();
    });

//
//
//
//
//
//
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyApBPV1BrVOwQMHFNMN_pvUvd_dv7kPFx0",
        authDomain: "code-stories.firebaseapp.com",
        databaseURL: "https://code-stories.firebaseio.com",
        storageBucket: "code-stories.appspot.com",
    };
    firebase.initializeApp(config);

    initMap();

    //https://code-stories.firebaseio.com/stories.json?print=pretty
    //GET

    $.get( "https://code-stories.firebaseio.com/stories.json", function( data ) {
       //stories = data;
        console.log(data);
    });

});



