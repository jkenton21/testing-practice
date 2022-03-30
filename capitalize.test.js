const capitalize = require("./capitalize.js");

test("not capitalizaed: test 1", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test("not capitalizaed: test 2", () => {
    expect(capitalize("odin project is fun")).toBe("Odin project is fun");
});

test("not capitalizaed: test 3", () => {
    expect(capitalize("say my name")).toBe("Say my name");
});