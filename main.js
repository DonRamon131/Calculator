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

for (const boton of botones) {
    boton.addEventListener('click',function toDisplay() {
        display.textContent = boton.textContent;
    });
}