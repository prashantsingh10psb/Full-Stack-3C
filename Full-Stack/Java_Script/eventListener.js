let btn = document.getElementById("btn");
let c = 0;
btn.addEventListener('click',()=>{
    c++;
    document.getElementById("Cvalue").innerText = c;
});