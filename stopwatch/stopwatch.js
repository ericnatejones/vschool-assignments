// Variables

var display = document.getElementsByTagName("h2")[0],
    start = document.getElementById("start"),
    lap = document.getElementById("lap"),
    reset = document.getElementById("reset"),
    record = document.getElementsByTagName("ul"),
    button = document.getElementsByTagName("button"),
    forTag = document.getElementById("for"),
    blargArray = ["Weclome ", "to Jack McBride's ", "first attempt at Javascript  ", "ever."],
    engine,
    deciseconds = 0,
    seconds = 0,
    minutes = 0,
    lapIndex = 1,
    x;

// Time Flow

function runTimer() {
    deciseconds++;

    // Time Formatting

    if (deciseconds >= 100) {
        deciseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
            }
        }
    }

    var mm = (minutes > 9 ? minutes : "0" + minutes),
        ss = (seconds > 9 ? seconds : "0" + seconds),
        ds = (deciseconds > 9 ? deciseconds : "0" + deciseconds),
        displayTime = (mm + ":" + ss + ":" + ds);

    // Reset Button

    reset.onclick = function () {
        deciseconds = 0;
        seconds = 0;
        minutes = 0;
        displayTime = "00:00:00";
        display.textContent = displayTime;
        lapIndex = 1;
        var laps = document.getElementById("myList");
        while (laps.firstChild) {
            laps.removeChild(laps.firstChild);
        }
    };

    // Lap Button

    lap.onclick = function () {
        var list = document.createElement("li");
        if (start.textContent !== "START") {
            var text = document.createTextNode("Lap " + (lapIndex++) + ": " + displayTime);
            list.appendChild(text);
            document.getElementById("myList").appendChild(list);
        }
    };

    display.textContent = displayTime;
}

// Interval 

function initiate() {
    engine = setInterval(runTimer, 10);
}

// Start Button

start.onclick = function startStop() {
    if (start.textContent === "START") {
        initiate();
        start.textContent = "STOP";
    } else {
        clearInterval(engine);
        start.textContent = "START";
    }
};

for (x = 0; x < 4; x++) {
    var forP = document.createElement("p1");
    var forT = document.createTextNode(blargArray[x]);
    forP.appendChild(forT);
    document.getElementById("for").appendChild(forP);
}