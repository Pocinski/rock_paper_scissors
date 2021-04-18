function game() {

    function computerPlay() {

        let things = ["Rock", "Paper", "Scissors"];
        return things[Math.floor(Math.random() * things.length)];
    }


    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
            return "Tie!";
        }

        else {
            switch (playerSelection.toLowerCase()) {
                case "rock":
                    if (computerSelection.toLowerCase() == "scissors")
                        return "You win! You rock hard!!";
                    else
                        return "You lose! Paper got you";

                case "paper":
                    if (computerSelection.toLowerCase() == "rock")
                        return "You win! You wrapped!!";
                    else
                        return "You lose! scissors cut you";

                case "scissors":
                    if (computerSelection.toLowerCase() == "paper")
                        return "You win! You cut!!";
                    else
                        return "You lose! Rock beated you";
            }
        }
    }

    for (let i = 0; i > 5; i++) {

        const playerSelection = prompt("Enter a number");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }



}

