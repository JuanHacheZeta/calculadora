let displayValue = '';
let lastOperation = '';
let shouldResetDisplay = false;

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        displayValue = number;
        shouldResetDisplay = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    lastOperation = operator;
    displayValue += operator;
    shouldResetDisplay = false;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
        shouldResetDisplay = true;
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function squareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue)).toString();
        updateDisplay();
        shouldResetDisplay = true;
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function changeSign() {
    if (displayValue) {
        if (displayValue.charAt(0) === '-') {
            displayValue = displayValue.substring(1);
        } else {
            displayValue = '-' + displayValue;
        }
        updateDisplay();
    }
}
