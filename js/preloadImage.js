var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

//-- usage --//
preload(
  "src/img/canal-sheet.png",
  "src/img/Tolv.png",
  "src/img/Won-Hundred.png",
  "src/img/Donica.png",
  "src/img/resume-en.png",
  "src/img/resume-ko.png",
  "carrot-horz"
);
