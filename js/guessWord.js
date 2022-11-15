const words = [
  { name: "cat", char: `The baby of this animal is a kitten.` },
  { name: "lion", char: `This animal is called the king of the jungle.` },
  { name: "elephant", char: `This animal has a very long trunk.` },
  { name: "dog", char: `This animal can bark.` },
  { name: "zebra", char: `This animal has black and white stripes.` },
  { name: "squirrel", char: `This animal can climb trees and collect nuts.` },
  { name: "frog", char: `This animal is green and can jump around.` },
  { name: "snail", char: `This animal travels very slowly.` },
  { name: "giraffe", char: `This animal has a very long neck.` },
  { name: "penguin", char: `This bird cannot fly, but can swim.` },
  { name: "bear", char: `This animal is a symbol of Berlin.` },
  { name: "mouse", char: `This animal is known as Micky.` },
  { name: "cheetah", char: `This is the fastest land animal in the world.` },
];

const startGameBtn = document.querySelector("#button"),
  message1 = document.querySelector(".info"),
  box = document.querySelector(".box");

const input = document.createElement("input"),
  checkBtn = document.createElement("a"),
  lines = document.createElement("div"),
  message2 = document.createElement("p");

message1.classList.add("message");
message2.classList.add("help_text");
input.focus();
checkBtn.innerHTML = "Check the letter";
checkBtn.classList.add("checkBtn");
lines.classList.add("lines");

let object = {},
  wordArray = [],
  linesArray = [],
  attempts = 3;

startGameBtn.addEventListener("click", startGame);
checkBtn.addEventListener("click", playGame);

function getRnd() {
  return parseInt(Math.random() * words.length + 1);
}
function getRndObject() {
  return words[getRnd()];
}
function getLinesArray(str) {
  linesArray = str.split("").map((item) => (item = "-"));
  return linesArray;
}
function getWordArray(word) {
  wordArray = word.split("");
  return wordArray;
}
function startGame() {
  object = getRndObject();
  getWordArray(object.name);
  message1.innerHTML = `My word has ${object.name.length} letters. <br /> ${object.char}`;
  message1.after(lines);
  lines.innerHTML = getLinesArray(object.name).join(" ");
  message2.innerHTML = "Insert a letter";
  lines.after(message2);
  message2.after(input);
  input.after(checkBtn);
  startGameBtn.remove();
  attempts = 3;
}

function checkLetter() {
  let letterContains = false;
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === `${input.value}` && linesArray[i] == "-") {
      linesArray[i] = input.value;
      input.value = "";
      letterContains = true;
    }
  }
  return letterContains;
}

function playGame() {
  if (checkLetter()) {
    message1.innerHTML = `Super!!!<br />${object.char}`;
    message2.innerHTML = "One more letter?";
    lines.innerHTML = linesArray.join(" ");
    input.value = "";
    if (linesArray.indexOf("-") === -1) {
      message1.innerHTML = "Great!!! You guessed the word!";
      message2.innerHTML = "Would you like to play one more time?";
      message2.after(startGameBtn);
      startGameBtn.addEventListener("click", startGame);
      input.remove();
      checkBtn.remove();
    }
  } else {
    if (input.value == "" || !isNaN(input.value)) {
      message1.innerHTML = `Please, enter a letter.`;
      message2.innerHTML = `${object.char}`;
      input.value = "";
    } else if (attempts > 1) {
      message1.innerHTML = `There is no such letter! <br /> You have ${attempts} attempts.<br />${object.char}`;
      message2.innerHTML = "Try another one.";
      input.value = "";
      attempts--;
    } else if (attempts === 1) {
      message1.innerHTML = `There is no such letter!<br />Be careful!!! It is your last attempt!<br />${object.char}`;
      message2.innerHTML = `Try another one.`;
      input.value = "";
      attempts--;
    } else if (attempts === 0) {
      message1.innerHTML = `You lost!!!<br />The word was ${object.name}.`;
      message2.innerHTML = "One more time?";
      message2.after(startGameBtn);
      input.value = "";
      input.remove();
      checkBtn.remove();
    }
  }
}
