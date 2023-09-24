import { describe, it, expect } from "vitest";

import { getResultText } from "./output";

describe("getResultText()", () => {
  it("should be return string", () => {
    const [val1, val2, val3] = [2, "WLYAPA", false];

    const [res1, res2, res3] = [
      getResultText(val1),
      getResultText(val2),
      getResultText(val3),
    ];

    expect(res1).toBeTypeOf("string");
    expect(res2).toBeTypeOf("string");
    expect(res3).toBeTypeOf("string");
  });
});
