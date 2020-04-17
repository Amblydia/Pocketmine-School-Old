$(document).ready(function() {

    $('#goto').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky-nav');
        } 
        else {
            $('nav').removeClass('sticky-nav');
        }
    }, {
          offset: '60px'
    });

    $('.scroll-to').click(function() {
        $('html, body').animate({scrollTop: $('#goto').offset().top}, 1000)
    })
});