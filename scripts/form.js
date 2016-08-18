$(document).ready(function () {


    $("#interest").click(function () {
        $(".obstacleList").css("display", "none");
        hideForm();
        $(".interestList").toggle("slow", function () {
            // Animation complete.
        });
    });

    $(".interestsOptions").click(function () {
        $(".interestStoryField").toggle("slow", function () {
            // Animation complete.
        });

        $(".imgUpload").toggle("slow", function () {
            // Animation complete.
        });
    });

    $("#obstacle").click(function () {
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

    function hideForm(){
        $(".interestStoryField").css("display", "none");
        $(".obstaclessOptions").css("display", "none");
        $(".obstacleStoryField").css("display", "none");
        $(".imgUpload").css("display", "none");

    };


    // to toggle:
    // interestList
    // interestStoryField
    // interestStoryLocation
    // obstacleList
    // obstacleStoryField
    // obstacleStoryLocation
    // progress


    $('#submit').on('click', function () {
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
    });
});


