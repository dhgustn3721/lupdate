/**
 * Created by ohyeonsu on 2017. 8. 31..
 */

$(function(){

    $(window).scroll(function(){
        try{
            var summaryTop = $('.detail-summary').offset().top;
            var infoTop = $('.information').offset().top;
            var imageTop = $('.detail-img-top').offset().top;
            var imageBot = $('.detail-img-bottom').offset().top;
            var windowSum = $(window).scrollTop() + $(window).height();
        } catch(e) {
            //console.log('this is main page');
        }

        //console.log(summaryTop);
        //
        //console.log( $(window).scrollTop() + $(window).height() );

        if( summaryTop <= windowSum ) {

            $('.inner-box').children('.detail-summary').css({
                "transition": "transform 3.0s ease, opacity 3.0s ease",
                "transform": "translate(0,0)",
                opacity: 1.0
            });

        } else if( summaryTop > windowSum ){

            $('.inner-box').children('.detail-summary').css({
                "transition": "transform 3.0s ease, opacity 3.0s ease",
                "transform": "translate(-50px,0)",
                opacity: 0
            });
        }

        if( infoTop <= windowSum ){

            $('.inner-box').children('.information').css({
               "transition": "transform 2.0s ease, opacity 2.0s ease",
                "transform": "translate(0,0)",
                opacity: 1.0
            });
        } else if( infoTop > windowSum ){

            $('.inner-box').children('.information').css({
                "transition": "transform 2.0s ease, opacity 2.0s ease",
                "transform": "translate(50px,0)",
                opacity: 0
            });
        }

        if( imageTop <= windowSum ){

            $('.detail-img').children('.detail-img-top').css({
                "transition": "transform 3.0s ease, opacity 3.0s ease",
                "transform": "translate(0,0)",
                opacity: 1.0
            });
        } else if( imageTop > windowSum ){

            $('.detail-img').children('.detail-img-top').css({
                "transition": "transform 3.0s ease, opacity 3.0s ease",
                "transform": "translate(-60px,0)",
                opacity: 0
            });
        }

        if( imageBot <= windowSum ){

            $('.detail-img').children('.detail-img-bottom').css({
                "transition": "transform 3.0s ease, opacity 3.0s ease",
                "transform": "translate(0,0)",
                opacity: 1.0
            });
        } else if( imageTop > windowSum ){

            $('.detail-img').children('.detail-img-bottom').css({
                "transition": "transform 5.0s ease, opacity 5.0s ease",
                "transform": "translate(60px,0)",
                opacity: 0
            });
        }

    });

    $(document).ready(function(){
        $('.detail-category').css({
            "opacity":1,
            "margin-left":0,
            "transition":"all 1s ease"
        });
        $('.button').css({
            "opacity":1,
            "margin-right":115,
            "transition":"all 1s ease"
        });
        $('.detail-introduction').css({
            "opacity":1,
            "transform":"scale(1)",
            "transition":"all 1s ease"
        });
        $('.detail-title').css({
            "opacity":1,
            "transform":"scale(1)",
            "transition":"all 1s ease"
        });
        $('.shape-wrap-item').eq(0).css({
            "width":420,
            "transition":"width 1.5s ease-out"
        });
        $('.shape-wrap-item').eq(1).css({
            "width":325,
            "transition":"width .5s ease-out"
        });
        $('.shape-wrap-item').eq(2).css({
            "height":260,
            "transition":"height 1s ease-out"
        });
        $('.shape-wrap-item').eq(3).css({
            "height":340,
            "transition":"height 1.5s ease-out"
        });
    });
});