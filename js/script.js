// варианты записи функций

// 1. Function Declaration
function sum(a, b) {
    return a + b;
}

// 2. Function Expression
const sum = function(a, b) {
    return a + b;
}

// 3. IIFE
(function(a, b) {
    return a + b;
})()

// 4. Arrow function
const sum = (a, b) => a + b;

