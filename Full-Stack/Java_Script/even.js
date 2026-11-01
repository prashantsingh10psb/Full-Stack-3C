let numbers = [10, 81, 30, 40, 501];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);