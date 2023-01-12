/* MENU */

$('.hamburger').click(function () {
    $(this).toggleClass('is-active')
    $('body').toggleClass('scrollDisabled')
    $('.mobileMenu').toggleClass('menuOpen')
})

$('.menu__links').click(function () {
    $('.hamburger').removeClass('is-active')
    $('.mobileMenu').removeClass('menuOpen')
    $('body').removeClass('scrollDisabled')
})

var windowW = $(window).width()

if (windowW < 769) {
    $('.beforeAfterHeader img').attr('src', 'images/small_Line.svg')
}

if (windowW > 1025) {
    setTimeout(() => {
        $('.header').mousemove(function (e) {
            mvImg(e)
            function mvImg(e) {
                var valueX = (e.pageX * 1 / 24);
                var valueY = (e.pageY * 1 / 24);
                $('#headerCircle').attr('style', 'background-position-x:' + valueX + "px;" + 'background-position-y:' + valueY + "px")
            }
        })
    }, 1300);
}



/* CONSOLE TEXT */

var captionLength = 0;
var caption = '';

setInterval('cursorAnimation()', 600);
captionEl = $('#caption');

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if (captionLength < caption.length + 1) {
        setTimeout('type()', 100);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if (captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
textTyping()
async function textTyping() {

    setTimeout(() => {
        caption = 'Motion design'
        type()
    }, 500);

    setTimeout(() => {
        testErasingEffect()
    }, 4500);


    setTimeout(() => {
        caption = 'Video editing'
        type()
    }, 5500);

    setTimeout(() => {
        testErasingEffect()
    }, 9000);


    setTimeout(() => {
        caption = 'Animation'
        type()
    }, 10000);

    setTimeout(() => {
        testErasingEffect()
    }, 14000);


    setTimeout(() => {
        caption = 'Sound design'
        type()
    }, 15000);
}

setInterval(() => {
    textTyping()
}, 20000);

function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength > 0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('testErasingEffect()', 1000);
    }
}

const slider1 = document.getElementById('before-after-slider');
const before1 = document.getElementById('before-image');
const beforeImage1 = before1.getElementsByTagName('img')[0];
const resizer1 = document.getElementById('resizer');
let active1 = false;

const slider2 = document.getElementById('before-after-slider-2');
const before2 = document.getElementById('before-image-2');
const beforeImage2 = before2.getElementsByTagName('img')[0];
const resizer2 = document.getElementById('resizer-2');
let active2 = false;

const slider3 = document.getElementById('before-after-slider-3');
const before3 = document.getElementById('before-image-3');
const beforeImage3 = before3.getElementsByTagName('img')[0];
const resizer3 = document.getElementById('resizer-3');
let active3 = false;

sliderInit(slider1, before1, beforeImage1, resizer1, active1)

sliderInit(slider2, before2, beforeImage2, resizer2, active2)

sliderInit(slider3, before3, beforeImage3, resizer3, active3)

function sliderInit(slider, before, beforeImage, resizer, active) {

    document.addEventListener("DOMContentLoaded", function () {
        let width = slider.offsetWidth;
        console.log(width);
        beforeImage.style.width = width + 'px';
    });

    //Adjust width of image on resize 
    window.addEventListener('resize', function () {
        let width = slider.offsetWidth;
        console.log(width);
        beforeImage.style.width = width + 'px';
    })

    resizer.addEventListener('mousedown', function () {
        active = true;
        resizer.classList.add('resize');

    });

    document.body.addEventListener('mouseup', function () {
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('mouseleave', function () {
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('mousemove', function (e) {
        if (!active) return;
        let x = e.pageX;
        x -= slider.getBoundingClientRect().left;
        slideIt(x);
        pauseEvent(e);
    });

    resizer.addEventListener('touchstart', function () {
        active = true;
        resizer.classList.add('resize');
    });

    document.body.addEventListener('touchend', function () {
        active = false;
        resizer.classList.remove('resize');
    });

    document.body.addEventListener('touchcancel', function () {
        active = false;
        resizer.classList.remove('resize');
    });

    //calculation for dragging on touch devices
    document.body.addEventListener('touchmove', function (e) {
        if (!active) return;
        let x;

        let i;
        for (i = 0; i < e.changedTouches.length; i++) {
            x = e.changedTouches[i].pageX;
        }

        x -= slider.getBoundingClientRect().left;
        slideIt(x);
        pauseEvent(e);
    });

    function slideIt(x) {
        let transform = Math.max(0, (Math.min(x, slider.offsetWidth)));
        before.style.width = transform + "px";
        resizer.style.left = transform - 0 + "px";
    }

    //stop divs being selected.
    function pauseEvent(e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }


}

var skroll = new Skroll()
    .add("#headerTitle", {
        animation: "fadeInUp",
        duration: 800,
        wait: 250,
        easing: "ease",
    })

    .add(".headerTerminal", {
        animation: "fadeInUp",
        duration: 600,
        wait: 750,
        easing: "ease",
    })

    .add("#headerButton", {
        animation: "fadeInUp",
        duration: 600,
        wait: 1050,
        easing: "ease",
    })

    .add("#headerCircle", {
        animation: "zoomIn",
        duration: 1000,
        wait: 300,
        easing: "ease",

    })

    .add(".siteTitle", {
        animation: "fadeInUp",
        duration: 1000,
        wait: 500,
        easing: "ease",

    })

    .add("#bigBeforeAfter", {
        animation: "fadeInUp",
        duration: 1000,
        wait: 500,
        easing: "ease",

    })

    .add(".beforeAfterRow", {
        animation: "fadeInUp",
        duration: 1000,
        wait: 500,
        easing: "ease",

    })

    .add(".numList", {
        animation: "fadeInUp",
        duration: 1000,
        wait: 0,
        easing: "ease",

    })


    .add(".bigBlock", {
        animation: "fadeInLeft",
        duration: 1000,
        wait: 0,
        easing: "ease",

    })

    .add(".smallBlockList", {
        animation: "fadeInRight",
        duration: 1000,
        wait: 0,
        easing: "ease",
    })

    .add(".smallBlockList", {
        animation: "fadeInRight",
        duration: 1000,
        wait: 0,
        easing: "ease",
    })

    .add(".orderEmail", {
        animation: "fadeInUp",
        duration: 1000,
        wait: 0,
        easing: "ease",
    })

    .add(".calendyWrapper", {
        animation: "fadeInUp",
        duration: 1000,
        wait: 0,
        easing: "ease",
    })

    .init();


    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    }); //плавный скролл