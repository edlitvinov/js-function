// Recursion - функция вызывающая сама себя

// 1. Базовые условие (терминальное)
// 2. Правило движения по рекурсии

// function recurse() {
//     return recurse();
// }

/*
function factorial(n) {
    if (n === 0) return 1;         // Базовое условие

    return n * factorial(n - 1);
}

console.log(factorial(3)); 
console.log(factorial(4)); // 4 * 3 * 2 * 1
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
*/

// функция принимае символ и возвращает его п пяти экземплярах

let counter = 0;

function repeater(char) { 
    
    counter++;

    if (counter === 5) {
        counter = 0;
        return char;
    }

    return char + repeater(char);
}

console.log(repeater('H '));
console.log(repeater('Hello! '));
console.log(repeater('1920 год. '));
