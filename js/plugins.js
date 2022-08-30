$(document).ready(function () {
    // header height
    $(function () {
        $(".header").height($(window).height());
        $(window).resize(function () {
            $(".header").height($(window).height());
        });
    });

    // NavBar Coler
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 140) {
            $('nav').css({
                'backgroundColor': '#051024',
                'padding': '10px 0'

            })
        }
        else {
            $('nav').css({
                'backgroundColor': 'transparent',
                'padding': '25px 0'
            })
        }
    });
});