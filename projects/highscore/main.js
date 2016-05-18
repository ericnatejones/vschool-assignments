var game = document.getElementById("game"),
    player = document.getElementById("player"),
    score = document.getElementById("highscore"),
    trashtalk = document.getElementById("trashtalk"),
    submit = document.getElementById("submit"),
    form = document.getElementById("form"),
    table = document.getElementById("table"),
    toggle = true;

var dis = ["Welcome to Noobville, losers.", "You are the reason they put instructions on shampoo.", "You should go ahead and stop trying now.", "Ooohhhh PWNED YOU NOOBS"];



submit.onclick = function () {
    if ((game.value === "") || (player.value === "") || (score.value === "")) {
        window.alert("Please enter all fields.");
    } else if (score.value < 1) {
        window.alert("Can you say noob? That score isn't even worth posting.");
    } else {
        if (toggle) {

            table.deleteRow(0);
            toggle = false;
        }
        var newRow = table.insertRow(table.rows.length),
            cellName = newRow.insertCell(-1),
            cellGame = newRow.insertCell(-1),
            cellScore = newRow.insertCell(-1),
            cellDate = newRow.insertCell(-1),
            nameText = document.createTextNode(player.value),
            gameText = document.createTextNode(game.value),
            scoreText = document.createTextNode(score.value),
            today = new Date(),
            formattedDate = today.toLocaleDateString(),
            dateText = document.createTextNode(formattedDate);

        cellName.appendChild(nameText);
        cellGame.appendChild(gameText);
        cellScore.appendChild(scoreText);
        cellDate.appendChild(dateText);

        if (trashtalk.checked) {
            var disChance = Math.floor(Math.random() * dis.length),
                trashRow = table.insertRow(table.rows.length),
                trashCell = trashRow.insertCell(-1),
                trashText = document.createTextNode('"' + dis[disChance] + '"' + ' - ' + player.value);
            trashCell.colSpan = "4";
            trashCell.appendChild(trashText);

        }

        form.reset();
    }
};