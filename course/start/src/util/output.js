export function getResultText(result) {
  let resultText = "";
  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  return resultText;
}

export function outputElement(result) {
  const output = document.getElementById("result");
  const resultText = getResultText(result);
  output.textContent = resultText;
}
