import { it, expect, describe, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should triggered logFn func if provided SPIES SPY", () => {
    const logger = vi.fn();
    generateReportData(logger);

    expect(logger).toBeCalled();
  });
});
