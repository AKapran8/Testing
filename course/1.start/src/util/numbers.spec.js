import { it, expect, describe } from "vitest";

import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
  it("Should be defined", () => {
    const result = transformToNumber();
    expect(result).toBeDefined();
  });

  it("Should be transform string to number", () => {
    const value = "44";
    const result = transformToNumber(value);
    expect(result).toBeTypeOf("number");
    expect(result).toBeLessThan(50);
    expect(result).toBeGreaterThan(5);
  });

  it("Should be return NaN", () => {
    const value = "WLYAPA";
    const result = transformToNumber(value);
    expect(result).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should be defined", () => {
    expect(cleanNumbers).toBeDefined();
  });

  it("should return numbers array if string array provided", () => {
    const strNumbers = ["1", "2", "3"];
    const cleanedNumbers = cleanNumbers(strNumbers);

    const result = strNumbers.map((n) => +n);

    expect(cleanedNumbers).toBeInstanceOf(Array);
    expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual(result);
  });

  it("should return an error, because not valid string is provided", () => {
    const strNumbers1 = ["1", "2", "3", "QWERTY"];
    const strNumbers2 = ["1", "2", "3", ""];

    const resultFn1 = () => cleanNumbers(strNumbers1);
    const resultFn2 = () => cleanNumbers(strNumbers2);

    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
  });
});
