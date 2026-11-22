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

// import *as Math from './math.js';
// console.log(Math.sum(2,3));

// function outer() {
//     let c=0;
//     function inner() {
//         c++;
//         console.log(c);
//     }
//     return { inner };
// }
// const obj = outer();
// obj.inner();
// obj.inner();
// obj.inner();

// function a(x){
//     return function b(y){
//         return function c(z){
//             return x+y+z;
//         }
//     }
// }
// console.log(a(2)(3)(2));

//Memoisation
// function memoize(fn) {
//     const cache = {};
//     return function(x, y) {
//         const key = `${x},${y}`;
//         if (cache[key]) {
//             console.log("Fetching from cache:");
//             return cache[key];
//         }
//         const result = fn(x, y);
//         cache[key] = result;
//         return result;
//     };
// }
// const add = memoize(function(x, y) {
//     return x + y;
// });
// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 3));
// console.log(add(2, 2));

//factorial
// const factorial = memoize(function(n) {
//     if(n == 0)return 1;
//     return n *factorial(n - 1);
// });
// console.log(factorial(5));
// console.log(factorial(5));
// console.log(factorial(6));

//Closures
// function outer() {
//     let count =1;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return { inner };
// }
// const obj = outer();
// obj.inner();
// obj.inner();
// obj.inner();

//Memoization
// function add(fn){
//     let obj={};
//     return function(x,y){
//         let key = `x,y`;
//         if(obj.hasOwnProperty(key)){
//             console.log("from Cache");
//             return obj[key];
//         }
//         let res  = fn(x,y);
//         obj[key] =res;
//         return obj[key];

//     }
// }
// const Add = add((a,b)=>{
//     return a+b;
// })
// console.log(Add(2,3));
// console.log(Add(2,1));
// console.log(Add(2,3));
// console.log(Add(1,2));

//factorial
// const fact = add((n)=>{
//     if(n==0)return 1;
//     return n*fact(n-1);
// })
// console.log(fact(5));

//Prototype
// let obj={name:"Gla"};
// let myobj = Object.create(obj);
// console.log(myobj);
// console.log(myobj.name);

//Promise
// let res = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return resolve("Success");
//     }, 1000);
// });

// res.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("-- Completed!");
// });
// const p1 = Promise.reject(3);
// const p2 = 42;
// const p3 = new Promise((resolve, reject)=>{
// setTimeout(reject,100,"foo");}
// ) 
// // all, allSettled , any, race;
// Promise.allSettled([p1,p2,p3]).then((values)=>{
//     console.log(values);
// }).catch(err=>{
//     console.log(err);
// });

//Async , await
// async function val1() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve("val1")
//         }, 1000);
//     });
// }
// async function val2(str) {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(`val2 ${str}`);
//         }, 1000);
//     });
// }
// async function test() {
//     console.log("Calling");
// let res = await val1();
// let res2 = await val2(res);
// console.log(res2);

// }
// test();

// =>Classes in Js
class Student{
    #aadhar_no
    constructor(r_no , name, course){
        this.r_no = r_no;
        this.name = name;
        this.course = course;
    }
    getAadhar(){
        return this.#aadhar_no;
    }
    setAadhar(num){
        this.#aadhar_no = num;
    }
}
let s = new Student(38,"Prashant", "B.tech - Aiml");
s.setAadhar("1111-1111-1111");
console.log(s);

