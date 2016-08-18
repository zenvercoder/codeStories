$(document).ready(function () {

    var interestChosen;

    $("#interest").click(function () {
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
        var nameElement = $('#name').val();
        // this is the correct way to get the value of a text input field
        var storyElement = $('#interestStory').val();
        console.log('storyElement= ', storyElement);
        console.log('nameElement= ', nameElement);
        console.log('interestChosen= ', interestChosen);


        //var obstacleElement = $('#obstacle');
        var storyLocationElement = $('#storyLocation');

        var newStoryObj = {
            "contact": '',
            "interest": interestChosen,
            "location": storyLocationElement.val(),
            "name": nameElement,
            "obstacle": '',
            "story": storyElement,
        };

        console.log(newStoryObj);


        //$.post( "https://code-stories.firebaseio.com/stories.json", function(data) {
        //    var data = newStoryObj;
        //    console.log(data);
        //});
    });
});


// TODO if user clicks on more than one interest or obstacle, the dom elements below do not disappear or..
// Story + location input fields disappear only if user chooses interest v obstacle (and not a different interest or obstacle)

//TODO: add color style to selected interests or obstacles
//if ($(this).hasClass('formSelected') == true) {
//    console.log('hasClass');
//    $(this).removeClass('formSelected');
//} else {
//    $(this).addClass('formSelected');
//}
