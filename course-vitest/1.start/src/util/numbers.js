import {
  validateStringNotEmpty,
  validateNumber,
} from "./validation.js";

export function transformToNumber(value) {
  return +value;
}

export function cleanNumbers(numbersValue) {
  const numbers = [];
  for (const numberInput of numbersValue) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers
}