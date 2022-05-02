$(window).scroll(function () {
  var s = $(window).scrollTop();
  if (s >= 100) {
    $("#header").addClass("fix");
    $(".mo-menu").attr({
      src: "src/icon/menu_thin.png",
    });
    $(".search-icon a img").attr({
      src: "src/icon/search_small.png",
    });
    $(".cart-icon a img").attr({
      src: "src/icon/shopping-bag.png",
    });
    $(".user-icon a img").attr({
      src: "src/icon/user.png",
    });
    $(".gnb ul li").css("color", "black");
  } else {
    $("#header").removeClass("fix");
    $(".mo-menu").attr({
      src: "src/icon/menuwhite.png",
    });
    $(".search-icon a img").attr({
      src: "src/icon/search_small_white.png",
    });
    $(".cart-icon a img").attr({
      src: "src/icon/shopping-bagwhite.png",
    });
    $(".user-icon a img").attr({
      src: "src/icon/userwhite.png",
    });
    $(".gnb ul li").css("color", "white");
  }
});

$(".m3-menu").click(function () {
  var i = $(this).index();
  $(".m3-inner").hide();
  $(".m3-inner").eq(i).fadeIn(400);
  $(".m3-menu").removeClass("selected");
  $(this).addClass("selected");
});

$(window).scroll(function () {
  var s = $(window).scrollTop(); //브라우저의 현재 스크롤 위치값 저장
  console.log(s); //저장된 값 보여주기
  var a1 = $(".main2").offset().top;
  var a2 = $(".m2-slide").offset().top;
  var a3 = $(".m4-banner").offset().top;
  var a4 = $(".m5-p-price").offset().top;
  var a5 = $(".m6-title").offset().top;
  var a6 = $(".m6-viewmore-btn").offset().top;

  // var a7 = $(".bi-text span").offset().top;
  // var a8 = $(".main_quick").offset().top;
  // var a9 = $(".main_quick").offset().top;
  // var a10 = $(".main_quick").offset().top;
  // var n = $(".main_quick").offset().top; //세로 위치
  //가로위치는 offset().left;

//   if (s >= 200) {
//     $(".m2-title").addClass("move");
//     $(".m2-titlenote").addClass("move");
//   } else {
//     $(".m2-title").removeClass("move");
//     $(".m2-titlenote").removeClass("move");
//   }
//   if (s >= 400) {
//     $(".m2-slide").addClass("move");
//   } else {
//     $(".m2-slide").removeClass("move");
//   }
//   if (s >= a1) {
//     $(".m3-titlebox").addClass("move");
//   } else {
//     $(".m3-titlebox").removeClass("move");
//   }
//   if (s >= a2) {
//     $(".m3-inner-container").addClass("move");
//   } else {
//     $(".m3-inner-container").removeClass("move");
//   }
//   if (s >= 3000) {
//     $(".m4-title").addClass("move");
//   } else {
//     $(".m4-title").removeClass("move");
//   }
//   if (s >= 3200) {
//     $(".m4-banner").addClass("move");
//   } else {
//     $(".m4-banner").removeClass("move");
//   }
//   if (s >= a3) {
//     $(".m5-title").addClass("move");
//   } else {
//     $(".m5-title").removeClass("move");
//   }
//   if (s >= a3) {
//     $(".m5-slide").addClass("move");
//   } else {
//     $(".m5-slide").removeClass("move");
//   }
//   if (s >= a4) {
//     $(".m6-textbox-container").addClass("move");
//   } else {
//     $(".m6-textbox-container").removeClass("move");
//   }
//   if (s >= a5) {
//     $(".m7-titlebox").addClass("move");
//   } else {
//     $(".m7-titlebox").removeClass("move");
//   }
//   if (s >= a6) {
//     $(".m7-container").addClass("move");
//   } else {
//     $(".m7-container").removeClass("move");
//   }
//   if (s >= 7000) {
//     $(".m8-textbox").addClass("move");
//   } else {
//     $(".m8-textbox").removeClass("move");
//   }
//   if (s >= 7100) {
//     $(".m8-content").addClass("move");
//   } else {
//     $(".m8-content").removeClass("move");
//   }
// });

//브라우저 스크롤 마지막

// $(".mo-menu").attr({
//   src: "src/icon/menuwhite.png",
// });
// $(".search-icon").attr({
//   src: "src/icon/search_small_white.png",
// });
// $(".cart-icon").attr({
//   src: "src/icon/shopping-bagwhite.png",
// });
// $(".user-icon").attr({
//   src: "src/icon/userwhite.png",
// });
