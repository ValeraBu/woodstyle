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

   $('.gallery-slider').slick({
    infinte: true,
    slidesToShow: 1,
    slidesToScroll:1,
    dots: true
  });

  $('.another-goods_slider').slick({
    infinte: true,
    slidesToShow: 4,
    slidesToScroll:1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1021,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 691,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
    $('.slick-prev').click(function(){
    $('.another-goods_slider').slick('slickPrev');
  });
    $('.slick-next').click(function(){
    $('.another-goods_slider').slick('slickNext');
  });

     $("a[data-toggle='tab']").on("click", function (e) {
    $('.another-goods_slider').slick('slickGoTo', 0).fadeIn('1000');
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
      focusOnSelect: true,
          responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 4
        }
      }
    ]
    });

      $('.menu-icon').on("click", function (event) {
        event.preventDefault();
        $('.mobile-menu').addClass('open');
        $('.menu-bg').addClass('visible');
        $('body').addClass('overflow');
       });

      $('.title').on("click", function (event) {
        event.preventDefault();
        $(this).siblings('.inner-menu').addClass('open');
       })

     $('.close-menu').on("click", function (event) {
      event.preventDefault();
      $('.mobile-menu').removeClass('open');
      $('.inner-menu').removeClass('open');
      $('.menu-bg').removeClass('visible');
      $('body').removeClass('overflow');
     });

      $('.menu-bg').on("click", function (event) {
      $(this).removeClass('visible');
      $('.mobile-menu').removeClass('open');
      $('.inner-menu').removeClass('open');
      $('body').removeClass('overflow');
     });

       $('.btn-write').on("click", function (event) {
      $('.menu-bg').removeClass('visible');
      $('.mobile-menu').removeClass('open');
      $('.inner-menu').removeClass('open');
      $('body').removeClass('overflow');
     });

      $('.close-inner-menu').on("click", function (event) {
      $(this).closest('.inner-menu').removeClass('open');
     });

     $( "#good-size" ).spinner({
      change: function( event, ui ) {}
    });

     $( "#card2" ).spinner({
      change: function( event, ui ) {}
    });

     $( "#card1" ).spinner({
      change: function( event, ui ) {}
    });

     $('.question').click(function (event) {
      $(this).toggleClass('clicked');
      $(this).parent('.questions-inner').toggleClass('clicked');
      $(this).parent('.questions-inner').find('.faq-answer').slideToggle();
      $(this).parent('.questions-inner').siblings().find('.faq-answer').slideUp();
      $(this).parent('.questions-inner').siblings().removeClass('clicked').find('.question.clicked').removeClass('clicked');
     });
     $('#tabs-goods li a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
      });
      $('#select-goods').on('change', function(e) {
        $('#tabs-goods li a').eq($(this).val()).tab('show');
      });

      $('select').select2();
   });

// jQuery(document).ready(function($) {
//    var $window = $(window),
//   $news = $('.news'),
//   toggleSlick;

// toggleSlick = function () {
//  if ($window.width() < 649) {
//    $news.slick({
//      infinite: false,
//      slidesToShow: 1,
//      slidesToScroll: 1,
//      arrows: true,
//      dots: false
//    });
//   }
//  else {
//   $news.slick('unslick'),
//  }
// }

// $window.resize(toggleSlick);
// toggleSlick();
// });