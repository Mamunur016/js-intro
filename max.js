const firstNumber = 345;
const secondNumber = 46;
const thirdNumber = 60;


if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log('First Number is Bigger');
}
else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log('Second Number is Bigger');
}
else {
    console.log('Third Number is Bigger');
}

// using max function

let max = Math.max(firstNumber, secondNumber, thirdNumber);

console.log(max);

// different way to declare function

// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     } else {
//         return second;
//     }
// }

// console.log(findLargest(545, 676));


function findLargest(a, b) {
    let first = a;
    let second = b;
    if (first > second) {
        return first;
    } else {
        return second;
    }
}

// console.log(findLargest(545, 676));

const larger = findLargest(100, 45);
console.log('largest Number is: ', larger);