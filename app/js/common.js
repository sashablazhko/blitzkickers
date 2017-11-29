$(function() {

  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '184px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          infinite: true,
          slidesToShow: 1,
          adaptiveHeight: false
        }
      }
    ]
  });

  $('.videoDesc').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.productDesc').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.popularDesc').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  // на первом слайдере home при переключении слайдов добавляем текст и скобки
  $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.center .slick-active .content').addClass('content__display');
    $('.center .slick-active .left-bracket').addClass('left-bracket__display');
    $('.center .slick-active .right-bracket').addClass('right-bracket__display');
    // $('.slick-active p').addClass('hidden');
  });
  $('.center').on('afterChange', function(event, slick, currentSlide){
    $('.center .slick-active .content').removeClass('content__display');
    $('.center .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.center .slick-active .right-bracket').removeClass('right-bracket__display');
  });

  $('.centermob').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '22px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false
  });
  $('.centermob').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.centermob .slick-active .clip__itemmob__cont').addClass('content__display');
    $('.centermob .slick-active .left-bracket').addClass('left-bracket__display');
    $('.centermob .slick-active .right-bracket').addClass('right-bracket__display');
    // $('.slick-active p').addClass('hidden');
  });
  $('.centermob').on('afterChange', function(event, slick, currentSlide){
    $('.centermob .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermob .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermob .slick-active .right-bracket').removeClass('right-bracket__display');
  });

  $('.centermobVideo').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '22px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false
  });
  $('.centermobVideo').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.centermobVideo .slick-active .clip__itemmob__cont').addClass('content__display');
    $('.centermobVideo .slick-active .left-bracket').addClass('left-bracket__display');
    $('.centermobVideo .slick-active .right-bracket').addClass('right-bracket__display');
    // $('.slick-active p').addClass('hidden');
  });
  $('.centermobVideo').on('afterChange', function(event, slick, currentSlide){
    $('.centermobVideo .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermobVideo .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermobVideo .slick-active .right-bracket').removeClass('right-bracket__display');
  });

  $('.centermobProductions').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '22px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false
  });
  $('.centermobProductions').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.centermobProductions .slick-active .clip__itemmob__cont').addClass('content__display');
    $('.centermobProductions .slick-active .left-bracket').addClass('left-bracket__display');
    $('.centermobProductions .slick-active .right-bracket').addClass('right-bracket__display');
    // $('.slick-active p').addClass('hidden');
  });
  $('.centermobProductions').on('afterChange', function(event, slick, currentSlide){
    $('.centermobProductions .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermobProductions .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermobProductions .slick-active .right-bracket').removeClass('right-bracket__display');
  });

  $('.centermobPopular').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '22px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false
  });
  $('.centermobPopular').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.centermobPopular .slick-active .clip__itemmob__cont').addClass('content__display');
    $('.centermobPopular .slick-active .left-bracket').addClass('left-bracket__display');
    $('.centermobPopular .slick-active .right-bracket').addClass('right-bracket__display');
    // $('.slick-active p').addClass('hidden');
  });
  $('.centermobPopular').on('afterChange', function(event, slick, currentSlide){
    $('.centermobPopular .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermobPopular .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermobPopular .slick-active .right-bracket').removeClass('right-bracket__display');
  });

  // на первом слайдере home при загрузке добавляем текст и скобки
  setTimeout(function () {
    $('.center .slick-active .content').removeClass('content__display');
    $('.center .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.center .slick-active .right-bracket').removeClass('right-bracket__display');

    $('.centermob .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermob .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermob .slick-active .right-bracket').removeClass('right-bracket__display');

    $('.centermobVideo .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermobVideo .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermobVideo .slick-active .right-bracket').removeClass('right-bracket__display');

    $('.centermobProductions .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermobProductions .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermobProductions .slick-active .right-bracket').removeClass('right-bracket__display');

    $('.centermobPopular .slick-active .clip__itemmob__cont').removeClass('content__display');
    $('.centermobPopular .slick-active .left-bracket').removeClass('left-bracket__display');
    $('.centermobPopular .slick-active .right-bracket').removeClass('right-bracket__display');
  }, 0);

    var rtime;
    var timeout = false;
    var delta = 200;

    var $window = $(window);
    var windowsize = $window.width();
  // home -> interview list пристаиваем высоту левого блока
    if (windowsize >= 993){
      $('.items-wrapper').height($('.interviews .main').height());
      $(".items-wrapper").mCustomScrollbar({
        theme:"my-theme"
      });

      $('.interinter__list__items-wrapper').height($('.interinter .interinter__flex').height());
      $(".interinter__list__items-wrapper").mCustomScrollbar({
        theme:"my-theme"
      });
    }else{
      $('.items-wrapper').css('height', 'auto');
      $('.header-wrapper').append( $('#menumob') );
    }



    $(window).resize(function() {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
      }
    });

    function resizeend() {
      if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
      } else {
        timeout = false;
        if (windowsize >= 993){
          $('.items-wrapper').height($('.interviews .main').height());

          $('.interinter__list__items-wrapper').height($('.interinter .interinter__flex').height());
        }else{
          $('.items-wrapper').css('height', 'auto');
        }
      }
    }

//    MENUMOB
  $('.menumob__link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass("menumob--hide menumob--animate");
    $('#menumob').toggleClass("menumob--hide menumob--animate");
  })

  $('.menumob__block__close').click(function (e) {
    e.preventDefault();
    $('#menumob').toggleClass("menumob--hide menumob--animate");

    if (windowsize <= 992) {
      $('#menumob__link__header').toggleClass("menumob--hide menumob--animate");
      // console.log('windowsize ' + windowsize);
    }else{
      $(this).parents('.menumob').prev('.menumob__link').toggleClass("menumob--hide menumob--animate");
      // console.log('windowsize ' + windowsize);
    }
  })





});