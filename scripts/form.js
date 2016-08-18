$(document).ready(function () {


    $("#interest").click(function () {
        $(".obstacleList").css("display", "none");
        hideForm();
        $(".interestList").toggle("slow", function () {
            // Animation complete.
        });
    });

    $(".interestsOptions").click(function () {

        var interestChosen = $(this).attr('id');
        console.log("this= ", this);

        if ($(this).hasClass('formSelected') == true) {
            console.log('hasClass');
            $(this).removeClass('formSelected');
        } else {
            $(this).addClass('formSelected');
        }

        console.log(interestChosen);


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

    function hideForm() {
        $(".interestStoryField").css("display", "none");
        $(".obstaclessOptions").css("display", "none");
        $(".obstacleStoryField").css("display", "none");
        $(".imgUpload").css("display", "none");

    };


    $('#submit').on('click', function () {

        // get elements
        var nameElement = $('#name');
        // this is the correct way to get the value of a text input field


        console.log(nameElement.val());
        var interestElement = $('#interest');
        var obstacleElement = $('#obstacle');
        var storyElement = $('#story');
        var storyLocationElement = $('#storyLocation');

        console.log(storyElement.val(), storyLocationElement.val());

        var newStoryObj = {
            "name": nameElement.val(),
            "story": storyElement.val(),
            "location": storyLocationElement.val(),


        };

        console.log(newStoryObj);


        //$.post( "https://code-stories.firebaseio.com/stories.json", function(data) {
        //    var data = newStoryObj;
        //    console.log(data);
        //});
    });
});


