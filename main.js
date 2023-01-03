let  = "";
let b = "";
let operator = "";

/* function add(a, b) {
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
} */

let operadores = document.querySelectorAll('.operator');
let botones = document.querySelectorAll('.number');
let previousScreen = document.querySelector('.previous');
let allClear = document.querySelector('.ac');
let deleto = document.querySelector('.delete');
let decimal = document.querySelector('.decimal');
let equal = document.querySelector('.equal');

allClear.addEventListener('click', function clearDisplay() {
    display.textContent = '';
});

deleto.addEventListener('click', function() {
    let displayo = display.textContent.toString().slice(0,-1);
    display.textContent = displayo;
});

for (const boton of botones) {
    boton.addEventListener('click',function toDisplay() {
        display.textContent += boton.textContent;
    });
}

for (const operador of operadores) {
    operador.addEventListener('click', function toDisplay() {
        display.textContent = a;
        display.textContent += operador.textContent;
    });
}

decimal.addEventListener('click', function toDisplay() {
    display.textContent += decimal.textContent;
});