
//For the loader animation at the beginning
gsap.to(".loader-text", {
    opacity: 1,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.to(".loader-container", {
    delay: 4,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    onComplete: () => {
        document.querySelector(".loader-container").style.display = "none";
    }
});
//
gsap.to(".main-content", {
    delay: 2.5,
    opacity: 1,
    visibility: "visible",
    duration: 1.2,
    ease: "power2.out"
});

//For the navigation bar colour change of the website
gsap.to("#nav1", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "120px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2 
     }
})
// swiper js animation for the about us section of the website
gsap.from(".about-image img", { opacity: 0, x: -50, duration: 1 });
gsap.from(".about-text", { opacity: 0, x: 50, duration: 1, delay: 0.5 });
var textSlider = new Swiper(".text-slider",{
    effect: "fade",
    speed: 1500,
    mousewheel: true,
    pagination: {
         el: "swiper-pagination",
         clickable: true,
    },
})
var imageSlider = new Swiper(".image-slider", {
    grabCursor: true,
    mousewheel: true,
    speed: 1500,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [0, 0, -800],
            rotate: [-90, 0, 0],
        },
        next: {
            translate: [0, 0, -800],
            rotate: [90, 0, 0],
        },

    },
});
textSlider.controller.control = imageSlider;
imageSlider.controller.control = textSlider;
// For the popup animation of the website
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}
