javascript: var letters = {
  A: {},
  B: {},
  C: {},
  D: {},
  E: {},
  F: {},
  G: {},
  H: {},
  I: {},
  J: {},
  K: {},
  L: {},
  M: {},
  N: {},
  O: {},
  P: {},
  Q: {},
  R: {},
  S: {},
  T: {},
  U: {},
  V: {},
  W: {},
  X: {},
  Y: {},
  Z: {},
};
var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var prevLetter = "A";

function updateLetters() {
  for (row = 1; row < 12; row++) {
    for (column = 1; column < 14; column++) {
      let element = document.querySelector(
        "#game > div > div.container > div > table > tbody > tr:nth-child(" +
          row +
          ") > td:nth-child(" +
          column +
          ") > div"
      );
      if (element !== null && element.childElementCount > 1) {
        let letter = element.children[1].innerHTML;
        letters[letter] = {
          click: function () {
            element.click();
          },
          start: function () {
            if (element.children[5].children[0].children[0].innerHTML == "▶")
              element.children[5].children[0].children[0].click();
          },
          pause: function () {
            if (element.children[5].children[0].children[0].innerHTML == "∥")
              element.children[5].children[0].children[0].click();
          },
          upgrade: function () {
            element.children[3].click();
          },
          production: function () {
            let Pro = parseInt(
              element.children[4].children[1].innerText.replace(/,/g, "")
            );
            if ("+" + Pro + "K" == element.children[4].children[1].innerText) {
              Pro = Pro * 1000;
            }
            return Pro;
          },
        };
      }
    }
  }
}

function updateState(letter) {
  if (letter < 0) letter = 0;
  if (letter > 25) letter = 25;

  start = true;
  for (let i = 0; i < 26; i++) {
    if (letters[alphabet[i]].click) {
      if (start) {
        letters[alphabet[i]].start();
      } else {
        letters[alphabet[i]].pause();
      }
      if (letter == i) {
        start = false;
      }
    }
  }
}

function click(letter) {
  if (letter < 0) letter = 0;
  if (letter > 25) letter = 25;

  for (let i = 0; i < 26; i++) {
    if (letters[alphabet[i]].click) {
      letters[alphabet[i]].click();
      if (letter == i) {
        return;
      }
    }
  }
}

updateLetters();

setInterval(function () {
  for (let i = 0; i < 26; i++) {
    if (letters[alphabet[i]].click) {
      if (
        (alphabet[i] == "A" || letters[prevLetter].production() > 10) &&
        letters[alphabet[i]].production() < 11
      ) {
        updateState(i + 1);
        click(i + 1);
        letters[alphabet[i]].upgrade();
      } else {
        prevLetter = alphabet[i];
      }
    }
  }
  updateLetters();
}, 10);
