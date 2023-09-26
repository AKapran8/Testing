import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should be defined", () => {
    expect(HttpError).toBeDefined();
  });
  it("should provided status, message and data", () => {
    const [status, message, data] = [
      200,
      "Simple message",
      { key: 1, title: "WLYAPA" },
    ];

    const testHttpError = new HttpError(status, message, data);

    expect(testHttpError.statusCode).toBe(status);
    expect(testHttpError.message).toBe(message);
    expect(testHttpError.data).toBe(data);
  });
});
describe("class ValidationError", () => {
  it("should be defined", () => {
    expect(ValidationError).toBeDefined();
  });

  it("should provided message", () => {
    const message = "Simple message";

    const testValidationError = new ValidationError(message);

    expect(testValidationError.message).toBe(message);
  });
});
