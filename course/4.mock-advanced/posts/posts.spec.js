import { describe, it, expect, beforeEach } from "vitest";
import { extractPostData } from "./posts";

const [testTitle, testContent] = ["Title", "Content"];
let testFormData = null;

describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,

      get(key) {
        return this[key];
      },
    };
  });

  it("should extract title and content from form data", () => {
    const testData = extractPostData(testFormData);

    expect(testData.title).toBe(testTitle);
    expect(testData.content).toBe(testContent);
  });
});
