var random = Math.floor(Math.random()*100)+1;
var attempts = 0;
document.getElementById("btn").addEventListener("click",function(){
    var Guess = parseInt(document.getElementById("gn").value);
    attempts++;
    if(attempts==8){document.getElementById("result").innerText = "You have used Your all attempts , Game Over!"; return;}
    if (Guess == random) {
        document.getElementById("result").innerText = "Hurray! , you guess the right number in " + attempts + " attempts.";
    } else if (Guess <random){
        document.getElementById("result").innerText = "Your guess is low , Try again.";
    } else {
        document.getElementById("result").innerText = "Your guess is High, Try again.";
    }
});
