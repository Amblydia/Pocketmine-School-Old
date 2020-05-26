jQuery.fn.blindLeftToggle = function (duration, easing, complete) {
    return this.animate({
        marginLeft: parseFloat(this.css('marginLeft')) < 200 ? 200 : -0
    }, jQuery.speed(duration, easing, complete));
};

jQuery.fn.bLT = function (duration, easing, complete) {
    return this.animate({
        marginLeft: parseFloat(this.css('marginLeft')) < 0 ? 0 : -200
    }, jQuery.speed(duration, easing, complete));
};

$(document).ready(function() {

    $('nav .mobile-nav').click(function() {
        var sidemain = $('.sidemain');
        var sidebar = $('.sidebar');

        sidemain.blindLeftToggle(200);
        sidebar.bLT(200);
    
    });

    $('.scroll-to').click(function() {
        $('html, body').animate({scrollTop: $('#goto').offset().top}, 1000)
    });

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

});

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
};

document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
});

