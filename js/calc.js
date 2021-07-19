const clearInput = document.querySelector('.clear'),
      input = document.querySelector('.input_calc'),
      equal = document.querySelector('#equal'),
      divide = document.querySelector('#divide'),
      multi = document.querySelector('#multi'),
      minus = document.querySelector('#minus'),
      point = document.querySelector('#point'),
      plus = document.querySelector('#plus'),
      num0 = document.querySelector('#num0'),
      num1 = document.querySelector('#num1'),
      num2 = document.querySelector('#num2'),
      num3 = document.querySelector('#num3'),
      num4 = document.querySelector('#num4'),
      num5 = document.querySelector('#num5'),
      num6 = document.querySelector('#num6'),
      num7 = document.querySelector('#num7'),
      num8 = document.querySelector('#num8'),
      num9 = document.querySelector('#num9');

let array = [];

const methods = {
  '+': (a,b) => Number(a) + Number(b),
  '-': (a,b) => Number(a) - Number(b),
  '*': (a,b) => Number(a) * Number(b),
  '/': (a,b) => Number(a) / Number(b), 
}
      
function calc(){
  let reducer;
  for(item of array){
    if(isNaN(item) && item !== '.'){
      for(key in methods){
        if(key == item)
        reducer = methods[`${key}`];
      }
      array = array.join('');
      array = array.split(`${item}`);
      return array.reduce(reducer);
    } 
  }
}


equal.onclick = function(){
  input.value = calc();
  array = [];
  array.push(input.value);
}

clearInput.onclick = function(){
  input.value = '0';
  array = [];
}

function getArray(btn){
  array.push(btn.value);
  input.value = array.join('');
}

num0.onclick = function(){
  getArray(num0);
}
num1.onclick = function(){
  getArray(num1);
}
num2.onclick = function(){
  getArray(num2);
}
num3.onclick = function(){
  getArray(num3);
}
num4.onclick = function(){
  getArray(num4);
}
num5.onclick = function(){
  getArray(num5);
}
num6.onclick = function(){
  getArray(num6);
}
num7.onclick = function(){
  getArray(num7);
}
num8.onclick = function(){
  getArray(num8);
}
num9.onclick = function(){
  getArray(num9);
}

divide.onclick = function(){
  array.push('/');
}
multi.onclick = function(){
  array.push('*');
}
minus.onclick = function(){
  array.push('-');
}
  
point.onclick = function(){
  array.push('.');
  input.value = array.join(''); 
}

plus.onclick = function(){
  array.push('+');
}

