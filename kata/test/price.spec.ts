import price from "../src/price";

describe("price()", () => {
  it("should return 0 if no arguments provided", () => {
    expect(price("")).toBe(0);
  });
  it("should return 50 if A argument provided", () => {
    expect(price("A")).toBe(50);
  });
  it("should return 30 if B argument provided", () => {
    expect(price("B")).toBe(30);
  });
  it("should return 20 if C argument provided", () => {
    expect(price("C")).toBe(20);
  });
  it("should return 15 if D argument provided", () => {
    expect(price("D")).toBe(15);
  });
  it("should return 100 if 2 A arguments provided", () => {
    expect(price("AA")).toBe(100);
  });
  it("should return 115 if ABCD arguments provided", () => {
    expect(price("ABCD")).toBe(115);
  });
  it("should return 130 if AAA arguments provided", () => {
    expect(price("AAA")).toBe(130);
  });
  it("should return 130 if AAABBB arguments provided", () => {
    expect(price("AAABBB")).toBe(130+75);
  });
  it("should return an error if invalid symbol included", () => {
    const throwErrorFunc = () => price("Q")
    expect(throwErrorFunc).toThrow("Invalid value");
  });
});
