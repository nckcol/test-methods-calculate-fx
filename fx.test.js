const fx = require("./fx");

test("x = 0.25, eps = 0.001", () => {
  expect(fx(0.25, 0.001)).toBe(-3.958637152777778);
});

test("x = 4, eps = 0.001 (error)", () => {
  expect(() => {
    fx(4, 0.001);
  }).toThrow();
});

test("x = 0.25, eps = 2 (error)", () => {
  expect(() => {
    fx(0.25, 2);
  }).toThrow();
});

test("x = 0.25, eps = 0.000000000000001 (error)", () => {
  expect(() => {
    fx(0.25, 0.000000000000001);
  }).toThrow();
});

test("x = -0.222, eps = 0.00001", () => {
  expect(fx(-0.222, 0.00001)).toBe(4.467716141563704);
});
