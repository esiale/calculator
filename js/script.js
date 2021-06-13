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

let storedValue = "";
let storedValue2 = "";
let usedOperator = "";
let result = "";

const numberButtons = document.querySelectorAll(".number button");
const operatorButtons = document.querySelectorAll(".operator button");
const resultButton = document.querySelector(".btn-result");
const clearButton = document.querySelector(".btn-clear");
const display = document.querySelector(".display");
const plusMinusButton = document.querySelector(".plusminus")

numberButtons.forEach(button => {
    button.addEventListener("click", getNumber);
})

operatorButtons.forEach(button => {
    button.addEventListener("click", useOperator);
})

resultButton.addEventListener("click", getResult);
clearButton.addEventListener("click", clear);
plusMinusButton.addEventListener("click", plusminus);

function getNumber(e) {
    storedValue += this.value;
    display.textContent = storedValue;
}

function getNumber2(e) {
    storedValue2 += this.value;
    display.textContent = storedValue2;
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
    result = operate(usedOperator, storedValue, storedValue2);
    if (usedOperator === "divide" && storedValue2 === "0") {
        display.textContent = "You absolute buffoon...";
        setTimeout(clear, 1000);
    } else {
    display.textContent = result;
    storedValue = result;
    storedValue2 = "";
    usedOperator = "";
    }
}

function useOperator(e) {
    usedOperator = this.value;

    if (storedValue2 === "") {
        numberButtons.forEach(button => {
            button.removeEventListener("click", getNumber);
            button.addEventListener("click", getNumber2);
        })
    } else {
        evaluate();
    }
}

function getResult() {
    if (storedValue === "" || storedValue2 === "") {
        return
    } else {
    evaluate();
    }
}


function clear() {
    numberButtons.forEach(button => {
        button.removeEventListener("click", getNumber2);
        button.addEventListener("click", getNumber);
    })
    storedValue = "";
    storedValue2 = "";
    result = "";
    usedOperator = "";
    display.textContent = "0";
}

function plusminus() {
    switch (display.textContent) {
        case storedValue:
            storedValue = 0 - storedValue;
            display.textContent = storedValue;
            break;
        case storedValue2:
            storedValue2 = 0 - storedValue2;
            display.textContent = storedValue;
            break;
        case result:
            result = 0 - result;
            display.textContent = storedValue;
            break;
    }
}

function inputNumber() {
    
}