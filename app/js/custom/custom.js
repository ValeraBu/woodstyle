jQuery(document).ready(function($){
  $('.catalog-list').hover(function(event) {
    event.preventDefault();
    $(this).toggleClass('open');
    if ($('.catalog-list').hasClass('open')) {
      $('.catalog-bg').addClass('visible');
    }else {
      $('.catalog-bg').removeClass('visible');
    }
  });

  $('.main-slider').slick({
  	infinte: true,
  	slidesToShow: 1,
  	slidesToScroll:1,
  	dots: true
  });

   $('.scroll').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
     scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
   });

   $('.title-mobile').on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass('open');
    $('.gallery-dropdown-nav').toggleClass('open');
    $('.catalog-bg').toggleClass('gallery-bg');
   });

   $('.catalog-bg').on("click", function (event) {
    event.preventDefault();
     $(this).removeClass('gallery-bg');
    $('.gallery-dropdown-nav').removeClass('open');
    $('.title-mobile').removeClass('open');
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      focusOnSelect: true
    });

    $( "#size" ).spinner();
});
