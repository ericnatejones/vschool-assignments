//$(window).load(function() {
//  $('.flexslider').flexslider({
//    animation: "slide",
////    controlNav: "thumbnails"
//  });
//});


$(document).ready(function () {
    $('.show').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true

    });
});

$('a[href^=#]').on("click", function (e) {
    var t = $(this.hash);
    var t = t.length && t || $('[name=' + this.hash.slice(1) + ']');
    if (t.length) {
        var tOffset = t.offset().top;
        $('html,body').animate({
            scrollTop: tOffset - 20
        }, '1000');
        e.preventDefault();
    }
});