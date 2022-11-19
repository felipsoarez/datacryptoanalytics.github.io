$(function() {

    'use strict';

    $('.fakeLoader').fakeLoader({

        timeToHide: 3200, //Time in milliseconds for fakeLoader disappear

        zIndex: "9999",//Default zIndex

        spinner: "spinner3",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

        bgColor: "#121212" //Hex, RGB or RGBA colors

    });
       
    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // carousel resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:2800,
        autoplayHoverPause:true
    });

    // collapse show on resume
    $('.collapse-show').collapse();

    // porfolio filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var vScroll = $(this).scrollTop();

        if( vScroll > 100) {
            $(".navbar").addClass("fix");
        }
        else {
            $(".navbar").removeClass("fix");
        }

    });


});

main.js file
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}