var random;
function start(){
    setInterval(randomSelect,800);
}
function randomSelect(){
     random = Math.floor(Math.random()*8)+1;
    let btn = document.getElementById(random.toString());

    let span = btn.querySelector("span");
    
    span.classList.toggle("hide");

    setTimeout(()=>{span.classList.toggle("hide");}
    ,500);
}

start();
var score = 0;
let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let btnid = e.currentTarget.getAttribute("id");
        if(btnid==random){
            score++;
            console.log("Score: "+score);
        }

    });
});