const {map} = require('./mock')

describe('map function', () => {
  let arr
  let fn

  beforeEach(() => {
    arr = [1,1,2,3,5]
    fn = jest.fn(x => x **2)
    map(arr,fn)
  })

  test('Should call callback', () => {
    expect(fn).toBeCalled()
  })

  test('Should call callback', () => {
    expect(fn).toBeCalledTimes(5)
    expect(fn.mock.calls.length).toBe(5)
  })

  test('Should pow 2 each element  callback', () => {
    expect(fn.mock.results[0].value).toEqual(1)
    expect(fn.mock.results[1].value).toEqual(1)
    expect(fn.mock.results[2].value).toEqual(4)
    expect(fn.mock.results[3].value).toEqual(9)
    expect(fn.mock.results[4].value).toEqual(25)
  })

  test('Should fn work', () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue(300)

      expect(fn()).toBe(100)
      expect(fn()).toBe(200)
      expect(fn()).toBe(300)
      expect(fn()).toBe(300)
      expect(fn()).toBe(300)
  })
});