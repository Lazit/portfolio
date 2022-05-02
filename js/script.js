$(".grid__item").hover(
  function () {
    $(".custom-cursor").css("borderColor", "black");
    $(".custom-cursor-dot").css("backgroundColor", "black");
  },
  function () {
    $(".custom-cursor").css("borderColor", "beige");
    $(".custom-cursor-dot").css("backgroundColor", "beige");
  }
);
$(".subject").hover(
  function () {
    $(".custom-cursor").css("borderColor", "black");
    $(".custom-cursor-dot").css("backgroundColor", "black");
  },
  function () {
    $(".custom-cursor").css("borderColor", "beige");
    $(".custom-cursor-dot").css("backgroundColor", "beige");
  }
);



$(".about-me a").on("click", function () {
  $(".black-wrap").css("display", "flex");
  $(".black-wrap-in").css("display", "flex");
  $(".en-resume").css("display", "none")
  $(".ko-resume").css("display", "block")
  $(".ko-resume").addClass("flip-in-ver-left");
})


$(".korean").on("click", function () {
  $(".en-resume").css("display", "none")
  $(".ko-resume").css("display", "block")
  $(".ko-resume").removeClass("flip-out-ver-right");
  $(".en-resume").removeClass("flip-in-ver-right");
  $(".ko-resume").removeClass("flip-in-ver-left");
  $(".ko-resume").addClass("flip-in-ver-left");
  $(".en-resume").addClass("flip-out-ver-left");
})
$(".english").on("click", function () {
  $(".en-resume").css("display", "block")
  $(".ko-resume").css("display","none")
  $(".ko-resume").removeClass("flip-in-ver-left");
  $(".en-resume").removeClass("flip-out-ver-left");
  $(".ko-resume").removeClass("flip-in-ver-left");
  $(".ko-resume").addClass("flip-out-ver-right");
  $(".en-resume").addClass("flip-in-ver-right");
})

$(".close-btn").on("click", function () {
  $(".ko-resume").removeClass("flip-out-ver-right");
  $(".ko-resume").removeClass("flip-out-ver-left");
  $(".ko-resume").removeClass("flip-in-ver-right");
  $(".ko-resume").removeClass("flip-in-ver-left");
  $(".en-resume").removeClass("flip-out-ver-right");
  $(".en-resume").removeClass("flip-out-ver-left");
  $(".en-resume").removeClass("flip-in-ver-right");
  $(".en-resume").removeClass("flip-in-ver-left");
  $(".black-wrap").css("display", "none");
  $(".black-wrap-in").css("display", "none");
})

// item 1
// item 1
// item 1
$(".item01").on("click", function () {
  $(".subject01").css("display", "block");
  $(".subject01").addClass("scale-in-ver-bottom");
  setTimeout(function () {
    $(".s_wrap").css("display", "flex");
  }, 1000);
  setTimeout(function () {
    $(".s1__grid--left").css("display", "block");
    $(".s1__grid--left").addClass("scale-in-ver-top");
  }, 1200);
  setTimeout(function () {
    $(".s1__grid--right").css("display", "block");
    $(".grid__left--innerbox").css("display", "block");
    $(".grid__left--innerbox").addClass("scale-in-hor-left");
    $(".grid__right--titlewrap").css("display", "flex");
    $(".grid__right--titlewrap").addClass("scale-in-hor-left");
  }, 1400);
  setTimeout(function () {
    $(".grid__left--innerbox a").css("display", "flex");
    $(".grid__left--innerbox a").addClass("swing-in-top-fwd");
    $(".grid__right--titlewrap h2").css("display", "flex");
    $(".grid__right--titlewrap h2").addClass("swing-in-top-fwd");
    $(".grid__right--areawrap").css("display", "flex");
    $(".grid__right--areawrap").addClass("swing-in-top-fwd");
  }, 1800);
  return false;
});
// item 2
// item 2
// item 2
$(".item02").on("click", function () {
  $(".subject02").css("display", "block");
  $(".subject02").addClass("scale-in-ver-bottom");
  setTimeout(function () {
    $(".s_wrap").css("display", "flex");
  }, 1000);
  setTimeout(function () {
    $(".s1__grid--left").css("display", "block");
    $(".s1__grid--left").addClass("scale-in-ver-top");
  }, 1200);
  setTimeout(function () {
    $(".s1__grid--right").css("display", "block");
    $(".grid__left--innerbox").css("display", "block");
    $(".grid__left--innerbox").addClass("scale-in-hor-left");
    $(".grid__right--titlewrap").css("display", "flex");
    $(".grid__right--titlewrap").addClass("scale-in-hor-left");
  }, 1400);
  setTimeout(function () {
    $(".grid__left--innerbox a").css("display", "flex");
    $(".grid__left--innerbox a").addClass("swing-in-top-fwd");
    $(".grid__right--titlewrap h2").css("display", "flex");
    $(".grid__right--titlewrap h2").addClass("swing-in-top-fwd");
    $(".grid__right--areawrap").css("display", "flex");
    $(".grid__right--areawrap").addClass("swing-in-top-fwd");
  }, 1800);
  return false;
});

