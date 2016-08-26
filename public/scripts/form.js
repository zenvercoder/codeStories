$(document).ready(function () {

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
});

$(document).ready(function () {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyApBPV1BrVOwQMHFNMN_pvUvd_dv7kPFx0",
        authDomain: "code-stories.firebaseapp.com",
        databaseURL: "https://code-stories.firebaseio.com",
        storageBucket: "code-stories.appspot.com",
    };
    firebase.initializeApp(config);

    $.get("https://code-stories.firebaseio.com/stories.json", function (data) {
        console.log(data);
    });

});
