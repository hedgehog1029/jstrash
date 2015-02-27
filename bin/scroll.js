(function($) {
    $.fn.scrollToElement = function(speed) {
        scrollTo(this, speed);
    }
}(jQuery));

function scrollTo(element, speed) {
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, speed);
}
