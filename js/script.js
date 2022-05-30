// Closure (замыкания)

// 1. Функции возвращающие другие функции
// 2. Возвращаемая функция запоминает scope (все переменные каторые она видит)

function hello(name) {
    const helloName = () => console.log('hello!, ', name);

    return helloName;
}

const hell = hello('John');
hell();

function outer() {
    let counter = 0;
    
    function incrementCounter() {
        console.log(++counter);
    }

    return incrementCounter;
}

const myCount1 = outer();
myCount1();
myCount1();
myCount1();
myCount1();
myCount1();
