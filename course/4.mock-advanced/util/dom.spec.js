import fs from "fs";
import path from "path";

import { it, vi, expect, describe, beforeEach } from "vitest";
import { Window } from "happy-dom";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocData = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocData);
vi.stubGlobal("document", document);

describe("showError()", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocData);
  });

  it("should show an error in html", () => {
    const errorText = "This is some error";
    showError(errorText);

    const errorEl = document.getElementById("errors");
    const errorParagraphs = errorEl.firstElementChild;

    expect(errorParagraphs).not.toBeNull();
  });

  it("should not include an error initially", () => {
    const errorEl = document.getElementById("errors");
    const errorParagraphs = errorEl.firstElementChild;

    expect(errorParagraphs).toBeNull();
  });

  it("should output provided message in error paragraph", () => {
    const errorText = "This is some error";
    showError(errorText);

    const errorEl = document.getElementById("errors");
    const errorParagraphs = errorEl.firstElementChild;

    expect(errorParagraphs?.textContent).toBe(errorText);
  });
});
