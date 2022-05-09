  
  //  ハンバーガーメニュー
  $(".header__navbtn").click(function () {
    $(".header__nav").toggleClass("show");
  });

  $(".header__navbtn").click(function () {
    $(".header__navbtn span").toggleClass("show");
  });
  
  //  スライダー
  $('.slider').slick({
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    speed: 3000,
    dotsClass:'slick-dots',
    dots: true,
    arrows: false,
    //fade: true,
    slidesToShow: 4,
    responsive:[
      {
        breakpoint: 768,
        settings:{
          slidesToShow:  1,
          slidesToScroll: 1,
        }
      }
    ]
  });



    //  スムーズスクロール
    $('a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({
          scrollTop: position
        }, speed, 'swing');
        return false;
      });
    
      //  下からふわっと
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).addClass("on")
      }
    });
  });