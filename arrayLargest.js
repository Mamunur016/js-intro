let numbers = [23, 4, 56, 7, 34, 78, 9];
let largest = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > largest) {
        largest = numbers[index];

    }


}
console.log('Largest number in array :', largest);


// minimum number in array 

function arrayMin(numbers) {
    let min = numbers[0];

    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] < min) {
            min = numbers[index];

        }
    }
    return min;
}

const total = arrayMin([23, 10, 16, 8, 7, 45, 67, 4, 5, 6, 78]);
console.log('Minimum number in array :', total);