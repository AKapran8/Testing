import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it("writeData() should execute writeFile function", () => {
  const text = "Lorem ipsum";
  const fileName = "text.txt";

  expect(writeData(text, fileName)).resolves.toBeUndefined();
});

it("writeData() should execute writeFile function with MOCK", () => {
  const text = "Lorem ipsum";
  const fileName = "text.txt";

  writeData(text, fileName);

  expect(fs.writeFile).toBeCalled();
});

it("writeData() should execute writeFile function with MOCK", () => {
  const text = "Lorem ipsum";
  const fileName = "text.txt";

  writeData(text, fileName);

  expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledWith(fileName, text);
});
