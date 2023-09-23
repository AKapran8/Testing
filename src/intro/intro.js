const expect = (value) => {
   
  return {
    toBe: exp => {
      if (exp === value ) {
        console.log('Success') 
      } else {
        console.log(`Error: value is ${value}, bue expectation is ${exp}`)
      }
    }
  }
}

const sum = (a,b) => a+b
const nativeNull = () => null


// expect(sum(41,1)).toBe(42)

module.exports = {sum, nativeNull}