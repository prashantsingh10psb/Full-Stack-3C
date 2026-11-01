var random = Math.floor(Math.random() * 3);
document.getElementById("rock").addEventListener("click",function() {
    playGame(0);
});
document.getElementById("paper").addEventListener("click", function() {
    playGame(1);
});
document.getElementById("scissors").addEventListener("click", function() {
    playGame(2);
});
function playGame(userChoice) {
    var computerChoice = random;
    if (userChoice == computerChoice) {
        document.getElementById("result").innerText = "It's a tie!";
    } else if ((userChoice == 0 && computerChoice == 2)||(userChoice == 1 && computerChoice == 0) || (userChoice == 2 && computerChoice == 1)) {
        document.getElementById("result").innerText = "You win!";
    } else {
        document.getElementById("result").innerText = "You lose!";
    }
}
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("result").innerText = "";
    random = Math.floor(Math.random() * 3);
});
