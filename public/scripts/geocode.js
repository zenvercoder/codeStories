$(document).ready(function () {

    // Get the address or place that the user entered.
    var obstacleAddress = document.getElementById('obstacleStoryLocation').value;
    var interestStoryAddress = document.getElementById('interestStoryLocation').value;

    function geoLocate() {
        var address;

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
                    address: address,
                    //you can add a component restriction here like:
                    //componentRestrictions: {locality: 'Denver'}
                }, function (results, status) {
                    //after we get the results, check geocoder status
                    if (status == google.maps.GeocoderStatus.OK) {

                        var pin = makeMarkerIcon('5c2040');
                        // Create a "highlighted location" marker color for when user mouses over marker.
                        var highlightedPin = makeMarkerIcon('f2d9e6');

                        // use resulting lat, lng to re-center the map & zoom in
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(5);


                        //var title = data.coderObstaclesLocations[i].title;

                        //var content = data.coderObstaclesLocations[i].content;

                        // Create marker per location, put into markers array.
                        var marker = new google.maps.Marker({
                            position: position,
                            title: title,
                            content: content,
                            //obstacle: obstacle,
                            animation: google.maps.Animation.DROP,
                            icon: pin,
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
                            this.setIcon(highlightedPin);
                        });
                        marker.addListener('mouseout', function () {
                            this.setIcon(pin);
                        });

                        marker.addListener('click', function () {
                            populateInfoWindow(this, largeInfowindow);
                        });

                    } else {
                        window.alert('We could not find that location - try entering a more' +
                            ' specific place.');
                    }
                });
        }
    }

    console.log(geoLocate());
});
//
////// This function allows the user to input a desired travel time, in
////// minutes, and a travel mode, and a location - and only show results within that travel time (via that travel mode) of the location
////
//////calculates distances and durations of travel between each of our markers and the location the user entered
//        function searchWithinTime() {
//            // Initialize the distance matrix service.
//            var distanceMatrixService = new google.maps.DistanceMatrixService;
//            //capture the user entered address
//            var address = document.getElementById('search-within-time-text').value;
//            // Check to make sure the place entered isn't blank.
//            if (address == '') {
//                window.alert('You must enter an address.');
//            } else {
//                hideGalvanize();
//                // Use the distance matrix service to calculate the duration of the
//                // routes between all our markers, and the destination address entered
//                // by the user. Then put all the origins into an origins array from our list of markers.
//                var origins = [];
//                for (var i = 0; i < markers.length; i++) {
//                    origins[i] = markers[i].position;
//                }
//                //use user-entered address as the destination
//                var destination = address;
//                //capture the travel mode entered by the user
//                var mode = document.getElementById('mode').value;
//                // Now that both the origins and destination are defined, get all the
//                // info for the distances between them by calling the getDistanceMatrix function
//                distanceMatrixService.getDistanceMatrix({
//                    //passing in our origins
//                    origins: origins,
//                    //passing in the single destination
//                    destinations: [destination],
//                    //passing in travel mode
//                    travelMode: google.maps.TravelMode[mode],
//                    //specifying the units should be imperial
//                    unitSystem: google.maps.UnitSystem.IMPERIAL,
//                }, function (response, status) {
//                    //when we get back the response, check to make sure the status is ok
//                    if (status !== google.maps.DistanceMatrixStatus.OK) {
//                        //if status wasn't ok, alert the user with what the status was
//                        window.alert('Error was: ' + status);
//                    } else {
//                        //if status is ok, display all of the markers with the criteria the user entered
//                        //will do this in a separate function since this one is getting huge
//                        displayMarkersWithinTime(response);
//                    }
//                });
//            }
//        }
//
//// We just used the distance matrix. passed in all of our markers, the origins and the user's important place as the destination. Now that we got back the response, we have to parse through it to get the useful data
//// This function will go through each of the results, and,
//// if the distance is LESS than the value in the picker, show it on the map.
//        function displayMarkersWithinTime(response) {
//            // capture user-entered travel duration which was in minutes
//            var maxDuration = document.getElementById('max-duration').value;
//            // recapture all of the origins and destinations from the response
//            var origins = response.originAddresses;
//            var destinations = response.destinationAddresses;
//            // Parse through the results, and get the distance and duration of each.
//            // Because there might be  multiple origins and destinations we have a nested loop
//            // Then, make sure at least 1 result was found.
//            var atLeastOne = false;
//            // nested loop to create one element per origin/destination pair
//            // that element will have a distance and duration from point A to point B
//            for (var i = 0; i < origins.length; i++) {
//                var results = response.rows[i].elements;
//                for (var j = 0; j < results.length; j++) {
//                    var element = results[j];
//                    if (element.status === "OK") {
//                        // The distance is returned in feet, but the TEXT is in miles. If we wanted to switch
//                        // the function to show markers within a user-entered DISTANCE, we would need the
//                        // value for distance, but for now we only need the text.
//                        // capture in text form because we will display it to our users
//                        var distanceText = element.distance.text;
//                        // Duration value is given in seconds so we make it MINUTES. We need both the value
//                        // and the text.
//                        // need the value of the duration which we will compare to our maximum value entered by the user
//                        var duration = element.duration.value / 60;
//                        var durationText = element.duration.text;
//                        // if duration is within that maximum value, then we will display that marker on the map
//                        if (duration <= maxDuration) {
//                            //the origin [i] should = the markers[i]
//                            // display the marker on the map
//                            markers[i].setMap(map);
//                            // keep track of this variable b/c even if we get an OK response from the getDistanceMatrix function, if we don't find any markers that are within the acceptable commute, we wanna let the user know
//                            atLeastOne = true;
//                            // For each marker that does appear, create a mini infowindow to open immediately and contain the
//                            // distance and duration in the infowindow
//                            var infowindow = new google.maps.InfoWindow({
//                                // for each button we make, we will pass in that origin
//                                // the origin that is passed is the address and the destination is the user-entered address
//                                content: durationText + ' away, ' + distanceText +
//                                '<div><input type=\"button\" value=\"View Route\" onclick =' + '\"displayDirections(&quot;' + origins[i] + '&quot;);\"</input></div>'
//                            });
//                            infowindow.open(map, markers[i]);
//                            // Put this in so that this small window closes if the user clicks
//                            // the marker, when the big infowindow opens
//                            markers[i].infowindow = infowindow;
//                            // event listener on that marker so that if the user clicks on it, will close the little infowindow and make room for a big one
//                            google.maps.event.addListener(markers[i], 'click', function () {
//                                this.infowindow.close();
//                            });
//                        }
//                    }
//                }
//            }
//            if (!atLeastOne) {
//                window.alert('We could not find any locations within that distance!');
//            }
//        }