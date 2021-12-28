var wins = 0;
var ties = 0;
var losses = 0;

var options = ['R', 'P', 'S'];

var playGame = function () {
    var userChoice = window.prompt("Enter R, P, OR S");

    if (!userChoice) {
        return;
    }


    userChoice = userChoice.toUpperCase();

    if (!options.includes(userChoice)) {
        alert("You must choose R, P, OR S");
        return playGame();
    }

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer chose" + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");
    } else if (
        (userChoice === 'R' && computerChoice === 'S') ||
        (userchoice === 'P' && computerChoice === 'R') ||
        (userChoice === 'S' && computerChoice === 'P') 
    ) {
        wins++;
        window.alert("You Win!");
    } else {
        looses++;
        window.alert("You Lost!");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        playGame();
    }
};

    playGame();


  





