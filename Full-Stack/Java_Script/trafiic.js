function Color(){
    let color = document.getElementById("val1").value;
    if(color === "red"){
        console.log("Stop");
    } else if(color === "yellow"){
        console.log("Caution");
    } else if(color === "green"){
        console.log("Go");
    } else {
        console.log("Invalid color");
    }
}