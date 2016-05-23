if (localStorage.clickcount) {
    document.getElementById("click").innerHTML = localStorage.clickcount;
} else {
    document.getElementById("click").innerHTML = 0;
}

window.onclick = function () {

    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }

    document.getElementById("click").innerHTML = localStorage.clickcount;
};

document.getElementById("button").onclick = function () {
    localStorage.clear();
    localStorage.clickcount = -1;

}