function play() {
  // home-screen Section
  // const homeSection = document.getElementById('home-screen');
  // homeSection.classList.add('hidden');
  
  // play-ground Section 
  // const playGroundSection = document.getElementById('play-ground');
  // playGroundSection.classList.remove('hidden');
  // console.log('play Now pro');
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');

  // resrt score and life 
  setTextElementValueById('current-score', 0);
  setTextElementValueById('current-life', 5);
  continueGame();
}
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function continueGame() {
  const alphabet = getRendomAlphabet();
  console.log(alphabet); 

  // current-alphabet Screen
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

// set back ground color
  setBackgroundColorById(alphabet)
}

// get or create an alphabet arry
function getRendomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);

  // get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  
  const alphabet = alphabets[index];
  // console.log(alphabet);
  return alphabet;
}


function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}


function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseFloat(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}


function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}


// get the expected to press  
function handleKeyboardButtonUpEvent(event) {
  const playerPressed = event.key;
  console.log('player Pressed', playerPressed);

  // stop the game if pressed 'Esc'
  if(playerPressed === 'Escape'){
    gameOver();
  } 

  
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet); 

  // check matched or not 
  if(playerPressed === expectedAlphabet){
    console.log('You get a point.');
    
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    //get the current score 
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseFloat(currentScoreText);
    // console.log(currentScore);

    //increase the score by 1
    // const newScore = currentScore + 1
    // show the updated score
    // currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('You missed. You loss a life.');
    
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    //get the current life
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseFloat(currentLifeText);
    // console.log(currentLife);

    //reduce the life count
    // const newLife = currentLife - 1
    // display the updated life count
    // currentLifeElement.innerText = newLife;

    if(updatedLife === 0){
      gameOver();
    }
  }
  
}
document.addEventListener('keyup', handleKeyboardButtonUpEvent);
function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');

  // update final score 
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // Clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}