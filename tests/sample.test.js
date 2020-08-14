const add = (a, b) => {
  return a + b;
};

test("Should add function sum the values", () => {
  expect(add(1, 2)).toBe(3);
});
