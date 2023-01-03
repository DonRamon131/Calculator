let a = "";
let b = "";
let operator = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return a / b;
}

let display = document.querySelector('.calculator-display');
let botones = document.querySelectorAll('.number');
let allClear = document.querySelector('.ac');
let deleto = document.querySelector('.delete');
let operador = document.querySelectorAll('.operator');
let decimal = document.querySelector('.decimal');
let equal = document.querySelector('.equal');

allClear.addEventListener('click', function clearDisplay() {
    display.textContent = '';
})

deleto.addEventListener('click', function() {
    let displayo = display.textContent.toString().slice(0,-1);
    display.textContent = displayo;
})

for (const boton of botones) {
    boton.addEventListener('click',function toDisplay() {
        display.textContent += boton.textContent;
    });
}

let displayValue = display.innerText;