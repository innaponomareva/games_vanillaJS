const input = document.querySelector('#userAnswer'),
      checkBtn = document.querySelector('#button'),
      repeatBtn = document.querySelector('#repeatBtn'),
      maxTryCount = 5;

let tryCount = 0,
    guessNumber = parseInt(Math.random() * 101),
    isGuessed = false;

function changeInfo(text){
  document.querySelector('#info').innerHTML = text;
}

function hide(item){
  item.style.display = 'none';
}

hide(repeatBtn);

function show(item){
  item.style.display = 'block';
}

function finalMessage(isGuessed = false){
  if(tryCount === 0){
    gameResult('See you soon!');
  }
  else if(isGuessed){
    gameResult(`Great!! You won!!!`);
  }else{
    gameResult(`You lost! <br> The number was ${guessNumber}`);
  }
}

function gameResult(text){
  hide(checkBtn);
  hide(input);
  changeInfo(text);
  show(repeatBtn);
}


checkBtn.onclick = function guess(){
  console.log(guessNumber);
  const userAnswer = input.value;
  tryCount++;
  if(userAnswer === 'q'){
    tryCount = 0;
    return finalMessage();
  }
  else if(userAnswer == guessNumber){
    isGuessed = true;
    return finalMessage(isGuessed);
  }
  else if (tryCount === maxTryCount){
    return finalMessage();
  }else{
    changeInfo(`The number is too ${userAnswer > guessNumber ? 'big' : 'small'}! <br>You have ${maxTryCount - tryCount} more attempts!` );
    input.value = '';
  }
}

repeatBtn.onclick = function(){
  guessNumber = parseInt(Math.random() * 101);
  input.value = '';
  hide(repeatBtn);
  show(checkBtn);
  show(input);
  changeInfo('The guessed number is greater than 0 and less than 100.');
  tryCount = 0;
}