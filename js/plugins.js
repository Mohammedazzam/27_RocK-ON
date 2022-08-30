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
                'padding': '10px 0',
                'boxShadow': '8px 0 5px #000'

            })
        }
        else {
            $('nav').css({
                'backgroundColor': 'transparent',
                'padding': '25px 0',
                'boxShadow': 'none'

            })
        }
    });
});

if ($(window).scrollTop() >= 140) {
    $('nav').css({
        'backgroundColor': '#051024',
        'padding': '10px 0',
        'boxShadow': '8px 0 5px #000'

    })
}
else {
    $('nav').css({
        'backgroundColor': 'transparent',
        'padding': '25px 0',
        'boxShadow': 'none'

    })
}