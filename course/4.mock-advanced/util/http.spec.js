import { describe, it, expect, vi } from "vitest";

import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testResponseData = { test: "test" };
const mockFetchFn = vi.fn((url, options) => {
  if (typeof options.body !== "string") {
    return rej("Not a string");
  }
  return new Promise((res, rej) => {
    res({
      ok: true,
      json() {
        return new Promise((res, rej) => {
          res(testResponseData);
        });
      },
    });
  });
});

vi.stubGlobal("fetch", mockFetchFn);

describe("sendDataRequest()", () => {
  it("Should return available data", () => {
    const testData = { test: "test" };
    expect(sendDataRequest(testData)).resolves.toEqual(testData);
  });

  it("Should be stringify response body", async () => {
    const testData = { test: "test" };
    let errorMessage = null;
    try {
      await sendDataRequest(testData);
    } catch (err) {
      errorMessage = err;
    }
    expect(errorMessage).not.toBe("Not a string");
  });

  it("Should throw an HttpError in case of non-ok response", async () => {
    mockFetchFn.mockImplementationOnce((url, options) => {
      return new Promise((res, rej) => {
        res({
          ok: false,
          json() {
            return new Promise((res, rej) => {
              res(testResponseData);
            });
          },
        });
      });
    });

    const testData = { test: "test" };

    expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
