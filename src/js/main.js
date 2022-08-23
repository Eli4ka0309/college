$(document).ready(function () {
    $('.header_nav a').click(function () {
        $('.header_nav a').removeClass('active')
        $(this).toggleClass('active')
    });

    //horizontal_scroll//

    $('.horizontal_scroll_inner').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });



});

