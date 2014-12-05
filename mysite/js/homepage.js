$(function() {
    $('#slides').slidesjs({
        height: 305,
        navigation: false,
        pagination: false,
        effect: {
            fade: {
                speed: 400
            }
        },
        callback: {
            start: function(number) {
                $("#slider_content1,#slider_content2,#slider_content3, #slider_content4, #slider_content5, #slider_content6").fadeOut(500);
            },
            complete: function(number) {
                $("#slider_content" + number).delay(500).fadeIn(1000);
            }
        },
        play: {
            active: false,
            auto: true,
            interval: 6000,
            pauseOnHover: false
        }
    });
});

$(document).ready(function() {
  jQuery.localScroll({
        easing: "easeOutBounce",
        speed: 4400
  });
});

	