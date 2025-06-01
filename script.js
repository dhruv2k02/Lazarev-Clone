// Ensure the page scrolls to the top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function p1animation() {
    var nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function () {
        var tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "20vh",
            duration: 0.5
        });
        tl.to(".options h5", {
            display: "block",
            duration: 0.1
        });
        tl.to(".options h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        });
    });
    nav.addEventListener("mouseleave", function () {
        var tl1 = gsap.timeline();
        tl1.to(".options h5 span", {
            y: 25,
            stagger: {
                amount: 0.5
            }
        });
        tl1.to(".options h5", {
            display: "none",
            duration: 0.1
        });
        tl1.to("#nav-bottom", {
            height: "0vh",
            duration: 0.5
        });
    });
}

function loadingAnimation() {
    var tl = gsap.timeline();
    tl.set("#p1", { // reset transformations
        transform: "scaleX(1) scaleY(1) translateY(0)",
        borderRadius: "0px"
    });
    tl.from("#p1", {
        opacity: 1,
        duration: 0.1
    });
    tl.from("#p1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "200px",
        duration: 1,
        ease: "expo.out"
    });
    tl.from("#p1, nav, #p1 h1, #p1 div, #p1 p", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    });
}

function p2animation() {
    var ins = document.querySelectorAll(".inside");
    ins.forEach(function (a) {
        a.addEventListener("mouseenter", function () {
            gsap.to(a.childNodes[7], {
                display: "block",
                opacity: 1,
                scale: 1
            });
        });
        a.addEventListener("mousemove", function (dets) {
            gsap.to(a.childNodes[7], {
                x: dets.x - a.getBoundingClientRect().x - 35,
                y: dets.y - a.getBoundingClientRect().y - 120
            });
        });
        a.addEventListener("mouseleave", function () {
            gsap.to(a.childNodes[7], {
                display: "none",
                opacity: 0,
                scale: 0
            });
        });
    });
}

function p3animation() {
    var cover = document.querySelector("#p3 #p3-cover");
    var vid = document.querySelector("#p3 video");
    cover.addEventListener("click", function () {
        vid.play();
        gsap.to(vid, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1
        });
    });
    vid.addEventListener("click", function () {
        vid.pause();
        gsap.to(vid, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true }
    });

    locoScroll.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();

    function p6scrollanimation() {
        gsap.from(".p6-bottom-case2 h4", {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".p6-bottom-case2",
                scroller: "#main",
                start: "top 80%",
                end: "top 10%",
                scrub: true
            }
        });
        gsap.from(".p6-bottom-case3 h4", {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".p6-bottom-case3",
                scroller: "#main",
                start: "top 80%",
                end: "top 10%",
                scrub: true
            }
        });
        gsap.from(".p6-bottom-case4 h4", {
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".p6-bottom-case4",
                scroller: "#main",
                start: "top 80%",
                end: "top 10%",
                scrub: true
            }
        });
    }

    p6scrollanimation();
    p1animation();
    p2animation();
    p3animation();
    loadingAnimation();

    ScrollTrigger.create({
        trigger: "#p6-full",
        scroller: "#main",
        start: "top 50%",
        end: "top 0%",
        pin: ".p6-l button"
    });

    ScrollTrigger.create({
        trigger: ".t-p-left",
        scroller: "#main",
        start: "top 20%",
        end: "bottom 18%",
        pin: ".t-p-left button"
    });

    ScrollTrigger.create({
        trigger: "#p5 .d3-left1",
        scroller: "#main",
        start: "top 70%",
        end: "top 5%",
        pin: "#case1 .d3-left1 button"
    });

    gsap.to(".p7-right", {
        scrollTrigger: {
            trigger: ".p7-left",
            start: "top 10%",
            end: "bottom 50%",
            pin: true,
            scrub: true,
            scroller: "#main"
        }
    });

    var panels = document.querySelectorAll("#panel1");

    panels.forEach(function (panel) {
        var img = panel.querySelector("#panel1>img");

        panel.addEventListener("mouseenter", function () {
            gsap.to(img, {
                opacity: 1,
                scale: 1,
                display: "block"
            });
        });

        panel.addEventListener("mouseleave", function () {
            gsap.to(img, {
                opacity: 0,
                scale: 0,
                display: "none"
            });
        });

        panel.addEventListener("mousemove", function (event) {
            var rect = panel.getBoundingClientRect();
            var x = event.clientX - rect.left - (img.width / 2);
            var y = event.clientY - rect.top - (img.height / 2);
            var angle = (event.clientX - rect.left) / rect.width * 60 - 30;

            gsap.to(img, {
                x: x * 0.3,
                y: y * 0.1,
                rotate: angle * 0.05
            });
        });
    });

    function p4animationcase3() {
        var covers = document.querySelectorAll(".new-vid");
        covers.forEach(function (cover) {
            var vid = cover.querySelector("video");

            cover.addEventListener("mouseenter", function () {
                vid.play();
                gsap.to(cover, {
                    height: "80vh"
                });
            });

            cover.addEventListener("mouseleave", function () {
                vid.pause();
                vid.currentTime = 0;
                gsap.to(cover, {
                    height: "42vh"
                });
            });
        });
    }

    p4animationcase3();

    const details = document.querySelectorAll('.dets');

    details.forEach(detail => {
        detail.addEventListener('toggle', function () {
            if (detail.open) {
                details.forEach(item => {
                    if (item !== detail && item.open) {
                        item.open = false;
                    }
                });
            }
        });
    });
});

// Ensure the page scrolls to the top after all scripts have loaded
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('#main').scrollTo(0, 0);
    }, 100);
});
