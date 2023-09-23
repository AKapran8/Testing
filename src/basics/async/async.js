const axios = require("axios");

class Ajax {
  static echo(data) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (data) res(data);
        rej(new Error("Error text"));
      }, 150);
    });
  }
  static async get() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    } catch (err) {
      console.error("ERROR");
    }
  }
}
module.exports = Ajax;
