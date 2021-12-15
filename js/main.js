(function($) {
  'use strict';
// code starts


// mobile menu

$('.menu-icon i.fa-align-center').on('click', function(){
$('.all-menu').animate({left: -15});
$(this).hide();
$('.menu-icon i.fa-times').show();
});
 
$('.menu-icon i.fa-times').on('click', function(){
  $('.all-menu').animate({left: -450});
  $(this).hide();
  $('.menu-icon i.fa-align-center').show();
  });





// Owl Carousel jS
  $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  })





// code end
}) (jQuery);





