// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// //Map function
// let newArr = arr.map(n => n*n);
// console.log(newArr);

// // Filter Function
// let filterArr = arr.filter( n => n%2==0);
// console.log( filterArr);

// // Find Function
// let foundArr = arr.find(n=> n>2);
// console.log(foundArr);

// // Reduce Function
// let reddarr = arr.reduce((sum , n) => sum += n, 0);
// console.log(reddarr);

// checking falsy values
// if(null){
//     console.log("Hello1");
// }
// if(undefined){
//     console.log("Hello2");
// }
// if(NaN){
//     console.log("Hello3");
// }
// if(0){
//     console.log("Hello4");
// }
// if("") {
//     console.log("Hello5");
// }
// if("false") {
//     console.log("Hello6");
// }


// // convert a number to binary number
// let a =10;
// let binary = a.toString(2);
// console.log(binary);

// // convert a number to octal number
// let octal = a.toString(8);
// console.log(octal);

// // convert a number to hexadecimal number
// let hexadecimal = a.toString(16);
// console.log(hexadecimal);

// let p = 100, q;
// let t = p* Number.parseInt(q??1);
// console.log(t);

// let obj={
//     name: "JohnSina",
//     location:{
//     city: "Mathura"
// }};
// console.log(obj.location.state??="UP");
// console.log(obj);

// let arr = [1,2,3,4,5];
// console.log(arr);
// let brr= [...arr];
// brr.push(6);
// console.log(brr);
// console.log(arr);

// const sum = (...arr5) => { return arr5.reduce((sum, n) => sum + n, 0) };
// console.log(sum(12, 3, 4));

// function add(a=0, b=0){return a+b};
// console.log(add(2,3));
// console.log(add());

import *as Math from './math.js';
console.log(Math.sum(2,3));