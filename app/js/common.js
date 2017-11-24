$(function() {

  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '184px',
    slidesToShow: 1,
    speed: 500,
    variableWidth: false,
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
    $('.slick-active .content').addClass('content__display');
    $('.slick-active .left-bracket').addClass('left-bracket__display');
    $('.slick-active .right-bracket').addClass('right-bracket__display');
    // $('.slick-active p').addClass('hidden');
  });
  $('.center').on('afterChange', function(event, slick, currentSlide){
    $('.slick-active .content').removeClass('content__display');
    $('.slick-active .left-bracket').removeClass('left-bracket__display');
    $('.slick-active .right-bracket').removeClass('right-bracket__display');
  });

  // на первом слайдере home при загрузке добавляем текст и скобки
  setTimeout(function () {
    $('.slick-active .content').removeClass('content__display');
    $('.slick-active .left-bracket').removeClass('left-bracket__display');
    $('.slick-active .right-bracket').removeClass('right-bracket__display');
  }, 0);

  // home -> interview list пристаиваем высоту левого блока
    $('.items-wrapper').height($('.interviews .main').height());

    $(".items-wrapper").mCustomScrollbar({theme:"my-theme"});
    var rtime;
    var timeout = false;
    var delta = 200;
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
        $('.items-wrapper').height($('.interviews .main').height());
      }
    }

//    MENUMOB
  $('.menumob__link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass("menumob--hide menumob--animate");
    $(this).next('.menumob').toggleClass("menumob--hide menumob--animate");
  })

  $('.menumob__block__close').click(function (e) {
    e.preventDefault();
    $(this).parents('.menumob').toggleClass("menumob--hide menumob--animate");
    $(this).parents('.menumob').prev('.menumob__link').toggleClass("menumob--hide menumob--animate");
  })


});