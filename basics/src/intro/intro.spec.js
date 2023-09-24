const { sum, nativeNull } = require("./intro");

describe("Sum function", () => {
  test("Sum should be 4", () => {
    expect(sum(1, 3)).toBe(4); // for primitives
    expect(sum(1, 3)).toEqual(4); // for objects, arrays
  });

  test("Sum should be greater than", () => {
    expect(sum(1, 3)).toBeGreaterThan(3);
  });
  test("Sum should be close to", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // 0.30000000000000004
  });
});


describe("nativeNull function", () => {
  test('must be null', () => {
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).not.toBeTruthy()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).not.toBeUndefined()
  })
})