let numbers = [23, 4, 56, 7, 34, 78, 9];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
    // console.log(element);
    // console.log(index);

}
console.log('Summation of Array is :', sum);

function arraySum(numbers) {
    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum;
}

const total = arraySum([23, 45, 67]);
console.log('Array Sum:', total);