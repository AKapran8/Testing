import { it, expect, describe } from "vitest";

import { add } from "./math";

describe("add function", () => {
  it("Should be defined", () => {
    const result = add([]);

    expect(result).toBeDefined();
  });

  it("Should be summarized numbers", () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Asset
    const expectedResult = numbers.reduce((acc, cur) => {
      acc += +cur;
      return acc;
    }, 0);
    expect(result).toBe(expectedResult);
  });

  it("Should be return NaN if one of elem is string", () => {
    const numbers = [1, "Qwerty"];

    const result = add(numbers);

    const expectedResult = numbers.reduce((acc, cur) => {
      acc += +cur;
      return acc;
    }, 0);
    expect(result).toBe(expectedResult);
  });

  it("Should be return 0 if no empty array", () => {
    const numbers = [];

    const result = add(numbers);

    const expectedResult = numbers.reduce((acc, cur) => {
      acc += +cur;
      return acc;
    }, 0);
    expect(result).toBe(expectedResult);
  });

  it("Should be summarized number strings", () => {
    const numbers = ["1", "2", "3"];

    const result = add(numbers);

    const expectedResult = numbers.reduce((acc, cur) => {
      acc += +cur;
      return acc;
    }, 0);
    expect(result).toBe(expectedResult);
  });

  it("Should be an Error if no arguments", () => {
    try {
      add();
    } catch (err) {
      expect(err).toBeDefined();
    }

    const resultFn = () => add();
    expect(resultFn).toThrow();
  });

  it("Should throw an error if multiple arguments", () => {
    const [num1, num2] = [1, 2];
    const resultFn = () => {
      add(num1, num2);
    };
    expect(resultFn).toThrow(/is not iterable/);
  });
});
