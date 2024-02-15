function play() {
  // home-screen Section
  const homeSection = document.getElementById('home-screen');
  homeSection.classList.add('hidden');
  
  // play-ground Section 
  const playGroundSection = document.getElementById('play-ground');
  playGroundSection.classList.remove('hidden');
  // console.log('play Now pro');
  continueGame();
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