import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should be defined", () => {
    expect(validateNotEmpty).toBeDefined();
  });
  it("should throw an error if empty string", () => {
    const emptyString = "";
    const errorMessage = "Some error";

    const validateFn = () => validateNotEmpty(emptyString, errorMessage);

    expect(validateFn).toThrow(errorMessage);
  });
  it("should return undefined", () => {
    const notEmptyString = "notEmptyString";
    const errorMessage = "Some error";

    const validateFn = () => validateNotEmpty(notEmptyString, errorMessage);

    expect(validateFn).not.toThrow(errorMessage);
  });
});
