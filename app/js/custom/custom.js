  jQuery(document).ready(function($){
  $('.catalog-list').hover(function(event) {
    event.preventDefault();
    if(event.type=="mouseenter") {
      $(this).addClass('open');
    }
    if(event.type=="mouseleave") {
      $(this).removeClass('open');
    }
    
    if ($('.catalog-list').hasClass('open')) {
      $('.catalog-bg').addClass('visible');
    }else {
      $('.catalog-bg').removeClass('visible');
    }
  });

  $(window).scroll(function(){
   if( $(window).scrollTop() > 300 ) {
     $('.up-top').addClass('visible');
   } else {
     $('.up-top').removeClass('visible');
   }
 });

   $('.news').slick({
    infinte: true,
    slidesToShow: 1,
    slidesToScroll:1,
    rows: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 981,
        settings: {
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 498,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    $('.slick-prev').click(function(){
    $('.news').slick('slickPrev');
  });
    $('.slick-next').click(function(){
    $('.news').slick('slickNext');
  });


   $('.recommendations-slider').slick({
    infinte: true,
    slidesToShow: 3,
    slidesToScroll:1,
    dots: false,
    arrow: true,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 498,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
   $('.slick-prev').click(function(){
    $('.recommendations-slider').slick('slickPrev');
  });
    $('.slick-next').click(function(){
    $('.recommendations-slider').slick('slickNext');
  });

   $('.view-slider').slick({
    infinte: true,
    slidesToShow: 3,
    slidesToScroll:1,
    dots: false,
    arrow: true,
     responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 498,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    $('.slick-prev2').click(function(){
    $('.view-slider').slick('slickPrev');
  });
    $('.slick-next2').click(function(){
    $('.view-slider').slick('slickNext');
  });



  $('.main-slider').slick({
  	infinte: true,
  	slidesToShow: 1,
  	slidesToScroll:1,
  	dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

   $('.gallery-slider').slick({
    infinte: true,
    slidesToShow: 1,
    slidesToScroll:1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
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
      if ($(this).hasClass('open')) {
        $('.gallery-dropdown-nav').fadeIn("slow");
      } else {
        $('.gallery-dropdown-nav').fadeOut("slow");
      }
   });

   $('.catalog-bg').on("click", function (event) {
    event.preventDefault();
     $(this).removeClass('gallery-bg');
     $('.gallery-dropdown-nav').fadeOut();
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

      $('.filter-btn').on("click", function (event) {
        event.preventDefault();
        $('.catalog-form').addClass('open');
        $('body').addClass('overflow')
       });

      $('.filter-close').on("click", function (event) {
        event.preventDefault();
        $('.catalog-form').removeClass('open');
        $('body').removeClass('overflow')
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

     $("#form-entrance").validate();
     $("#write-form").validate();
     $("#service-form").validate();
     $("#service-form_mini").validate();
     $("#form-experts").validate();
     $("#partner-form").validate();
     $("#faq-form").validate();
     $("#check-form").validate();
     $("#no-reg").validate();
     $("#register-form").validate();
     $("#account-form").validate();
     $("#password-form").validate();
    

      $("#check-phone").mask("+7 (999) 999-9999");
      $("#phone-order").mask("+7 (999) 999-9999");
      $("#your-phone").mask("+7 (999) 999-9999");

     $('.question').click(function (event) {
      $(this).toggleClass('clicked');
      $(this).parent('.questions-inner').toggleClass('clicked');
      $(this).parent('.questions-inner').find('.faq-answer').slideToggle();
      $(this).parent('.questions-inner').siblings().find('.faq-answer').slideUp();
      $(this).parent('.questions-inner').siblings().removeClass('clicked').find('.question.clicked').removeClass('clicked');
     });

      $('.span-click').on("click", function (event) {
        event.preventDefault();
         $(this).toggleClass('check');
         $(this).parent('.catalog-title').siblings('.filter-inner').slideToggle();
       });

     $('#tabs-goods li a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
      });
      $('#select-goods').on('change', function(e) {
        $('#tabs-goods li a').eq($(this).val()).tab('show');
      });

      $('select').select2();

      $('.close-all').on('click', function (event) {
      event.preventDefault();
      $(this).parent('.top-filter_item').hide();
     });

      $(".wrapper .services-inner-block2:odd").addClass("float");
       $(".wrapper .gallery-block:odd").addClass("float");
       $(".wrapper .experts-block:odd").addClass("float");
       $(".wrapper .reviews-block:odd").addClass("float");

   });

$(function() {
  $(".mobile-menu").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      $(this).removeClass('open');
      $('.inner-menu').removeClass('open');
      $('.menu-bg').removeClass('visible');
      $('body').removeClass('overflow');

    }
  });

  //Set some options later
  $(".mobile-menu ").swipe( {fingers:1} );
});

  jQuery(document).ready(function($){
$('#account-form input').keyup(function(){
  $('#account-form').find('.btn-check').removeAttr('disabled');
});

});

