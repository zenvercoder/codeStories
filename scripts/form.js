
$(document).ready(function() {

    $('#submit').on('click', function(){
        // get elements
        var nameElement = $('#name');
        var interestElement = $('#interest');
        var obstacleElement = $('#obstacle');
        var storyElement = $('#story');
        var storyLocationElement = $('#storyLocation');

        var newStoryObj = {
            "name": nameElement.val(),
            "story": storyElement.val(),
            "location": storyLocationElement.val(),
        }

        console.log(newStoryObj);


        //$.post( "https://code-stories.firebaseio.com/stories.json", function(data) {
        //    var data = newStoryObj;
        //    console.log(data);
        //});


        //console.log(nameElement);

        //var interest = document.getElementById('interest');
        //var obstacle = document.getElementById('obstacle');
        //var story = document.getElementById('story');
        //var storyLocation = document.getElementById('storyLocation');
    });
});


// create an object literal using those values.




// create a database reference and create a child location to the text location
// referencing database, creating a child
// in the last paren is the key
//var dbRefObject = firebase.database().ref().child('name');

// synchronize using on function. Using ES2015 arrow function, I can do it all in one line
// event controls when callback function called. value will be called every time there is a change at this location in the database
// data snapshot also returns keyname and ways to iterate... a bunch of stuf

//dbRefObject.on('value', snap => console.log(snap.val()));

//    function sendData() {
//        var userInfo = new XMLHttpRequest();
//
//        // We bind the FormData object and the form element
//        var FD = new FormData(form);
//        console.log(FD);
//
//        // We define what will happen if the data are successfully sent
//        userInfo.addEventListener("load", function (event) {
//            console.log('alert(event.target.responseText)')
//            alert(event.target.responseText);
//        });
//
//        // We define what will happen in case of error
//        userInfo.addEventListener("error", function (event) {
//            alert('Oops! Something goes wrong.');
//        });
//
//        // We setup our request
//        userInfo.open("POST", "https://code-stories.firebaseio.com/stories.json");
//
//        // The data sent are the one the user provide in the form
//        userInfo.send(FD);
//    }
//
//    // We need to access the form element
//    var form = document.getElementById("coderForm");
//
//    // to takeover its submit event.
//    form.addEventListener("submit", function (event) {
//        event.preventDefault();
//
//        sendData();
//    });
//});
//


////

//// this will run when everything has been loaded. It won't run until other scripts have loaded
//$( document ).ready(function() {
//
//    document.getElementById("submit").onclick = function() {
//        console.log("click");
//        makeRequest('https://code-stories.firebaseio.com/stories', name);
//    };
//
//    function sendData(data){
//        var codeStoryInput = new XMLHttpRequest();
//        var urlEncodedData = "";
//        var urlEncodedDataPairs = [];
//        //var name;
//
//        for(name in data) {
//            urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
//        }
//
//
//        httpRequest.onreadystatechange = alertContents;
//        httpRequest.open('POST', url);
//        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//        httpRequest.send('name=' + encodeURIComponent(name));
//    }
//
//
//    // Tell the XMLHttpRequest where you want it to go and how
//    codeStoryInput.open('POST', 'https://code-stories.firebaseio.com/stories');
//
//    // Send it off! Good luck little XMLHttpRequest! :D
//    codeStoryInput.send();
//
//});


//var bigOne = document.getElementById('bigOne');
// create a database reference and create a child location to the text location
//    var dbRef = firebase.database().ref().child('text');
// synchronize using on function. Using ES2015 arrow function, I can do it all in one line
//    dbRef.on('value', snap => bigOne.innerText = snap.val());


// We know the data is JSON, so let's parse it to JS
//makeRequest('https://code-stories.firebaseio.com/stories.json', name);


//codeStoryInput.onreadystatechange = alertContents;
//codeStoryInput.open('POST', url);
//codeStoryInput.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//codeStoryInput.send('name=' + encodeURIComponent(name));
//}

//function alertContents() {
//    if (codeStoryInput.readyState === XMLHttpRequest.DONE) {
//        if (codeStoryInput.status === 200) {
//            var response = JSON.parse(codeStoryInput.responseText);
//            console.log("alert response.computedString");
//            alert(response.computedString);
//        } else {
//            console.log("alert response.computedString");
//            alert('There was a problem with the request.');
//        }
//    }
//}

//
//// Create a function that is called when the request status has changed
//codeStoryInput.onreadystatechange = function () {
//    // When the readyState is 4 that means the request has completed
//    if (this.readyState == 4 && this.status == 200) {
//
//
//        console.log('name= ', name);
//    }
//};