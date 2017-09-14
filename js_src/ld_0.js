/**
 * Created by ohyeonsu on 2017. 8. 24..
 */

$(function(){

    $('.btn-menu-toggle').data({'open' : 'false'}).on('click', function(){

        if($(this).data('open') == 'false' ){

            $(this).css({
                "transition": "transform 1.0s ease, opacity 1.0s ease",
                "transform": "translate(300px,0)",
                opacity:0
            });
            $(this).next('.gnb').css({
                "transition": "transform 1.0s ease, opacity 1.5s ease",
                "transform": "translate(0,0)",
                opacity:1
            });
            $(this).data({'open' : 'true'});

        } else {

            $(this).css({
                "transition": "transform 1.0s ease, opacity 1.0s ease",
                "transform": "translate(0,0)",
                opacity:1
            });
            $(this).next('.gnb').css({
                "transition": "transform 1.0s ease, opacity 3.0s ease",
                "transform": "translate(300px,0)",
                opacity:1
            });
            $(this).data({'open' : 'false'});
        }
    });

    $('.btn-menu-close').on('click', function(){

        $('.btn-menu-toggle').css({
            "transition": "transform 1.0s ease, opacity 2.0s ease",
            "transform": "translate(0,0)",
            opacity:1
        });

        $(this).parent('.gnb').css({
            "transition": "transform 1.0s ease, opacity 1.0s ease",
            "transform": "translate(300px,0)",
            opacity:0
        });
        $(this).data({'open' : 'false'});
    });

    $('.gnb-list-item-link').on('click', function(e){

        e.preventDefault();

        var href = $(this).attr('href');
        var scrollPosition = $(href).offset().top;

        $('body').stop().animate({
            scrollTop : scrollPosition
        }, 500);

    });

    //$(document).ready(function(){
    //    $('#home').each(function(){
    //        $(this).on("mousewheel DOMMouseScroll", function (e) {
    //            e.preventDefault();
    //            var delta = 0;
    //
    //            if (!event) event = window.event;
    //            if (event.wheelDelta) {
    //                delta = event.wheelDelta / 120;
    //                if (window.opera) delta = -delta;
    //            } else if (event.detail) delta = -event.detail / 3;
    //            var moveTop = null;
    //
    //            if (delta < 0) {
    //                if ($(this).next() != undefined) {
    //                    moveTop = $(this).next().offset().top;
    //                    //console.log(moveTop);
    //                }
    //            } else {
    //                if ($(this).prev() != undefined) {
    //                    moveTop = $(this).prev().offset().top;
    //                }
    //            }
    //
    //            $('body').stop().animate({
    //                scrollTop: moveTop + 'px'
    //            }, {
    //                duration: 600, complete: function () {
    //                }
    //            });
    //        });
    //    });
    //});

    $(document).ready(function(){
        $('section').bind('mousewheel DOMMouseScroll', function(e){
            e.preventDefault();
            var moveTop = 0;

            if(e.originalEvent.wheelDelta /120 > 0) {
                moveTop = $(this).prev().offset().top;
                //console.log('scrolling up !');
            }
            else{
                moveTop = $(this).next().offset().top;
                //console.log('scrolling down !');
            }

            //if($(this).offset().top = $('section').eq(4)){
            //
            //}

            $('body').stop().animate({
                scrollTop: moveTop + 'px'
            }, 600);
        });
    });


    $('.contents-list-item').on('mouseenter', function(){

        $(this).css({
            "transform":"scale(0.95) rotate(2deg)",
            "transition":"all .3s ease-out"
        });
        $(this).children('.contents-item-category').css({
            "transform":"translate(10px, 5px)",
            "transition":"all .3s ease-out",
            "color":"#fff"
        });
        $(this).children('.contents-item-number, .contents-item-title, .contents-item-address, .contents-item-telephone').css({
            "color":"#fff",
            "transition":"all .3s ease-out"
        });
    });

    $('.contents-list-item').on('mouseleave', function(){

        $(this).css({
            "transform":"scale(1.0) rotate(0)",
            "transition":"all .3s ease-out"
        });
        $(this).children('.contents-item-category').css({
            "transform":"translate(0, 0)",
            "transition":"all .3s ease-out",
            "color":"#2f2f2f"

        });
        $(this).children('.contents-item-number, .contents-item-title, .contents-item-address, .contents-item-telephone').css({
            "color":"#2f2f2f",
            "transition":"all .3s ease-out"
        });
    });

    $('.social-list-link').on('mouseenter', function(){

        $(this).css({
            "transform":"scale(1.1)",
            "transition":"transform .3s ease-out"
        });
    });

    $('.social-list-link').on('mouseleave', function(){

        $(this).css({
            "transform":"scale(1.0)",
            "transition":"transform .3s ease-out"
        });
    });

    //$(window).scroll(function(e){
    //    e.preventDefault();
    //
    //    //var section2Position = $('.section2').offset().top;
    //    var section3Position = $('.section3').offset().top;
    //    var windowSum = $(window).scrollTop() + $(window).height();
    //
    //    if( section3Position < windowSum ){
    //
    //        $('.contents-list-item').on('mouseenter', function(){
    //
    //            $(this).parent().css({
    //                "transform":"translate(-1000px,0)",
    //                "transition": "transform 1.0s ease"
    //            });
    //        });
    //    }
    //});

    //리스트 좌우 스크롤..
    //$(document).ready(function(){
    //    $(document).on('mousemove', function(e){
    //         //e.pageX : x좌표
    //         //e.pageY : y좌표
    //        //$( "#log" ).text( "pageX: " + e.pageX + ", pageY: " + e.pageY );
    //        var speed = $(window).width()/2 - e.pageX;
    //        //console.log(speed);
    //
    //        $('.contents-list').css({
    //            "transform":'translateX('+ speed +'px)'
    //        });
    //
    //    });
    //});

    $(window).scroll(function(){
        try{
            var socialTop = $('.social-list').offset().top;
            var windowSum = $(window).scrollTop() + $(window).height();
        } catch(e) {
            //console.log('this is main page');
        }

        //console.log( $(window).scrollTop() + $(window).height() );

        if( socialTop <= windowSum ) {

            $('.social-list').css({
                "transition": "transform 1.0s ease, opacity 1.0s ease",
                "transform" : "scale(1.0)",
                opacity: 1.0
            });

        } else if( socialTop > windowSum ){

            $('.social-list').css({
                "transition": "transform 1.0s ease, opacity 1.0s ease",
                "transform" : "scale(1.2)",
                opacity: 0
            });
        }

    });

});