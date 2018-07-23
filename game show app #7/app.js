
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const title = document.querySelector('.title');
const overlay = document.getElementById('overlay');
const ul = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
const show = document.getElementsByClassName('show');
const letter = document.getElementsByClassName('letter');
const scoreboard = document.getElementsByTagName('ol');
const tries = document.getElementsByClassName('tries');

/***Variables***/

let missed = 0;

/* Listener to the start button to hide the start screen overlay */

startButton.addEventListener('click', () => {
  overlay.style.display = "none";
});

/*arrays:list of items*/

const phrases = [
"less is more",
"let it be",
"health is wealth",
"linger upon",
"love yourself",
];

//* FUNCTIONS *//

/***Function to randomly choose a phrase and split into new array***/

function getRandomPhraseAsArray(arr) {
const i = Math.floor(Math.random() * arr.length);
const aPhrase = arr[i].split("");
return aPhrase;
};

/*Function need to append to list item to the #phrase ul and display random phrase*/

function addPhraseToDisplay(arr) {
  for(let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);

    if (li.textContent === ' ') {
      li.className = 'space';
    } 

    else 
      li.className = 'letter';
    }
    };

/* EXECUTION */

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

/*Function to compare letter clicked vs random phrase */

function checkLetter(input) {

  let letterFound = 0;
  let correct = false;

  for (let i = 0; i < letter.length; i++) {
    
    if (input == letter[i].innerText) {
      letter[i].className += 'show';
      letterFound += 1;
      correct = true;
      if (i == letter.length) {
        return correct;
      }
    }
  
else if (i == letter.length - 1 && correct == true) {
  return correct;
}

else if (i == letter.length - 1 && correct == false) {
  return null;
}
}

};

/*Listener for when user presses a key on keyboard */

qwerty.addEventListener("click", function(e) {
  const target = e.target;
  
  if (target.nodeName == 'BUTTON') {
    target.className += 'chosen';
    target.disabled = true;

    if ( checkLetter(target.innerText) === null ) {
      
      scoreboard[0].removeChild(tries[0]);
      missed += 1;
      checkWin();
    //-----------------------------------------------------------------------
    } else {
      checkWin();
    }

  }
});


/*Function to check if the player has won or not */

function checkWin() {
  
  if (show.length == letter.length) {
    overlay.style.display = 'flex';
    overlay.className = 'win';
    tite.textContent  = "Congratulations, You won!"
    startButton.textContent = "Replay"
  }
  
  if (missed >= 5 ) {
    overlay.style.display = 'flex';
    overlay.className = 'lose';
    title.textContent = "You Lost. Try Again"
    startButton.textContent = "Reset"
  
  }
};











  

