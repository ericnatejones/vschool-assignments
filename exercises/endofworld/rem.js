var display = document.getElementsByTagName("h1")[0],
    message = document.getElementsByTagName("h2")[0],
    seconds = 20,
    minutes = 00,
    hours = 00,
    engine,
    trigger = true;

var mm = (minutes > 9 ? minutes : "0" + minutes),
    ss = (seconds > 9 ? seconds : "0" + seconds),
    ds = (hours > 9 ? hours : "0" + hours),
    displayTime = (ds + ":" + mm + ":" + ss);

display.textContent = displayTime;

// Time Flow

function runTimer() {


    // Time Formatting

    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                trigger = true;
                return;
            }
        }
    }

    var mm = (minutes > 9 ? minutes : "0" + minutes),
        ss = (seconds > 9 ? seconds : "0" + seconds),
        ds = (hours > 9 ? hours : "0" + hours),
        displayTime = (ds + ":" + mm + ":" + ss);

    display.textContent = displayTime;
    seconds--;
    display.textContent = displayTime;

    if ((mm === "00") && (ss === "00") && (ds === "00")) {
        message.textContent = "The end of the world has come upon us";
        trigger = false;
        clearInterval(engine);
        return;
    }

}

window.onload = function () {
    if (trigger) {
        engine = setInterval(runTimer, 1000);
    }
};