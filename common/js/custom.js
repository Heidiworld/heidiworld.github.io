jQuery(document).ready(function ($) {


    // using plugin to make IE rotate image

    if (!Modernizr.cssanimations) {
        var angle = 0;
        setInterval(function () {
            angle += 1;
            $(".no-cssanimations .world img").rotate(angle);
        }, 60);

    };


});
