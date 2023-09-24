import { it, expect, describe, beforeEach } from "vitest";

import { generateToken, generateTokenPromise } from "./async";

describe.concurrent("Async JWT test", () => { // all test are going parallel
  let email;
  beforeEach(() => {
    email = "test@test.com";
  });
  it("should be generate a token try catch", (done) => {
    generateToken(email, (_, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it("should be generate a token PROMISE", () => {
    expect(generateTokenPromise(email)).resolves.toBeDefined();
  });

  it("should be generate a token async await", async () => {
    const result = await generateTokenPromise(email);
    expect(result).toBeDefined();
  });

  // it("should be generate a token must be an error", (done) => {
  //   generateToken(email, (_, token) => {
  //     expect(token).toBe(2);
  //     // set Error: Test timed out in 5000ms.
  //     // If this is a long-running test, pass a timeout value as the last argument or configure it globally with "testTimeout".
  //   });
  // });
});
