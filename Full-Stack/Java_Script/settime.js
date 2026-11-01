function startTimer() {
    var timeInput = document.getElementById("timeInput");
    var ts = timeInput.value * 60;
    let timer = setInterval(()=>{
        ts--;
        if(ts==0){
        clearInterval(timer);
        console.log("Timer stopped");
    }
    updateTimerDisplay();
}, 1000);

function updateTimerDisplay() {
    var minutes = Math.floor(ts / 60);
    var seconds = ts % 60;
 document.getElementById("minutes").innerText = minutes;
 document.getElementById("seconds").innerText = seconds;
}}