var round = 0;
var playerScore = 0;
var cpuScore = 0;

function randomChoice() {
    var choices = ['rock', 'paper', 'scissor']; 
    const move = choices[Math.floor(Math.random() * choices.length)];
    return move;
}

function playRound(playerMove, cpuMove) {
    round++;
    if (playerMove === cpuMove) {
        return "TIE";
    }
    if (playerMove === 'rock' && cpuMove === 'paper') {
        return "LOSS";
    }
    if (playerMove === 'rock' && cpuMove === 'scissor') {
        return "WIN";
    }
    if (playerMove === 'paper' && cpuMove === 'scissor') {
        return "LOSS";
    }
    if (playerMove === 'paper' && cpuMove === 'rock') {
        return "WIN";
    }
    if (playerMove === 'scissor' && cpuMove === 'rock') {
        return "LOSS";
    }
    if (playerMove === 'scissor' && cpuMove === 'paper') {
        return "WIN";
    }
}

function choose(choice) {
    var cpu = randomChoice();
    var result = playRound(choice,cpu);
    displayResults(result, cpu);
}

function displayResults(result, cpu) {
    if (result === 'WIN') {
        playerScore++;
    }
    if (result === 'LOSS') {
        cpuScore++;
    }
    document.getElementById("results").innerHTML = "ROUND "+result+" - CPU chose " + cpu;
    document.getElementById("roundNumber").innerHTML = round;
    document.getElementById("playerscore").innerHTML = playerScore;
    document.getElementById("cpuscore").innerHTML = cpuScore;
    if (playerScore == 5) {
        document.getElementById("game-status").innerHTML = 'You won the game!!';
        document.getElementById("resetButton").style.visibility = "visible";
    }
    if (cpuScore == 5) {
        document.getElementById("game-status").innerHTML = 'You lost the game...';
        document.getElementById("resetButton").style.visibility = "visible";
    }
}

function reset() {
    playerScore=0;
    cpuScore=0;
    round=0;
    document.getElementById("results").innerHTML = '';
    document.getElementById("roundNumber").innerHTML = round;
    document.getElementById("playerscore").innerHTML = playerScore;
    document.getElementById("cpuscore").innerHTML = cpuScore;
    document.getElementById("game-status").innerHTML = '';
    document.getElementById("resetButton").style.visibility = "hidden";
}

function game(choice) {
    if (playerScore < 5 && cpuScore < 5) {
        choose(choice);
    }
}
