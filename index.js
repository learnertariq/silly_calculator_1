let displayValue = "";

const one = document.getElementsByClassName("one")[0];
const two = document.getElementsByClassName("two")[0];
const three = document.getElementsByClassName("three")[0];
const four = document.getElementsByClassName("four")[0];
const five = document.getElementsByClassName("five")[0];
const six = document.getElementsByClassName("six")[0];
const seven = document.getElementsByClassName("seven")[0];
const eight = document.getElementsByClassName("eight")[0];
const nine = document.getElementsByClassName("nine")[0];
const zero = document.getElementsByClassName("zero")[0];
const decimal = document.getElementsByClassName("decimal")[0];
const equal = document.getElementsByClassName("equal")[0];
const plus = document.getElementsByClassName("plus")[0];
const minus = document.getElementsByClassName("minus")[0];
const multiply = document.getElementsByClassName("multiply")[0];
const divide = document.getElementsByClassName("divide")[0];
const clear = document.getElementsByClassName("clear")[0];
const del = document.getElementsByClassName("del")[0];

const display = document.getElementsByClassName("display")[0];

one.addEventListener("click", () => {
  // update Display Value
  displayValue += "1";

  // update Display View
  display.innerText = displayValue;
});

two.addEventListener("click", () => {
  // update Display Value
  displayValue += "2";

  // update Display View
  display.innerText = displayValue;
});

three.addEventListener("click", () => {
  // update Display Value
  displayValue += "3";

  // update Display View
  display.innerText = displayValue;
});

four.addEventListener("click", () => {
  // update Display Value
  displayValue += "4";

  // update Display View
  display.innerText = displayValue;
});

five.addEventListener("click", () => {
  // update Display Value
  displayValue += "5";

  // update Display View
  display.innerText = displayValue;
});

six.addEventListener("click", () => {
  // update Display Value
  displayValue += "6";

  // update Display View
  display.innerText = displayValue;
});

seven.addEventListener("click", () => {
  // update Display Value
  displayValue += "7";

  // update Display View
  display.innerText = displayValue;
});

eight.addEventListener("click", () => {
  // update Display Value
  displayValue += "8";

  // update Display View
  display.innerText = displayValue;
});

nine.addEventListener("click", () => {
  // update Display Value
  displayValue += "9";

  // update Display View
  display.innerText = displayValue;
});

zero.addEventListener("click", () => {
  // update Display Value
  displayValue += "0";

  // update Display View
  display.innerText = displayValue;
});

decimal.addEventListener("click", () => {
  // update Display Value
  displayValue += ".";

  // update Display View
  display.innerText = displayValue;
});

plus.addEventListener("click", () => {
  // update Display Value
  displayValue += "+";

  // update Display View
  display.innerText = displayValue;
});

minus.addEventListener("click", () => {
  // update Display Value
  displayValue += "-";

  // update Display View
  display.innerText = displayValue;
});

multiply.addEventListener("click", () => {
  // update Display Value
  displayValue += "*";

  // update Display View
  display.innerText = displayValue;
});

divide.addEventListener("click", () => {
  // update Display Value
  displayValue += "/";

  // update Display View
  display.innerText = displayValue;
});

clear.addEventListener("click", () => {
  // update Display Value
  displayValue = "";

  // update Display View
  display.innerText = "0";
});

del.addEventListener("click", () => {
  if (displayValue != "") {
    // update Display Value
    displayValue = displayValue.slice(0, -1);

    // update Display View
    display.innerText = displayValue;
  } 

  if (displayValue == "") {
    // update Display Value
    displayValue = "";

    // update Display View
    display.innerText = "0";
  }
});

equal.addEventListener("click", () => {
  const total = calculate();
  displayValue = total;
  // update Display View
  display.innerText = total;
});

function calculate() {
  return eval(displayValue);
}
