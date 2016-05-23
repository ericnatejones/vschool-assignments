var w = $(window).width();
var h = $(window).height();
var banner = $('#banner').height();
var subscribe = $("#subscribeBox").height();
var slide = $(".slideImage").height();


$('#banner').css("max-height", h - subscribe + 10);
$('#banner').css("height", slide - 50);

$(window).resize(function () {

    var w = $(window).width();
    var h = $(window).height();
    var banner = $('#banner').height();
    var subscribe = $("#subscribeBox").height();
    var slide = $(".slideImage").height();



    $('#banner').css("height", h - subscribe + 10);
    $('#banner').css("max-height", slide - 50);
    // $('.slideImage').css("width", "100%");


});

$(document).ready(function ($) {

    $('.listCaro').slick({
        dots: true
    });

    //    $('.slideshow').slick({
    //
    //        dots: false,
    //        infinite: true,
    //        speed: 1000,
    //        fade: true,
    //        cssEase: 'linear',
    //        slidesToShow: 1,
    //        slidesToScroll: 1,
    //        autoplay: true,
    //        autoplaySpeed: 4000,
    //        arrows: false
    //    });



});

var slideIndex = 0;


function carousel() {
    var i;
    var slide = document.getElementsByClassName("slideImage");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    slide[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}

carousel();