
(function ( $ ) {
    "use strict";

  $('.slider-active').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
  });
   $('.testimonial-active').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  
   });
  $('.logo-active').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
    adaptiveHeight: true,
    arrows: false,
  
  });


  
      $('.akash-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.akash-nav'
    });
    $('.akash-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.akash-active',
        dots: false,
        prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding:0
    });
  

})(jQuery);