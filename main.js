let previousValue = '';
let currentValue = '';
let operator = '';
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
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.number');
let previousScreen = document.querySelector('.previous');
let currentScreen = document.querySelector('.current');
let allClear = document.querySelector('.ac');
let deleto = document.querySelector('.delete');
let decimal = document.querySelector('.decimal');
let equal = document.querySelector('.equal');

allClear.addEventListener('click', function() {
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
});

deleto.addEventListener('click', function() {
    let displayo = currentScreen.textContent.toString().slice(0,-1);
    currentScreen.textContent = displayo;
});

decimal.addEventListener('click', function() {
    addDecimal();
});

equal.addEventListener('click', function() {
    calculate();
    previousScreen.textContent = '';
    currentScreen.textContent = previousValue;
})

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue;
}))

operators.forEach((op) => op.addEventListener('click', function(e) {
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
}))

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    }
    else if (operator === '-') {
        previousValue -= currentValue;
    }
    else if (operator === 'x') {
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    }

    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function handleNumber(num){
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function addDecimal() {
    if(!currentValue.includes('.')) {
        currentValue += '.';
    }
}