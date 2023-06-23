/*

|---------------------     Rock- Paper- Scissor Game     ---------------------|

*/

/*
Developed by arifaisal123

*/

/*

  i. Firstly, the game takes input from the user about the number of games to 
     be played. The total number of games can be 3, 5 or 7.
    
 ii. After taking the user input, the game prints out the number of games left 
     to be played. It subsequently asks the user for input for Rock, Paper, or 
     Scissor. After playing the game, the program prints out the number of 
     games left to be played, the score for the user, and the machine, and 
     prompting for the next user input. It will continue till the number of 
     games equal to 3, 5, or 7 as it was in the user input at the first.
    
iii. After the user input for rock, paper, or scissor, the program will check 
     the gameLogic function to decide who is the winner of that particular 
     match. It can have three results- user winner, draw, or machine winner.
     
 iv. After gameLogic, the program enters the pointCalc function to calculate 
     the point scored based on the match, and refreshes to the new score.
     
  v. After pointCalc function, the program will enter gameCounter function in 
     order to increase the match count. It will end the game once it matches 
     the total number of games to be played. When the program ends, it will 
     print out the winner, and score.

*/

let totalGameNum = 0;
let gameNum = 0;
let user_points = 0;
let machine_points = 0;
let user_input = "";
let machine_input = "";


function startGame() {
    /*
    Takes user input for the number of games to be played.
    
    Returns: None.
    
    */
    while (true) {
        let user_input_totalGameNum = prompt("How many games you want to play? Enter 3, 5 or 7: ");
        if (user_input_totalGameNum === "3") {
            totalGameNum = 3;
            break;
        }
        else if (user_input_totalGameNum == "5") {
            totalGameNum = 5;
            break;
        }
        else if (user_input_totalGameNum == "7") {
            totalGameNum = 7;
            break;
        }
        else {
            continue;
        }
    }        
}

function gameCounter() {
    /*
    Inreases the gameNum counter by 1 till the end of the game
    Returns: gameOver
    */
    
    if (gameNum <= totalGameNum) {
        gameNum += 1;
    }
    else {
        return gameOver;
    }
}

function gameLogic() {
    /*
    Checks the logic before awarding the points to user or machine
    Returns: Winner of the particular game
    */

    if (user_input === "rock") {
        if (machine_input === "scissor") {
            return "user_winner";
        }
        else if (machine_input === "rock") {
            return "draw";
        }
        else if (machine_input === "paper") {
            return "machine_winner";
        }
    }

    if (user_input === "paper") {
        if (machine_input === "scissor") {
            return "machine_winner";
        }
        else if (machine_input === "rock") {
            return "user_winner";
        }
        else if (machine_input === "paper") {
            return "draw";
        }
    }

    if (user_input === "scissor") {
        if (machine_input === "scissor") {
            return "draw";
        }
        else if (machine_input === "rock") {
            return "machine_winner";
        }
        else if (machine_input === "paper") {
            return "user_winner";
        }
    }
    return false;            
}

function pointCalc(gameLogic) {
    /*
    Increases the point of the user or machine by 1
    Returns: updates the points of the players
    */
    if (gameLogic === "user_winner") {
        user_points += 1;
        return user_points;
    }
    else if (gameLogic === "machine_winner") {
        machine_points += 1;
        return machine_points;
    }
    else {
        return null;
    }
}

function playGame() { 
    /*
    Continues the game sequence.
    Takes user input of rock, paper, or scissor.
    */
    
    let rps_list = ["rock", "paper", "scissor"];

    while (gameNum < totalGameNum) {
        user_input = prompt("Enter rock, paper, or scissor? ").toLowerCase();
        let random_num = Math.floor(Math.random() * 3);
        machine_input = rps_list[random_num];
        console.log("----------------------------------------");
        console.log("You entered:", user_input);
        console.log("Machine entered:", machine_input);
        console.log("----------------------------------------");

        if (gameLogic() === "user_winner") {
            console.log("Great! You just got 1 point.");
        }
        else if (gameLogic() === "machine_winner") {
            console.log("Your opponent just got 1 point.");
        }
        else if (gameLogic() === "draw") {
            console.log("It is a draw!");  
        }
                      
        pointCalc(gameLogic());
        console.log("----------------------------------------");
        console.log("Total Score: ");
        console.log("You =", user_points, "Computer =", machine_points);
        gameCounter();
        console.log("----------------------------------------");
        console.log("Total ", totalGameNum - gameNum, "Games left!");
        console.log("----------------------------------------");
    }

    if (user_points > machine_points) {
        console.log("Congratulations! You are the winner!");
    }
    else if (user_points < machine_points) {
        console.log("Alas! You have lost! Better luck next time!");
    }
    else if (user_points === machine_points) {
        console.log("It is a DRAW!");
    }
}

function gameOver() {
    /*
    Checks if the total number of games has reached the expected level.
    Returns: printed output --> Game Over. Game Results. Players' Points.
    */
    
    if (gameCounter() === gameOver) {
        console.log("Game Over!");
        if (user_points > machine_points) {
            console.log("Result: Congratulations! You are the winner!");
            console.log(user_points);
            console.log(machine_points);
        }
        else if (user_points < machine_points) {
            console.log("Result: You have lost. Better luck next time!");
            console.log(user_points);
            console.log(machine_points);
        }
        else if (user_points === machine_points) {
            console.log("Result: Draw!");
            console.log(user_points);
            console.log(machine_points);
        }
    }
}

// Initiating Game        
startGame();
playGame();
