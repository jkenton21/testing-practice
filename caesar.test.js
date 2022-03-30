const caesar = require("./caesar.js");

test("not working: test 1", () => {
    expect(caesar("hello world", 1)).toBe("ifmmp xpsme");
});

test("not working: test 2", () => {
    expect(caesar("fghijk", 1)).toBe("ghijkl");
});

test("not working: test 3", () => {
    expect(caesar("some.word", 1)).toBe("tpnf.xpse");
});