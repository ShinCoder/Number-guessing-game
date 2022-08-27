var userInput = [];
var goal;

showUserInput = () => {
    str = userInput.join("");
    document.getElementById("number").innerHTML = str;
}

addInput = (input) => {
    switch (input) {
        case "clear":
            userInput = [];
            break;
        case "del":
            userInput.pop();
            break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            if (userInput.length < 4) {
                userInput.push(Number(input));
            }
            break;
        default:
            break;
    }

    showUserInput();
    showHint();
    console.log(goal, userInput);
}

randomNum = (min,max) => {
    number = Math.round(Math.random() *(max - min + 1) + min);
    return number;
}

startGame = () => {
    goal = randomNum(1, 9999);
    userInput = [];
    
    showUserInput();
    showHint();
    document.getElementById("body").style.pointerEvents = "auto";
}

showHint = () => {
    let number = Number(userInput.join(""));
    let message;
    if (number == 0) {
        message = "Guess the number!";
    }
    else if (number < goal) {
        message = "Larger";
    }
    else if (number > goal) {
        message = "Smaller";
    }
    else if (number == goal) {
        message = "That's the right number!";
    }
    document.getElementById("hint").innerHTML = message;
}