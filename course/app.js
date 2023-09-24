import { getInputsNumbers } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { outputElement } from "./src/util/output.js";

const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numbersValue = getInputsNumbers(form);
  const result = calculateResult(numbersValue);
  outputElement(result)
}

form.addEventListener("submit", formSubmitHandler);
