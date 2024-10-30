const randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlots = document.querySelector(".allGuessesInArray");
const remaining = document.querySelector(".remainGuess");
const lowHeigh = document.querySelector(".loworHigh");
const startOver = document.querySelector(".results");

const pahra = document.createElement('p');

let guessArray = [];
let guessNum = 1;

let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();

        const guess = parseInt(userInput.value)
        guessValidation(guess);
    })
}


function guessValidation(guess){
    if(isNaN(guess)){
        alert("Please enter valid number!");
    } else if(guess<1){
        alert("Please enter valid number!");
    } else if(guess>100){
        alert("Please enter valid number!");
    }
    else{
        guessArray.push(guess);
        if(guessNum === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number is ${randomNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`Your guess Matched. random number is ${randomNum}`)
        endGame();
    } else if(guess > randomNum){
        displayMessage("Your guess is too heigh");
    } else if(guess < randomNum){
        displayMessage("Your guess is too low");
    }
}

function displayMessage(message){
    lowHeigh.innerHTML=`<h3>${message}</h3>`;
}
function displayGuess(guess){
    userInput.value = '';
    guessSlots.innerHTML +=`${guess}, `;
    guessNum++;
    remaining.innerHTML = `${11-guessNum}`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    pahra.classList.add('button');
    pahra.innerHTML = `<h3 id="newGame">Start new game</h3>`;

    startOver.appendChild(pahra);
    playGame = false;
    startGame();
}
function startGame(){
    const newButton = document.querySelector("#newGame");
    
    newButton.addEventListener('click',function(){
        const randomNum = parseInt(Math.random()*100+1);
        lowHeigh.innerHTML = '';
        guessArray = [];
        guessNum = 1;
        guessSlots.innerHTML = '';
        remaining.innerHTML = `${11 - guessNum}`;
        userInput.removeAttribute("disabled");
        startOver.removeChild(pahra);
        playGame = true;
    })
}