// item 3
// item 3
// item 3
$(".item03").on("click", function () {
  $(".subject03").css("display", "block");
  $(".subject03").addClass("scale-in-ver-bottom");
  setTimeout(function () {
    $(".s_wrap").css("display", "flex");
  }, 1000);
  setTimeout(function () {
    $(".s1__grid--left").css("display", "block");
    $(".s1__grid--left").addClass("scale-in-ver-top");
  }, 1200);
  setTimeout(function () {
    $(".s1__grid--right").css("display", "block");
    $(".grid__left--innerbox").css("display", "block");
    $(".grid__left--innerbox").addClass("scale-in-hor-left");
    $(".grid__right--titlewrap").css("display", "flex");
    $(".grid__right--titlewrap").addClass("scale-in-hor-left");
  }, 1400);
  setTimeout(function () {
    $(".grid__left--innerbox a").css("display", "flex");
    $(".grid__left--innerbox a").addClass("swing-in-top-fwd");
    $(".grid__right--titlewrap h2").css("display", "flex");
    $(".grid__right--titlewrap h2").addClass("swing-in-top-fwd");
    $(".grid__right--areawrap").css("display", "flex");
    $(".grid__right--areawrap").addClass("swing-in-top-fwd");
  }, 1800);
  return false;
});

// item 4
// item 4
// item 4


//view more 공사중!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// $(".viewmore").on("click", function () {
//   $(".subject04").css("display", "block");
//   $(".subject04").addClass("scale-in-ver-bottom");
//   return false;
// });




// backtotop
// backtotop
// backtotop
$(".backToTop").on("click", function () {
  $(".s_wrap").addClass("fade-out");
  setTimeout(function () {
    $(".subject").removeClass("scale-in-ver-bottom");
    $(".subject").addClass("scale-out-ver-bottom");
  }, 300);
  setTimeout(function () {
    $(".subject").css("display", "none");
    $(".s_wrap").css("display", "none");
    $(".s1__grid--left").css("display", "none");
    $(".grid__left--innerbox").css("display", "none");
    $(".grid__left--innerbox a").css("display", "none");
    $(".s1__grid--right").css("display", "none");
    $(".grid__right--titlewrap").css("display", "none");
    $(".grid__right--titlewrap h2").css("display", "none");
    $(".grid__right--areawrap").css("display", "none");
    $(".s1__grid--left").removeClass("scale-in-ver-top");
    $(".grid__left--innerbox").removeClass("scale-in-hor-left");
    $(".grid__left--innerbox a").removeClass("swing-in-top-fwd");
    $(".grid__right--titlewrap").removeClass("scale-in-hor-left");
    $(".grid__right--titlewrap h2").removeClass("swing-in-top-fwd");
    $(".grid__right--areawrap").removeClass("swing-in-top-fwd");
    $(".s_wrap").removeClass("fade-out");
    $(".subject").removeClass("scale-out-ver-bottom");
    $(".s1_menu").removeClass("show");
    $(".s1_m1").addClass("show");
    $(".left_cate a").removeClass("selected");
    $(".l_one a").addClass("selected");
  }, 1300);
  return false;
});

$(".left_cate a").on("click", function () {
  $(".grid__right--titlewrap").removeClass("scale-in-hor-left");
  $(".left_cate a").removeClass("selected");
  $(this).addClass("selected");
  return false;
});

// side menu add section


$(".l_one a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m1").addClass("show");
  return false;
});
$(".l_two a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m2").addClass("show");
  return false;
});
$(".l_three a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m3").addClass("show");
  return false;
});
$(".l_four a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m4").addClass("show");
  return false;
});
$(".l_five a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m5").addClass("show");
  return false;
});
$(".l_six a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m6").addClass("show");
  return false;
});
$(".l_seven a").on("click", function () {
  $(".s1_menu").removeClass("show");
  $(".s1_m7").addClass("show");
  return false;
});





$(".viewmore").hover(
  function () {
    $(".view-title").css("display", "none");
    $(".progress").css("display", "block");
  },
  function () {
    $(".view-title").css("display", "block");
    $(".progress").css("display", "none");
  }
);