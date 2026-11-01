function isArmstrongNumber(num) {
    let a = num;
    let o = a;
    let n = 0;
    while (o != 0) {
        n++;
        o = Math.floor(o / 10);
    }
    o = a;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + Math.pow(o % 10, n);
        o = Math.floor(o / 10);
    }
    if (a == sum) {
        return true;
    } else {
        return false;
    }
}
function checkArmstrongNumber() {
    let val1= document.getElementById("val1").value;
    if (isArmstrongNumber(val1)) {
        console.log(val1 + " is an Armstrong number.");
    } else {
        console.log(val1 + " is not an Armstrong number.");
    }
}
