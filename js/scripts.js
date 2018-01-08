//Choising: paper/rock/scissors
var newGameBtn = document.getElementById('js-newGameButton'),
    pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');
//Initial values
var gameState = 'notStarted', //started //ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
//Displaying game elements
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    playerNameElem = document.getElementById('js-playerName'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    computerPointsElem = document.getElementById('js-computerPoints');
//Player selection
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

function setGameElements () {
    switch(gameState) {
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

function newGame() {
    player.name = prompt('Wpisz swoje imię', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints(); //This function has not been created yet
    }
}
//Choosing a player and a computer
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
//Awarding points
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick === computerPick) {
        winnerIs = 'noone'; //Draw
    } else if (
        (computerPick === 'rock' && playerPick === 'scissors') ||
        (computerPick === 'scissors' && playerPick === 'paper') ||
        (computerPick === 'paper' && playerPick === 'rock')) {
            
        winnerIs = 'computer';
        }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
        setGamePoints(); 
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = 'Wygrana!';
        computer.score++;
        setGamePoints(); 
    }
}
//Result update
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
    checkGameWinner();
}

function checkGameWinner() {
    if (player.score === 10) {
        alert('Gratulacje! Zwyciężyłeś');
        gameState = 'ended';
        setGameElements();
    } else if (computer.score === 10) {
        alert('Koniec gry! Komputer zwyciężył');
        gameState = 'ended';
        setGameElements();
    }
}