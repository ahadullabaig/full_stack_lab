const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval is okay for a simple beginner project like this
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
