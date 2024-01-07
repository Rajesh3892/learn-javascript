let randomNumuber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#submit")
const guess = document.querySelector('#guessInput')
const previuosGuess = document.querySelector('.previuosGuess')
const remaining = document.querySelector('.remaining')
const lowOrHigh = document.querySelector('.lowOrHigh')
const gameResult = document.querySelector('.gameResult')
const p = document.createElement('p')
let startGame = true;
let previuosNumArr = []
let numOfGuess = 1

if (startGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        console.log(numOfGuess)
        const guessNumber = parseInt(guess.value)
        validate(guessNumber);
    });
}


function validate(guessNumber) {
    if (isNaN(guessNumber)) {
        displayMessage(`Your gessed number ${guessNumber} is correct`);
    } else if (guessNumber < 1) {
        alert("Please enter number more than 1 ")
    } else if (guessNumber > 100) {
        alert("Please enter number less than 100 ")
    } else {
        previuosNumArr.push(guessNumber)
        if (numOfGuess === 6 ) {
            resetInputField(guessNumber)
            displayMessage(`Game over guess number was ${randomNumuber}`)
            endGame();
        } else {
            resetInputField(guessNumber);
            checkNumber(guessNumber);
        }
    }
}

function checkNumber(guessNumber) {
    if (guessNumber === randomNumuber) {
        displayMessage(`Your gessed number ${guessNumber} is correct`);
        endGame()
    } else if (guessNumber > randomNumuber) {
        displayMessage(`Your gessed number ${guessNumber} is high`);
    } else if (guessNumber < randomNumuber) {
        displayMessage(`Your gessed number ${guessNumber} is low`);
    } else {
        checkNumber(guessNumber);
    }
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<span> ${message} </span>`
}

function resetInputField(guessNumber) {
    //guess.value = '';
    remaining.innerHTML = `${10 - numOfGuess}`;
    previuosGuess.innerHTML += `${guessNumber}, `;
    numOfGuess++;
}

function endGame() {
    guess.value = '';
    numOfGuess = 1
    guess.setAttribute('disabled','true')
    startGame = false;
    previuosNumArr = [];
    // p.classList.add('button')
    // p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    const newBtn = document.createElement('button')
    newBtn.classList.add('newbt');
    newBtn.id = 'btn'
    newBtn.style.backgroundColor = 'green';
    newBtn.style.width = 'auto';
    newBtn.style.padding = '7px';
    newBtn.style.borderRadius = '5px';
    newBtn.style.borderColor = 'green';
    newBtn.innerText = 'Start Game';
    submit.replaceWith(newBtn)
    // gameResult.appendChild(p)
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#btn')
    newGameButton.addEventListener('click', function (e) {
        e.preventDefault()
        randomNumuber = parseInt(Math.random() * 100 + 1)
        previuosNumArr = [];
        remaining.innerHTML = `10`;
        previuosGuess.innerHTML = '';
        guess.removeAttribute('disabled')
        startGame = true;
        // gameResult.removeChild(p)
        lowOrHigh.innerHTML = ''
    })


}