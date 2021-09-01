$(document).ready(function() {


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start header ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */

$(".trigger").click(function(){
  $(".nav_bar").slideToggle(500);
  $(".moboverlay").toggle('500');
  $("body").toggleClass("over")
});
$(".close_").click(function(){
    $(".nav_bar").slideToggle(500);
    $(".moboverlay").toggle('500');
    $("body").toggleClass("over")
});

$(".moboverlay").click(function(){
  $(".trigger .bars .close_").trigger("click");

});

$(".btn_drop_lang").click(function(){
  $(".ul_drop_lang").slideToggle(500)
})

$(".btn_drop_riyal").click(function(){
  $(".ul_drop_riyal").slideToggle(500)
})
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end header  ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start  slider~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
$('.slider .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  rtl: true,
  autoplay: true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end slider ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start Products ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
$('.products .owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
  responsive:{
      0:{
          items:2,
          margin:15
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end  Products~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~start brands~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
$('.brands .owl-carousel').owlCarousel({
loop: true,
margin: 15,
nav: true,
rtl: $("html").attr("dir") == "rtl" ? true : false,
navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
rtl: true,
responsive: {
    0: {
        items: 2,
        margin:15
    },
    600: {
        items: 4
    },
    1000: {
        items: 6
    }
}
})

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~end brands~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
// header_scroll..............

});
// scroll button
var myButton = document.getElementById('goup');
window.onscroll = function () {
    "use strict";
    if (window.pageYOffset >= 600) {
        myButton.style.opacity = "1";

    } else {
        myButton.style.opacity = "0"
    }
};

myButton.onclick = function () {
    "use strict";
    window.scroll({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });


};

        /* ****************start wow ******************** */
        new WOW().init();
        document.documentElement.style.setProperty('--animate-duration', '.8s');
        /* ****************end wow ******************** */

        $(window).load(function() {
          $(".preloader-sa").fadeOut();
        });
