const analyzeArray = require("./array.js");

test("not working: test 1", () => {
    const expectedData = {
        average: 2.5,
        minimum: 1,
        maximum: 4,
        length: 4
    }
    expect(analyzeArray([1, 2, 3, 4])).toEqual(expectedData);
});

test("not working: test 1", () => {
    const expectedData = {
        average: 15.6,
        minimum: 6,
        maximum: 22,
        length: 5
    }
    expect(analyzeArray([12, 6, 20, 18, 22])).toEqual(expectedData);
});