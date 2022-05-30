// Higher order function

// function twoSquared() {
//     return 2 * 2;
// }
// twoSquared();

// function threeSquared() {
//     return 3 * 3;
// }
// threeSquared();

/*
function numSquared(num) {
    return num * num;
}
// numSquared();

function copyArraySquareNums(arr) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] ** 2);
    }

    return output;
}

const nums = [1, 2, 3, 4, 5];
const res = copyArraySquareNums(nums);
console.log('Массив nums: ', nums);
console.log('Массив nums * 2 :', res);

function copyArrayAndDivideByTwo(arr) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] / 2);
    }

    return output;
}

const res2 = copyArrayAndDivideByTwo(nums);
console.log('Массив nums / 2: ', res2);
console.log('Массив nums после всех манипуляций остался безизменений: ', nums);
*/

//......................................................................

// Callback functions

const arr2 = [1, 2, 3, 4, 5, 6];

function copyArrayAndDoIt(arr, instruction) {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(instruction(arr[i]));
    }

    return output;
}

function numSquared(num) {
    return num * num;
}

function numDivide(num) {
    return num / 2;
}

const result = copyArrayAndDoIt(arr2, numSquared);
const result2 = copyArrayAndDoIt(arr2, numDivide);

console.log(arr2);
console.log(result);
console.log(result2);
console.log(arr2);

