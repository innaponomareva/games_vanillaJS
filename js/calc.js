const clearInput = document.querySelector(".clear"),
  input = document.querySelector(".input_calc"),
  equal = document.querySelector("#equal"),
  divide = document.querySelector("#divide"),
  multi = document.querySelector("#multi"),
  minus = document.querySelector("#minus"),
  point = document.querySelector("#point"),
  plus = document.querySelector("#plus"),
  num0 = document.querySelector("#num0"),
  num1 = document.querySelector("#num1"),
  num2 = document.querySelector("#num2"),
  num3 = document.querySelector("#num3"),
  num4 = document.querySelector("#num4"),
  num5 = document.querySelector("#num5"),
  num6 = document.querySelector("#num6"),
  num7 = document.querySelector("#num7"),
  num8 = document.querySelector("#num8"),
  num9 = document.querySelector("#num9");

let array = [];
let inputArray = [];
input.value = "0";

const methods = {
  "+": (a, b) => Number(a) + Number(b),
  "-": (a, b) => Number(a) - Number(b),
  "*": (a, b) => Number(a) * Number(b),
  "/": (a, b) => Number(a) / Number(b),
};

const numberOnClick = (numValue) => {
  array.push(numValue);
  inputArray.push(numValue);
  input.value = inputArray.join("");
};

function calc() {
  let reducer;
  for (item of array) {
    if (isNaN(item) && item !== ".") {
      for (key in methods) {
        if (key == item) reducer = methods[`${key}`];
      }
      array = array.join("");
      array = array.split(`${item}`);
      return array.reduce(reducer).toString();
    }
  }
}

const reducerSignOnClick = (sign) => {
  inputArray = [];
  console.log("array", array);
  if (array.some((item) => isNaN(item) && item !== ".")) {
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i]) && isNaN(array[i + 1])) {
        array.splice(i, 1);
      }
    }
    let temp = calc();
    array = [];
    input.value = temp;
    array.push(temp);
    array.push(sign);
  } else {
    array.push(sign);
  }
};

const pointOnClick = () => {
  array.push(".");
  input.value = array.join("");
};

const clearInputOnClick = () => {
  input.value = "0";
  array = [];
};

const equalSignOnClick = () => {
  console.log("array", array);
  for (item of array) {
    if (isNaN(item) && item !== ".") {
      input.value = calc(item);
      array = [];
      array.push(input.value);
    }
  }
};

num0.onclick = () => numberOnClick(num0.value);
num1.onclick = () => numberOnClick(num1.value);
num2.onclick = () => numberOnClick(num2.value);
num3.onclick = () => numberOnClick(num3.value);
num4.onclick = () => numberOnClick(num4.value);
num5.onclick = () => numberOnClick(num5.value);
num6.onclick = () => numberOnClick(num6.value);
num7.onclick = () => numberOnClick(num7.value);
num8.onclick = () => numberOnClick(num8.value);
num9.onclick = () => numberOnClick(num9.value);

point.onclick = () => pointOnClick();
clearInput.onclick = () => clearInputOnClick();
equal.onclick = () => equalSignOnClick();

divide.onclick = () => reducerSignOnClick("/");
multi.onclick = () => reducerSignOnClick("*");
minus.onclick = () => reducerSignOnClick("-");
plus.onclick = () => reducerSignOnClick("+");
