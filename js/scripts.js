//Wybieranie: papier/kamień/nożyce
var newGameBtn = document.getElementById('js-newGameButton');
    pickRock = document.getElementById('js-playerPick_rock');
    pickPaper = document.getElementById('js-playerPick_paper');
    pickScissors = document.getElementById('js-playerPick_scissors');
//Wartości początkowe
var gameState = 'notStarted', //started, ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
//Wyświetlanie elementów gry
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

newGameButton.addEventListener('click, newGame');
pickRock.addEventListener('click', function() {playerPick('rock') });
pickPaper.addEventListener('click', function() {playerPick('paper') });
pickScissors.addEventListener('click', function() {playerPick('scissors') });

function setGameElements () {
    switch(gameState){
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
        break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}

setGameElements();
