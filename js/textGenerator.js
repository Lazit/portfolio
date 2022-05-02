// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
class TextScramble {
  constructor(el) {
    this.el = el;
    // this.chars = "!<>-_\\/[]{}—=+123456789*;^?()#________";
    this.chars =
      "abcdefghijklmnopqrstuvwxyz!<>-_/[]{}—=+123456789*^?#_=+^&";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 50);
      const end = start + Math.floor(Math.random() * 50);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 2) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
// ——————————————————————————————————————————————————
// Set
// ——————————————————————————————————————————————————

// const el = document.querySelector(".text-set");
// const fx = new TextScramble(el);
// fx.setText("Leeroy jenkins");

// ——————————————————————————————————————————————————
// Changable
// ——————————————————————————————————————————————————

const phrases = [
  "                                         ",
  "Hello!",
  "I'm Hyunmin Kang",
  "I'm Web designer,",
  "Front-end developer,",
  "based in Korea",
  "Still learning hot!",
  "Thank you for vitising.",
];

const el = document.querySelector(".text-gen");
const fx = new TextScramble(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1500);
  });
  counter = (counter + 1) % phrases.length;
  // if (counter == 6) {
  //   fx.setText("Please lookover my works");
  // }
};

next();

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
