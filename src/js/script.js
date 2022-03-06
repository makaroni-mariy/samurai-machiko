
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('load',function(){ 
    var path = location.pathname
    if (path == "/index.html"){
      $(window).on('scroll', function () {
        if ($('.p-top-fv').height() < $(this).scrollTop()) {
          $('.p-header').css('background', 'rgba(17,17,17,1)');
        } else {
          $('.p-header').css('background', 'rgba(17,17,17,0.5)');
        }
      });
    } else {
      $(window).on('scroll', function () {
        if ($('.c-page-fv').height() < $(this).scrollTop()) {
          $('.p-header').css('background', 'rgba(17,17,17,1)');
        } else {
          $('.p-header').css('background', 'rgba(17,17,17,0.5)');
        }
      });
    }
    
  });
  

  // ハンバーガー・spナビメニュー
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").fadeOut();
      $("header").css("background-color", "rgba(17, 17, 17, 0.5)");
      $(this).removeClass("is-open");
    } else {
      $(".js-drawer-menu").fadeIn();
      $("header").css("background-color", "rgba(17, 17, 17, 1)");
      $(this).addClass("is-open");
    }
  });

   // top-fvスライダー
   var swiper1 = new Swiper(".js-top-fv-swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });


  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



});
