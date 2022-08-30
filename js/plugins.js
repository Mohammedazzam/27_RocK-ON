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

    // smppth scroll
    $('nav li a').on('click', function() {
        $('html, body').animate({
            scrollTop :$('#' + $(this).data('scroll')).offset().top - 80
        },1000)
    })

    // add active to links

    $('nav li a').on('click', function() {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    })

    // تلوين اللينكات عند الإنتقال من سيكشن لسكشن

    $(window).scroll(function () {
        $('section').each(function () {
            if ($(window).scrollTop() + 100 >= $(this).offset().top) {
                var sectionID = $(this).attr('id');
                $('nav a').removeClass('active');
                $('nav li a[data-scroll="' + sectionID + '"]').addClass('active');

            }
        })
    })
});


