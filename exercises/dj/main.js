var box = document.getElementById("box"),
    mouseBox = false;

function blue() {
    box.style.backgroundColor = "blue";
}

function red() {
    box.style.backgroundColor = "red";
}

function yellow() {
    box.style.backgroundColor = "yellow";
}

function green() {
    box.style.backgroundColor = "green";
}

function orange() {
    box.style.backgroundColor = "orange";
}

box.ondblclick = green;

box.onmouseover = function () {
    blue();
    mouseBox = true;
};

box.onmouseout = function () {
    mouseBox = false;
};

box.onmousedown = red;

box.onmouseup = yellow;

document.onwheel = function () {
    if (!mouseBox) {
        orange();
    }
};

document.addEventListener("keydown", function (event) {
    if (event.which === 79) {
        orange();
    } else if (event.which === 71) {
        green();
    } else if (event.which === 82) {
        red();
    } else if (event.which === 66) {
        blue();
    } else if (event.which === 89) {
        yellow();
    }
});