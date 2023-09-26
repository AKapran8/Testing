const Ajax = require("./async");
const axios = require("axios");

jest.mock("axios");

describe("Ajax: echo", () => {
  test("Should return value async", async () => {
    const data = "Some text";
    const result = await Ajax.echo(data);
    expect(result).toBe(data);
  });

  test("Should return promise", () => {
    const data = "Some text";
    Ajax.echo(data).then((result) => {
      expect(result).toBe(data);
    });
  });

  test("Should catch error with promise", () => {
    Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test("Should catch error with async", async () => {
    try {
      await Ajax.echo();
    } catch (err) {
      expect(err.message).toBe("Error text");
    }
  });
});

describe("Ajax: GET", () => {
  let response;
  let posts;

  beforeEach(() => {
    posts = [
      {
        userId: 1,
        id: 1,
        text: "WLYAPA",
      },
    ];

    response = {
      data: { posts },
    };
  });
  test("Should return data from backend", () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then((data) => {
      expect(data.posts).toEqual(posts);
    });
  });
});
