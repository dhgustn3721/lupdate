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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxkXzAuanMiLCJsZF8xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IG9oeWVvbnN1IG9uIDIwMTcuIDguIDI0Li5cbiAqL1xuXG4kKGZ1bmN0aW9uKCl7XG5cbiAgICAkKCcuYnRuLW1lbnUtdG9nZ2xlJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYoJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJyApe1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwidHJhbnNmb3JtIDEuMHMgZWFzZSwgb3BhY2l0eSAxLjBzIGVhc2VcIixcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgzMDBweCwwKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoJy5nbmInKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zZm9ybSAxLjBzIGVhc2UsIG9wYWNpdHkgMS41cyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUoMCwwKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJ0cmFuc2Zvcm0gMS4wcyBlYXNlLCBvcGFjaXR5IDEuMHMgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKDAsMClcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCcuZ25iJykuY3NzKHtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJ0cmFuc2Zvcm0gMS4wcyBlYXNlLCBvcGFjaXR5IDMuMHMgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKDMwMHB4LDApXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eToxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuYnRuLW1lbnUtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICQoJy5idG4tbWVudS10b2dnbGUnKS5jc3Moe1xuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwidHJhbnNmb3JtIDEuMHMgZWFzZSwgb3BhY2l0eSAyLjBzIGVhc2VcIixcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKDAsMClcIixcbiAgICAgICAgICAgIG9wYWNpdHk6MVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmduYicpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJ0cmFuc2Zvcm0gMS4wcyBlYXNlLCBvcGFjaXR5IDEuMHMgZWFzZVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUoMzAwcHgsMClcIixcbiAgICAgICAgICAgIG9wYWNpdHk6MFxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZ25iLWxpc3QtaXRlbS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQoaHJlZikub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxuICAgICAgICB9LCA1MDApO1xuXG4gICAgfSk7XG5cbiAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgJCgnI2hvbWUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgICAgICQodGhpcykub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgICAgICAgICB2YXIgZGVsdGEgPSAwO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICBpZiAoIWV2ZW50KSBldmVudCA9IHdpbmRvdy5ldmVudDtcbiAgICAvLyAgICAgICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhIC8gMTIwO1xuICAgIC8vICAgICAgICAgICAgICAgIGlmICh3aW5kb3cub3BlcmEpIGRlbHRhID0gLWRlbHRhO1xuICAgIC8vICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwpIGRlbHRhID0gLWV2ZW50LmRldGFpbCAvIDM7XG4gICAgLy8gICAgICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgIGlmIChkZWx0YSA8IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5uZXh0KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLm5leHQoKS5vZmZzZXQoKS50b3A7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobW92ZVRvcCk7XG4gICAgLy8gICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLnByZXYoKS5vZmZzZXQoKS50b3A7XG4gICAgLy8gICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgIC8vICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcbiAgICAvLyAgICAgICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICB9KTtcbiAgICAvLyAgICB9KTtcbiAgICAvL30pO1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnc2VjdGlvbicpLmJpbmQoJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBtb3ZlVG9wID0gMDtcblxuICAgICAgICAgICAgaWYoZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgLzEyMCA+IDApIHtcbiAgICAgICAgICAgICAgICBtb3ZlVG9wID0gJCh0aGlzKS5wcmV2KCkub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3Njcm9sbGluZyB1cCAhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLm5leHQoKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2Nyb2xsaW5nIGRvd24gIScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmKCQodGhpcykub2Zmc2V0KCkudG9wID0gJCgnc2VjdGlvbicpLmVxKDQpKXtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvL31cblxuICAgICAgICAgICAgJCgnYm9keScpLnN0b3AoKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG1vdmVUb3AgKyAncHgnXG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gICAgJCgnLmNvbnRlbnRzLWxpc3QtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwic2NhbGUoMC45NSkgcm90YXRlKDJkZWcpXCIsXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIjpcImFsbCAuM3MgZWFzZS1vdXRcIlxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmNvbnRlbnRzLWl0ZW0tY2F0ZWdvcnknKS5jc3Moe1xuICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZSgxMHB4LCA1cHgpXCIsXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIjpcImFsbCAuM3MgZWFzZS1vdXRcIixcbiAgICAgICAgICAgIFwiY29sb3JcIjpcIiNmZmZcIlxuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLmNvbnRlbnRzLWl0ZW0tbnVtYmVyLCAuY29udGVudHMtaXRlbS10aXRsZSwgLmNvbnRlbnRzLWl0ZW0tYWRkcmVzcywgLmNvbnRlbnRzLWl0ZW0tdGVsZXBob25lJykuY3NzKHtcbiAgICAgICAgICAgIFwiY29sb3JcIjpcIiNmZmZcIixcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOlwiYWxsIC4zcyBlYXNlLW91dFwiXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmNvbnRlbnRzLWxpc3QtaXRlbScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwic2NhbGUoMS4wKSByb3RhdGUoMClcIixcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOlwiYWxsIC4zcyBlYXNlLW91dFwiXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuY29udGVudHMtaXRlbS1jYXRlZ29yeScpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlKDAsIDApXCIsXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIjpcImFsbCAuM3MgZWFzZS1vdXRcIixcbiAgICAgICAgICAgIFwiY29sb3JcIjpcIiMyZjJmMmZcIlxuXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuY29udGVudHMtaXRlbS1udW1iZXIsIC5jb250ZW50cy1pdGVtLXRpdGxlLCAuY29udGVudHMtaXRlbS1hZGRyZXNzLCAuY29udGVudHMtaXRlbS10ZWxlcGhvbmUnKS5jc3Moe1xuICAgICAgICAgICAgXCJjb2xvclwiOlwiIzJmMmYyZlwiLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJhbGwgLjNzIGVhc2Utb3V0XCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuc29jaWFsLWxpc3QtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwic2NhbGUoMS4xKVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0XCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuc29jaWFsLWxpc3QtbGluaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwic2NhbGUoMS4wKVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0XCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZSl7XG4gICAgLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vXG4gICAgLy8gICAgLy92YXIgc2VjdGlvbjJQb3NpdGlvbiA9ICQoJy5zZWN0aW9uMicpLm9mZnNldCgpLnRvcDtcbiAgICAvLyAgICB2YXIgc2VjdGlvbjNQb3NpdGlvbiA9ICQoJy5zZWN0aW9uMycpLm9mZnNldCgpLnRvcDtcbiAgICAvLyAgICB2YXIgd2luZG93U3VtID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgIC8vXG4gICAgLy8gICAgaWYoIHNlY3Rpb24zUG9zaXRpb24gPCB3aW5kb3dTdW0gKXtcbiAgICAvL1xuICAgIC8vICAgICAgICAkKCcuY29udGVudHMtbGlzdC1pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcyh7XG4gICAgLy8gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZSgtMTAwMHB4LDApXCIsXG4gICAgLy8gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwidHJhbnNmb3JtIDEuMHMgZWFzZVwiXG4gICAgLy8gICAgICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgfSk7XG4gICAgLy8gICAgfVxuICAgIC8vfSk7XG5cbiAgICAvL+umrOyKpO2KuCDsoozsmrAg7Iqk7YGs66GkLi5cbiAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgJChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgIC8vICAgICAgICAgLy9lLnBhZ2VYIDogeOyijO2RnFxuICAgIC8vICAgICAgICAgLy9lLnBhZ2VZIDogeeyijO2RnFxuICAgIC8vICAgICAgICAvLyQoIFwiI2xvZ1wiICkudGV4dCggXCJwYWdlWDogXCIgKyBlLnBhZ2VYICsgXCIsIHBhZ2VZOiBcIiArIGUucGFnZVkgKTtcbiAgICAvLyAgICAgICAgdmFyIHNwZWVkID0gJCh3aW5kb3cpLndpZHRoKCkvMiAtIGUucGFnZVg7XG4gICAgLy8gICAgICAgIC8vY29uc29sZS5sb2coc3BlZWQpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICQoJy5jb250ZW50cy1saXN0JykuY3NzKHtcbiAgICAvLyAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6J3RyYW5zbGF0ZVgoJysgc3BlZWQgKydweCknXG4gICAgLy8gICAgICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgfSk7XG4gICAgLy99KTtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgdmFyIHNvY2lhbFRvcCA9ICQoJy5zb2NpYWwtbGlzdCcpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIHZhciB3aW5kb3dTdW0gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcyBpcyBtYWluIHBhZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSApO1xuXG4gICAgICAgIGlmKCBzb2NpYWxUb3AgPD0gd2luZG93U3VtICkge1xuXG4gICAgICAgICAgICAkKCcuc29jaWFsLWxpc3QnKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zZm9ybSAxLjBzIGVhc2UsIG9wYWNpdHkgMS4wcyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIiA6IFwic2NhbGUoMS4wKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIGlmKCBzb2NpYWxUb3AgPiB3aW5kb3dTdW0gKXtcblxuICAgICAgICAgICAgJCgnLnNvY2lhbC1saXN0JykuY3NzKHtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJ0cmFuc2Zvcm0gMS4wcyBlYXNlLCBvcGFjaXR5IDEuMHMgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCIgOiBcInNjYWxlKDEuMilcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBvaHllb25zdSBvbiAyMDE3LiA4LiAzMS4uXG4gKi9cblxuJChmdW5jdGlvbigpe1xuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICB2YXIgc3VtbWFyeVRvcCA9ICQoJy5kZXRhaWwtc3VtbWFyeScpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIHZhciBpbmZvVG9wID0gJCgnLmluZm9ybWF0aW9uJykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIGltYWdlVG9wID0gJCgnLmRldGFpbC1pbWctdG9wJykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIGltYWdlQm90ID0gJCgnLmRldGFpbC1pbWctYm90dG9tJykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIHdpbmRvd1N1bSA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aGlzIGlzIG1haW4gcGFnZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhzdW1tYXJ5VG9wKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9jb25zb2xlLmxvZyggJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpICk7XG5cbiAgICAgICAgaWYoIHN1bW1hcnlUb3AgPD0gd2luZG93U3VtICkge1xuXG4gICAgICAgICAgICAkKCcuaW5uZXItYm94JykuY2hpbGRyZW4oJy5kZXRhaWwtc3VtbWFyeScpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwidHJhbnNmb3JtIDMuMHMgZWFzZSwgb3BhY2l0eSAzLjBzIGVhc2VcIixcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgwLDApXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYoIHN1bW1hcnlUb3AgPiB3aW5kb3dTdW0gKXtcblxuICAgICAgICAgICAgJCgnLmlubmVyLWJveCcpLmNoaWxkcmVuKCcuZGV0YWlsLXN1bW1hcnknKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zZm9ybSAzLjBzIGVhc2UsIG9wYWNpdHkgMy4wcyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUoLTUwcHgsMClcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBpbmZvVG9wIDw9IHdpbmRvd1N1bSApe1xuXG4gICAgICAgICAgICAkKCcuaW5uZXItYm94JykuY2hpbGRyZW4oJy5pbmZvcm1hdGlvbicpLmNzcyh7XG4gICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJ0cmFuc2Zvcm0gMi4wcyBlYXNlLCBvcGFjaXR5IDIuMHMgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKDAsMClcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLjBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYoIGluZm9Ub3AgPiB3aW5kb3dTdW0gKXtcblxuICAgICAgICAgICAgJCgnLmlubmVyLWJveCcpLmNoaWxkcmVuKCcuaW5mb3JtYXRpb24nKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zZm9ybSAyLjBzIGVhc2UsIG9wYWNpdHkgMi4wcyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUoNTBweCwwKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIGltYWdlVG9wIDw9IHdpbmRvd1N1bSApe1xuXG4gICAgICAgICAgICAkKCcuZGV0YWlsLWltZycpLmNoaWxkcmVuKCcuZGV0YWlsLWltZy10b3AnKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zZm9ybSAzLjBzIGVhc2UsIG9wYWNpdHkgMy4wcyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUoMCwwKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiggaW1hZ2VUb3AgPiB3aW5kb3dTdW0gKXtcblxuICAgICAgICAgICAgJCgnLmRldGFpbC1pbWcnKS5jaGlsZHJlbignLmRldGFpbC1pbWctdG9wJykuY3NzKHtcbiAgICAgICAgICAgICAgICBcInRyYW5zaXRpb25cIjogXCJ0cmFuc2Zvcm0gMy4wcyBlYXNlLCBvcGFjaXR5IDMuMHMgZWFzZVwiLFxuICAgICAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKC02MHB4LDApXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggaW1hZ2VCb3QgPD0gd2luZG93U3VtICl7XG5cbiAgICAgICAgICAgICQoJy5kZXRhaWwtaW1nJykuY2hpbGRyZW4oJy5kZXRhaWwtaW1nLWJvdHRvbScpLmNzcyh7XG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6IFwidHJhbnNmb3JtIDMuMHMgZWFzZSwgb3BhY2l0eSAzLjBzIGVhc2VcIixcbiAgICAgICAgICAgICAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgwLDApXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmKCBpbWFnZVRvcCA+IHdpbmRvd1N1bSApe1xuXG4gICAgICAgICAgICAkKCcuZGV0YWlsLWltZycpLmNoaWxkcmVuKCcuZGV0YWlsLWltZy1ib3R0b20nKS5jc3Moe1xuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBcInRyYW5zZm9ybSA1LjBzIGVhc2UsIG9wYWNpdHkgNS4wcyBlYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGUoNjBweCwwKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5kZXRhaWwtY2F0ZWdvcnknKS5jc3Moe1xuICAgICAgICAgICAgXCJvcGFjaXR5XCI6MSxcbiAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjowLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJhbGwgMXMgZWFzZVwiXG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuYnV0dG9uJykuY3NzKHtcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOjEsXG4gICAgICAgICAgICBcIm1hcmdpbi1yaWdodFwiOjExNSxcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOlwiYWxsIDFzIGVhc2VcIlxuICAgICAgICB9KTtcbiAgICAgICAgJCgnLmRldGFpbC1pbnRyb2R1Y3Rpb24nKS5jc3Moe1xuICAgICAgICAgICAgXCJvcGFjaXR5XCI6MSxcbiAgICAgICAgICAgIFwidHJhbnNmb3JtXCI6XCJzY2FsZSgxKVwiLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJhbGwgMXMgZWFzZVwiXG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuZGV0YWlsLXRpdGxlJykuY3NzKHtcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOjEsXG4gICAgICAgICAgICBcInRyYW5zZm9ybVwiOlwic2NhbGUoMSlcIixcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOlwiYWxsIDFzIGVhc2VcIlxuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnNoYXBlLXdyYXAtaXRlbScpLmVxKDApLmNzcyh7XG4gICAgICAgICAgICBcIndpZHRoXCI6NDIwLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJ3aWR0aCAxLjVzIGVhc2Utb3V0XCJcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5zaGFwZS13cmFwLWl0ZW0nKS5lcSgxKS5jc3Moe1xuICAgICAgICAgICAgXCJ3aWR0aFwiOjMyNSxcbiAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOlwid2lkdGggLjVzIGVhc2Utb3V0XCJcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5zaGFwZS13cmFwLWl0ZW0nKS5lcSgyKS5jc3Moe1xuICAgICAgICAgICAgXCJoZWlnaHRcIjoyNjAsXG4gICAgICAgICAgICBcInRyYW5zaXRpb25cIjpcImhlaWdodCAxcyBlYXNlLW91dFwiXG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuc2hhcGUtd3JhcC1pdGVtJykuZXEoMykuY3NzKHtcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6MzQwLFxuICAgICAgICAgICAgXCJ0cmFuc2l0aW9uXCI6XCJoZWlnaHQgMS41cyBlYXNlLW91dFwiXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7Il19
