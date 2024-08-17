function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use the Function constructor to evaluate the expression
        display.value = new Function('return ' + display.value)();
    } catch (e) {
        display.value = 'Error';
    }
}
