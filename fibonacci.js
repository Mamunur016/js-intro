// const n = 11;

// let num1 = 0;
// let num2 = 1;
// let sum = 0;
// console.log(num1);
// console.log(num2);

// for (let index = 3; index <= n; index++) {

//     sum = num1 + num2;
//     console.log(sum);
//     num1 = num2;
//     num2 = sum;

// }

// fibonacci series for array

const fibo = [0, 1];
let number = 10;

for (let index = 2; index <= number; index++) {
    fibo[index] = fibo[index - 1] + fibo[index - 2];

}

// console.log(fibo);


// function for fibonacci series

function fibonacciSeries(number) {


    const fibo = [0, 1];

    if (typeof number != 'number') {
        return 'please enter a number';
    }
    else if (number <= 0 || number == 1) {
        return ('Please enter right number!')
    } else {
        for (let index = 2; index <= number; index++) {
            fibo[index] = fibo[index - 1] + fibo[index - 2];

        }
        return fibo;
    }



}
const fiboSeries = fibonacciSeries(10);

console.log(fiboSeries);