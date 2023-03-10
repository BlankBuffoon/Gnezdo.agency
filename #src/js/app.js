import * as jQueryFunc from "./modules/jQuery.js";
import * as appFunc from "./modules/isWebp.js";
import * as jQueryInputMask from "./modules/jquery.inputmask.min.js";
import * as jQueryMarquee from "./modules/jquery.marquee.min.js"

jQueryFunc.jQuery();
appFunc.isWebP();
jQueryInputMask.jQueryInputMask();
jQueryMarquee.jQueryMarquee();

$(function() {
    const actionSlider = new Swiper('.action', {
        loop: true,

        autoplay: {
            delay: 5000,
        },
    })
});

let slidenames = [
    'production',
    'creative',
    'digital',
    '360°',
    'event',
    'promoution',
    'photography',
    'web-design',
    'adwerting',
];

$(function() {
    const actionSlider = new Swiper('.videos', {
        loop: true,
        effect: "fade",

        fadeEffect: {
            crossFade: true
          },
        
        pagination: {
            el: ".videos__nav",
            clickable: true,
            bulletClass: 'videos__nav--link',
            bulletActiveClass: 'active',
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + slidenames[index] + "</span>";
            },
        },

        autoplay: {
            delay: 5000,
        },
    });

    let index = 0;
    let prevIndex = 0;
    let selector = "";
    let video;

    actionSlider.on('slideChange', function () {
        index = actionSlider.realIndex;
        
        selector = "video-" + prevIndex;
        console.log(selector);
        video = document.getElementById(selector);
        video.pause();
        video.currentTime = 0;
        
        selector = "video-" + index;
        video = document.getElementById(selector);
        video.play()

        prevIndex = index;
    })
});

$(function() {
    const clientsSlider = new Swiper('.ourclients', {
        loop: true,
        slidesPerView: 8,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // bulletClass: 'bullet',
            bulletActiveClass: 'active',
        },

        autoplay: {
            delay: 3000,
        },
    })
})

$(function() {
    $('.introdusing__marquee.left').marquee({
        duplicated: true,
        direction: "left",
        gap: 10,
        startVisible: true,
        delayBeforeStart: 0,
        speed: 80,
    });
    $('.introdusing__marquee.right').marquee({
        duplicated: true,
        direction: "right",
        gap: 10,
        startVisible: true,
        delayBeforeStart: 0,
        speed: 80,
    });
})

$(function () {
    const feedbackSlider = new Swiper('.feedback__swiper', {
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // bulletClass: 'bullet',
            bulletActiveClass: 'active',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // autoplay: {
        //     delay: 3000,
        // },
    })
})