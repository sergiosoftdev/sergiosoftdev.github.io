addEventListener("DOMContentLoaded", (event) => {

    var typed = new Typed('#mainbig', {
    strings: ['Sergio García López ^2000', 'SergioSoftDev ^2000'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    smartBackspace: true
    });

    ScrollReveal().reveal('.about', {duration: 2000, reset: true, interval: 10});
    ScrollReveal().reveal(".portofolio", {duration: 2000, reset: true, interval: 10})
    ScrollReveal().reveal("#circle3", {duration: 6000, reset: true, interval: 10})

});