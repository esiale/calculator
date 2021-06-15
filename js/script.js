function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide (a, b) {
    return parseFloat(a) / parseFloat(b);
}

let value1 = "";
let value2 = "";
let operator1 = "";
let operator2 = "";
let result = "";
let operatorActivated = false;
let clearCheck = false;

const numberButtons = document.querySelectorAll(".number button");
const operatorButtons = document.querySelectorAll(".operator button");
const resultButton = document.querySelector(".btn-result");
const clearButton = document.querySelector(".btn-clear");
const display = document.querySelector(".display");
const plusMinusButton = document.querySelector(".plusminus");
const decimal = document.querySelector(".decimal");

numberButtons.forEach(button => {
    button.addEventListener("click", getNumber);
})

operatorButtons.forEach(button => {
    button.addEventListener("click", useOperator);
})

resultButton.addEventListener("click", getResult);
clearButton.addEventListener("click", clearVars);
clearButton.addEventListener("click", resetDisplay);
plusMinusButton.addEventListener("click", plusminus);
decimal.addEventListener("click", insertDecimal);

function getNumber(e) {
    if (display.textContent === "0") {
        clearDisplay();
    }
    if (clearCheck === true) {
        clearDisplay();
        clearCheck = false;
    }
        display.textContent += e.target.value;
        operatorActivated = false;
}

function useOperator(e) {
    if (operatorActivated === true) {
        operator1 = this.value;
        operator2 = this.value;
        return;
    }

    if (value1 === "") {
        value1 = display.textContent;
        operator1 = this.value;
    } else if (value1 !== "" && result === "") {
        value2 = display.textContent;
        evaluate();
        value1 = result;
        operator2 = this.value;
    } else {
        value2 = display.textContent;
        operator1 = operator2;
        evaluate();
        operator2 = this.value;
        value1 = result;
    } clearCheck = true;
    operatorActivated = true;
}

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

function evaluate() {
    result = operate(operator1, value1, value2);
    result = Math.round(result * 10000) / 10000;
    if (operator1 === "divide" && value2 === "0") {
        display.textContent = "You absolute buffoon...";
        setTimeout(clear, 1000);
    } else {
    display.textContent = result;
    clearCheck = true;
    }
}

function getResult() {
    if (value1 === ""|| operatorActivated === true) {
        return
    } else {
    value2 = display.textContent;
    evaluate();
    clearVars();
    }
}

function clearVars() {
    value1 = "";
    value2 = "";
    result = "";
    operator1 = "";
    operator2 = "";
}

function clearDisplay() {
    display.textContent = "";
}

function resetDisplay() {
    display.textContent = "0";
}

function plusminus() {
    display.textContent = 0 - display.textContent;
}

function insertDecimal() {
    if (display.textContent === "") {
        return
    } else if (display.textContent.includes("\.")) {
        return
    }
    display.textContent += "\.";
}

