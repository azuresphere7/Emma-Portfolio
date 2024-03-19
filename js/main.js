/* -------------------------------------------

Name: 		Trueman
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

$(function() {

  "use strict";

  /***************************

  contact form 1

  ***************************/
  $("#form1").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.trm-popup-form-frame .trm-success-banner').addClass('trm-active');
    });
    return false;
  });

  /***************************

  contact form 2

  ***************************/
  $("#form2").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $('.trm-contact-card .trm-success-banner').addClass('trm-active');
    });
    return false;
  });

  /***************************

  preloader

  ***************************/

  $(document).ready(function() {
    $('html').addClass('is-animating');
    $(".trm-scroll-container").animate({
      opacity: 0,
    });
    setTimeout(function() {
      $('html').removeClass('is-animating');
      $(".trm-scroll-container").animate({
        opacity: 1,
      }, 600);
    }, 1000);
  });

  /***************************

  swup

  ***************************/
  const options = {
    containers: ['#trm-dynamic-content'],
    animateHistoryBrowsing: true,
    linkSelector: '.trm-menu a:not([data-no-swup]), .trm-anima-link:not([data-no-swup])',
    animationSelector: '[class="trm-swup-animation"]'
  };
  const swup = new Swup(options);
  /***************************

  menu

  ***************************/
  $('.trm-menu-btn').on('click', function() {
    $('.trm-menu-btn , .trm-right-side').toggleClass('trm-active');
  })
  $('.trm-menu ul li a').on('click', function() {
    $('.trm-menu-btn , .trm-right-side').removeClass('trm-active');
  })
  /***************************

  mode switch

  ***************************/
  $('.trm-mode-switcher').clone().appendTo('.trm-mode-switcher-place');
  $('#trm-swich').change(function() {
    if (this.checked) {
      $('.trm-hidden-switcher input').prop("checked", true);
      $('.trm-mode-swich-animation-frame').addClass('trm-active');
      $("#trm-scroll-container").animate({
        opacity: 0,
      }, 600, function() {
        setTimeout(function() {
          $('.trm-mode-swich-animation').addClass('trm-active');
          $("#trm-switch-style").attr("href", "css/style-dark.css");
        }, 200);
        setTimeout(function() {
          $('.trm-mode-swich-animation-frame').removeClass('trm-active');
          $("#trm-scroll-container").animate({
            opacity: 1,
          }, 600);
        }, 1000);
      });
    } else {
      $('.trm-hidden-switcher input').prop("checked", false);
      $('.trm-mode-swich-animation-frame').addClass('trm-active');
      $("#trm-scroll-container").animate({
        opacity: 0,
      }, 600, function() {
        setTimeout(function() {
          $('.trm-mode-swich-animation').removeClass('trm-active');
          $("#trm-switch-style").attr("href", "css/style-light.css");
        }, 200);
        setTimeout(function() {
          $('.trm-mode-swich-animation-frame').removeClass('trm-active');
          $("#trm-scroll-container").animate({
            opacity: 1,
          }, 600);
        }, 1000);
      });
    }
  });
  /***************************

  counters

  ***************************/
  $('.trm-counter').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'linear',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  /***************************

  slideshow

  ***************************/
  var swiper = new Swiper('.trm-slideshow', {
    slidesPerView: 1,
    effect: 'fade',
    parallax: true,
    autoplay: true,
    speed: 1400,
  });
  /***************************

  testimonials slider

  ***************************/
  var swiper = new Swiper('.trm-testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    parallax: true,
    autoplay: false,
    speed: 1400,
    pagination: {
      el: '.trm-testimonials-slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.trm-testimonials-slider-next',
      prevEl: '.trm-testimonials-slider-prev',
    },

  });
  /***************************

  fancybox

  ***************************/
  $('[data-fancybox]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });
  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });
  $('[data-fancybox="portfolio"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
    afterLoad: function(instance, current) {
      if (current.opts.$orig[0].nextElementSibling) {
        console.log(current.opts.$orig[0].nextElementSibling);
        current.$content.prepend(current.opts.$orig[0].nextElementSibling.innerHTML);
      }
    }
  });
  $.fancybox.defaults.hash = false;
  /***************************

  locomotive scroll

  ***************************/
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#trm-scroll-container'),
    smooth: true,
    lerp: .1
  });
  document.addEventListener('swup:contentReplaced', (event) => {
    scroll.destroy()
  });
  /*----------------------------------------------------------
  ------------------------------------------------------------

  REINIT

  ------------------------------------------------------------
  ----------------------------------------------------------*/
  document.addEventListener("swup:contentReplaced", function() {

      /***************************

      contact form 1

      ***************************/
      $("#form1").submit(function() {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize()
        }).done(function() {
          $('.trm-popup-form-frame .trm-success-banner').addClass('trm-active');
        });
        return false;
      });

      /***************************

      contact form 2

      ***************************/
      $("#form2").submit(function() {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize()
        }).done(function() {
          $('.trm-contact-card .trm-success-banner').addClass('trm-active');
        });
        return false;
      });

    /***************************

    preloader

    ***************************/
    $(".trm-scroll-container").animate({
      opacity: 1,
    }, 600);
    /***************************

    menu

    ***************************/
    $('.trm-menu-btn').on('click', function() {
      $('.trm-menu-btn , .trm-right-side').toggleClass('trm-active');
    })
    $('.trm-menu ul li a').on('click', function() {
      $('.trm-menu-btn , .trm-right-side').removeClass('trm-active');
    })
    /***************************

    mode switch

    ***************************/
    $('.trm-mode-switcher').clone().appendTo('.trm-mode-switcher-place');
    $('#trm-swich').change(function() {
      if (this.checked) {
        $('.trm-hidden-switcher input').prop("checked", true);
        $('.trm-mode-swich-animation-frame').addClass('trm-active');
        $("#trm-scroll-container").animate({
          opacity: 0,
        }, 600, function() {
          setTimeout(function() {
            $('.trm-mode-swich-animation').addClass('trm-active');
            $("#trm-switch-style").attr("href", "css/style-dark.css");
          }, 200);
          setTimeout(function() {
            $('.trm-mode-swich-animation-frame').removeClass('trm-active');
            $("#trm-scroll-container").animate({
              opacity: 1,
            }, 600);
          }, 1000);
        });
      } else {
        $('.trm-hidden-switcher input').prop("checked", false);
        $('.trm-mode-swich-animation-frame').addClass('trm-active');
        $("#trm-scroll-container").animate({
          opacity: 0,
        }, 600, function() {
          setTimeout(function() {
            $('.trm-mode-swich-animation').removeClass('trm-active');
            $("#trm-switch-style").attr("href", "css/style-light.css");
          }, 200);
          setTimeout(function() {
            $('.trm-mode-swich-animation-frame').removeClass('trm-active');
            $("#trm-scroll-container").animate({
              opacity: 1,
            }, 600);
          }, 1000);
        });
      }
    });
    /***************************

    counters

    ***************************/
    $('.trm-counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
    /***************************

    slideshow

    ***************************/
    var swiper = new Swiper('.trm-slideshow', {
      slidesPerView: 1,
      effect: 'fade',
      parallax: true,
      autoplay: true,
      speed: 1400,
    });
    /***************************

    testimonials slider

    ***************************/
    var swiper = new Swiper('.trm-testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 40,
      parallax: true,
      autoplay: false,
      speed: 1400,
      pagination: {
        el: '.trm-testimonials-slider-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.trm-testimonials-slider-next',
        prevEl: '.trm-testimonials-slider-prev',
      },

    });
    /***************************

    fancybox

    ***************************/
    $('[data-fancybox]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });
    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });
    $('[data-fancybox="portfolio"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });
    $.fancybox.defaults.hash = false;
    /***************************

    locomotive scroll

    ***************************/
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#trm-scroll-container'),
      smooth: true,
      lerp: .1
    });
    document.addEventListener('swup:contentReplaced', (event) => {
      scroll.destroy()
    });
  });

});
