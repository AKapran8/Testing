class Ajax {
  static echo(data) {
    return new Promise((res,rej) => {
      setTimeout(() => {
        if (data) res(data)
        rej(new Error('Error text'))
      }, 150)
    })
  }
}
module.exports = Ajax