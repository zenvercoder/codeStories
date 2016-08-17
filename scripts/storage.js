// Initialize Firebase
//var config = {
//    apiKey: "AIzaSyApBPV1BrVOwQMHFNMN_pvUvd_dv7kPFx0",
//    authDomain: "code-stories.firebaseapp.com",
//    databaseURL: "https://code-stories.firebaseio.com",
//    storageBucket: "code-stories.appspot.com",
//};
//firebase.initializeApp(config);

var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// Listen for file selection
// whenever a file is uploaded, it will call this function
fileButton.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // Create a storage ref foldername, file name
    //firebase.storage().ref('folder_name/file_name');
    // create a file from the file's name then store the reference into a variable so I can upload the file to this location
    var storageRef = firebase.storage().ref('coder_images/' + file.name);

    // Upload file. Call the put method and pass in the file
    // the put method will upload the file to firebase storage
    // the put method returns upload task and this is how we will update the progress bar
    var task = storageRef.put(file);

    // Update progress bar. the on() method allows us to specify what event ('state_changed')
    // will listen to 3 types of state changes which are represented by functions
    task.on('state_changed',

        // this is what we are going to use to update the progress bar
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred /
                snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },

        // check for error
        function error(err) {

        },

        function complete() {

        }
    );
});
