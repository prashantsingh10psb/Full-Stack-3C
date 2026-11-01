
const isarmstrong=(a)=>{
    var rev=0;
    var o=a;
    var c=0;
    while(o!=0){
        c++;
        o=Math.floor(o/10);
    }
    o=a;
    while(o!=0){
        let r =o%10;
        rev+= Math.pow(r,c);
        o=Math.floor(o/10);
    }
    if(rev==a){console.log("Armstong");
        
    }else{console.log("Not Armstong");}
    
}
isarmstrong(154);