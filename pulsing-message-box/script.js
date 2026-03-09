const box = document.getElementById('pulsing-box');
const message = document.getElementById('message');

let size = 300;
let minSize = 250;
let maxSize = 550;
let step = 2;
let growing = true;

const state1 = {
    text: "Ramaiah Institute of Technology",
    color: "#ff0000",
    borderColor: "#cc0000"
};

const state2 = {
    text: "Department of Artificial Intelligence and Machine Learning",
    color: "#0000ff",
    borderColor: "#0000aa"
};

function toggleState(isMax) {
    if (isMax) {
        message.innerText = state2.text;
        message.style.color = state2.color;
        box.style.borderColor = state2.borderColor;
    } else {
        message.innerText = state1.text;
        message.style.color = state1.color;
        box.style.borderColor = state1.borderColor;
    }
}

toggleState(false);

function animate() {
    if (growing) {
        size += step;
        if (size >= maxSize) {
            growing = false;
            toggleState(true);
        }
    } else {
        size -= step;
        if (size <= minSize) {
            growing = true;
            toggleState(false);
        }
    }

    box.style.width = size + "px";
    box.style.height = size / 2 + "px";
}

setInterval(animate, 20);
