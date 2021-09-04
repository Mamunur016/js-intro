// let firstNumber = 34;
// let secondNumber = 60;
// let tmp;
// tmp = firstNumber;
// firstNumber = secondNumber;
// secondNumber = tmp;
// console.log(firstNumber, secondNumber);

// without temp variable

let firstNumber = 15;
let secondNumber = 6;
console.log(firstNumber, secondNumber);

firstNumber = secondNumber + firstNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;
console.log(firstNumber, secondNumber);

// destructuring
[firstNumber, secondNumber] = [secondNumber, firstNumber];
console.log('after destructuring ', firstNumber, secondNumber);