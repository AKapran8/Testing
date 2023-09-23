const Lodash = require("./sync");

let _ = new Lodash();

describe("Lodash: compact", () => {
  let array = [];

  beforeEach(() => {
    array = [false, 1, 0, "", "WLYAPA", null, undefined, true];
  });

  beforeAll(() => {
    _ = new Lodash();
  });

  test("Should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("Should be filter arr", () => {
    const result = [1, "WLYAPA", true];
    expect(_.compact(array)).toEqual(result);
  });

  test("Should be added new item", () => {
    array.push(...["One", "Two"]);
    expect(_.compact(array)).toContain("One");
    expect(_.compact(array)).toContain("Two");
  });

  test("Should NOT contains any falsy values", () => {
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain(undefined);
  });
});

describe("Lodash: groupBy: ", () => {
  beforeAll(() => {
    _ = new Lodash();
  });

  test("Should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("Should group items by Math.floor", () => {
    const array = [2.1, 2.4, 3.1, 4.4];
    const result = {
      2: [2.1, 2.4],
      3: [3.1],
      4: [4.4],
    };

    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("Should group items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      3: ["one", "two"],
      5: ["three"],
    };

    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("Should be not return an arr", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
