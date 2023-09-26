import { describe, it, expect, vi } from "vitest";

import { sendDataRequest } from "./http";

const testResponseData = { test: "test" };
const testResponse = {
  ok: true,
  json() {
    return new Promise((res, rej) => {
      res(testResponseData);
    });
  },
};
const mockFetchFn = vi.fn((url, params) => {
  return new Promise((res, rej) => {
    res(testResponse);
  });
});

vi.stubGlobal("fetch", mockFetchFn);

describe("sendDataRequest()", () => {
  it("Should return available data", () => {
    const testData = { test: "test" };
    return expect(sendDataRequest(testData)).resolves.toEqual(testData);
  });
});
