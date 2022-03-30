const {add, subtract, multiply, divide} = require("./calculator.js");

test("not adding: test 1", () => {
    expect(add(1, 3)).toBe(4);
});

test("not subtracting: test 2", () => {
    expect(subtract(10, 3)).toBe(7);
});

test("not multiplying: test 3", () => {
    expect(multiply(5, 5)).toBe(25);
});

test("not dividing: test 4", () => {
    expect(divide(10, 2)).toBe(5);
});