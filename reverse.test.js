const reverse = require("./reverse.js");

test("not reversed: test 1", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
});

test("not reversed: test 2", () => {
    expect(reverse("this is the one")).toBe("eno eht si siht");
});

test("not reversed: test 3", () => {
    expect(reverse("yellow")).toBe("wolley");
});