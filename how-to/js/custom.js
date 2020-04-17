jQuery.fn.blindLeftToggle = function (duration, easing, complete) {
    return this.animate({
        marginLeft: parseFloat(this.css('marginLeft')) < 0 ? 0 : -this.outerWidth()
    }, jQuery.speed(duration, easing, complete));
};

$(document).ready(function() {

$('.mobile-nav').click(function() {
    var nav = $('.sidebar');
    var icon = $('.mobile-nav i');

    nav.blindLeftToggle(500);

})

});