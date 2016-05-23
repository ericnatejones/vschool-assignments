function parsePokemon() {

    var xhr = new XMLHttpRequest();
    
    console.log(xhr);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
        }
    };

    xhr.open("GET", "http://mean.codingcamp.us:6543/pokemon.json", true);
    xhr.send();

}

parsePokemon();