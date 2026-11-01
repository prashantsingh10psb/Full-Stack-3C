let btn = document.getElementById("toggleButton");
let p = document.getElementById("demo");
btn.addEventListener("click", ()=>{
    p.classList.toggle('hide');
});
