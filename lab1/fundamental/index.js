// write a function to take your name and print it with a hello message
function greet(name) {
    console.log(`Hello, ${name}! Welcome to the FSD Workshop!`);
}

const sayHi = (name) => {
    console.log(`Hi, ${name}`);
}

greet("Ashwani");
sayHi("Ashwani");

// take two arguments and return their sum
const sum = (a, b) => {
    return a + b;
}

const result = sum(5, 10);
console.log(`The sum of 5 and 10 is: ${result}`);