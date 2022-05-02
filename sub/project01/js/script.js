// $(function () {
//   document.getElementById("video1").play();
//   $("#video1").bind("ended", function () {
//     $(this).removeClass("showvideo");
//     $("#video2").addClass("showvideo").get(0).currentTime = 0;
//     document.getElementById("video2").play();
//   });
//   $("#video2").bind("ended", function () {
//     $(this).removeClass("showvideo");
//     $("#video3").addClass("showvideo").preload().get(0).currentTime = 0;
//     document.getElementById("video3").play();
//   });
//   $("#video3").bind("ended", function () {
//     $(this).removeClass("showvideo");
//     $("#video4").addClass("showvideo").get(0).currentTime = 0;
//     document.getElementById("video4").play();
//   });
//   $("#video4").bind("ended", function () {
//     $(this).removeClass("showvideo");
//     $("#video5").addClass("showvideo").get(0).currentTime = 0;
//     document.getElementById("video5").play();
//   });
//   $("#video5").bind("ended", function () {
//     $(this).removeClass("showvideo");
//     $("#video1").addClass("showvideo").get(0).currentTime = 0;
//     document.getElementById("video1").play();
//   });
// });

// if ($(".main1 video").prop("ended")) {
//   $("#video1").attr("src", "src/vid/vid2.mp4");
// }

// if ($("#video1").bind("ended")) {
//   $("#video1").hide();
//   $("#video2").show();
//   $("#video2").play();
// }

// var i = 0;
// var n = i + 1;
// $(".main1 video").eq(i).get(0).play();
// setInterval(function () {
//   if (n == 5) n = 0;
//   if ($(".main1 video").eq(i).prop("ended")) {
//     $(".main1 video").removeClass("showvideo");
//     $(".main1 video").eq(n).addClass("showvideo");
//     $(".main1 video").eq(n).get(0).play();
//   }
//   i = n;
// });

// function init() {
//   var video = $(".main1").find("#video1");
//   // 동영상 재생
//   video.get(0).play();
// }
// init();
// var i = 0;
// var n = i + 1;
// if ($(".main1 video").eq(i).prop("ended")) {
//   setInterval(function () {
//     if ($(".main1 video").eq(i).prop("ended")) {
//       $(".main1 video").removeClass("showvideo");
//       $(".main1 video").eq(n).addClass("showvideo");
//     }
//     if (n == 5) n = 0;
//     i = n;
//   });
// }

// $(".showvideo").get(0).play();

// setInterval(function () {
//   if ($(".showvideo").prop("ended")) {
//     console.log("hello");
//   }
// }, 2000);

var i = 0;
$(".showvideo").get(0).play();

setInterval(function () {
  if ($(".showvideo").prop("ended")) {
    i++;
    $(".main1 section video").removeClass("showvideo");
    $(".main1 section").removeClass("selected");
    $(".main1 section").eq(i).addClass("selected");
    //main1안에 있는 i번째의 section에 select 클래스 추가
    $(".main1 section video").eq(i).addClass("showvideo");
    //main1 section 안에있는 video 의 i번째에 showvideo 클래스 추가인데..
    //만약 i가 3이라고 한다면 .main1 section 안에 있는 3번째 비디오에 show video 추가인가..\
    //이게 정상작동 하는 이유는 html에서 구분되어진 section태그를 여기선 통째로 보기 때문일까
    $(".showvideo").get(0).play();
  }
  if (i == 4) {
    i = -1;
  }
});
