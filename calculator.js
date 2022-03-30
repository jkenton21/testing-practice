const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    return (b === 0) ? null: a / b;
}

module.exports = {add, subtract, multiply, divide};