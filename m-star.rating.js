/*!
 * Jquery Bootstrap Rating v0.0.1-beta
 * Copyright 2018-2019 Muzafar Hasan
 * JQuery Required 2.xx
 * Fontawesome Required 4.xx * 
 */

/* Example Usage:
* Include CSS and JS file
* Declare a Span with an id
  <span id="exampleid"></span>
* Call JQuery method to create
  $("#exampleid").StarRating(StarCount, StarSize);
* Call jQuery method to get value
  $("#exampleid").GetStarRating();
* Call jQuery method to set value
  $("#exampleid").SetStarRating(StarCount);
*/

(function ($) {
    $.fn.StarRating = function (starCount, starSize) {
        var ObjStarRating = $(this);
        if (starCount < 0) {
            return console.log("Star count must be greater then zero");
        }
        else if (starCount > 100) {
            return console.log("Star count must be less then 100");
        }
        
        switch (starSize) {
            case 1:
                starSize = " fa-lg";
                break;
            case 2:
                starSize = " fa-2x";
                break;
            case 3:
                starSize = " fa-3x";
                break;
            case 4:
                starSize = " fa-4x";
                break;
            case 5:
                starSize = " fa-5x";
                break;
            default:
                starSize = "";
        }

        $(ObjStarRating).empty();
        $(ObjStarRating).addClass("user-rating");
        $(ObjStarRating).attr('data-starrating', 0);
        $(ObjStarRating).data('starrating', 0);

        for (var i = 1; i <= starCount; i++) {
            $(this).append('<a class="rate-user" href="javascript:void(0)"><i data-rating="' + i + '" class="fa fa-star-o' + starSize + '"></i></a>');
        }

        $(".rate-user").click(function () {
            var ratingValue = $(this).children().data('rating');
            $(this).parent().data('starrating', ratingValue);

            var ratingObj = $(this).parent().children();

            for (var j = 0; j < ratingObj.length; j++) {
                $(ratingObj[j]).children().removeClass("fa-star");
                $(ratingObj[j]).children().addClass("fa-star-o");
                $(ratingObj[j]).children().removeClass("star-color");
            }

            for (var k = 0; k < ratingValue; k++) {
                $(ratingObj[k]).children().removeClass("fa-star-o");
                $(ratingObj[k]).children().addClass("fa-star");
                $(ratingObj[k]).children().addClass("star-color");
            }
        });
    };

    $.fn.GetStarRating = function (e) {
        var ObjStarRating = $(this);
        return $(ObjStarRating).data('starrating');
    };

    $.fn.SetStarRating = function (starCount) {
        var ObjStarRating = $(this);
        var ratingValue = starCount;
        var ratingObj = $(this).children();

        $(ObjStarRating).data('starrating', ratingValue);

        for (var j = 0; j < ratingObj.length; j++) {
            $(ratingObj[j]).children().removeClass("fa-star");
            $(ratingObj[j]).children().addClass("fa-star-o");
            $(ratingObj[j]).children().removeClass("star-color");
        }

        for (var k = 0; k < ratingValue; k++) {
            $(ratingObj[k]).children().removeClass("fa-star-o");
            $(ratingObj[k]).children().addClass("fa-star");
            $(ratingObj[k]).children().addClass("star-color");
        }
    };
}(jQuery));
