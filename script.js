let output = document.getElementById("outu");

function play(player) {
    output.innerHTML = "";

    const computer = Math.floor(Math.random() * 3); 

    if (player === 0) { 
        if (computer === 0) {
            output.innerHTML += `<h3>Pemain memilih   : gunting<br>`;
            output.innerHTML += `<h3>Komputer memilih : gunting<br>`;
            output.innerHTML += `<h3>Hasil            : seri<br>`;
        } else if (computer === 1) {
            output.innerHTML += `<h3>Pemain memilih   : gunting<br>`;
            output.innerHTML += `<h3>Komputer memilih : batu<br>`;
            output.innerHTML += `<h3>Hasil            : kalah<br>`;
        } else if (computer === 2) {
            output.innerHTML += `<h3>Pemain memilih   : gunting<br>`;
            output.innerHTML += `<h3>Komputer memilih : kertas<br>`;
            output.innerHTML += `<h3>Hasil            : menang<br>`;
        }
    }

    if (player === 1) { 
        if (computer === 0) {
            output.innerHTML += `<h3>Pemain memilih   : batu<br>`;
            output.innerHTML += `<h3>Komputer memilih : gunting<br>`;
            output.innerHTML += `<h3>Hasil            : menang<br>`;
        } else if (computer === 1) {
            output.innerHTML += `<h3>Pemain memilih   : batu<br>`;
            output.innerHTML += `<h3>Komputer memilih : batu<br>`;
            output.innerHTML += `<h3>Hasil            : seri<br>`;
        } else if (computer === 2) {
            output.innerHTML += `<h3>Pemain memilih   : batu<br>`;
            output.innerHTML += `<h3>Komputer memilih : kertas<br>`;
            output.innerHTML += `<h3>Hasil            : kalah<br>`;
        }
    }

    if (player === 2) {  
        if (computer === 0) {
            output.innerHTML += `<h3>Pemain memilih   : kertas<br>`;
            output.innerHTML += `<h3>Komputer memilih : gunting<br>`;
            output.innerHTML += `<h3>Hasil            : kalah<br>`;
        } else if (computer === 1) {
            output.innerHTML += `<h3>Pemain memilih   : kertas<br>`;
            output.innerHTML += `<h3>Komputer memilih : batu<br>`;
            output.innerHTML += `<h3>Hasil            : menang<br>`;
        } else if (computer === 2) {
            output.innerHTML += `<h3>Pemain memilih   : kertas<br>`;
            output.innerHTML += `<h3>Komputer memilih : kertas<br>`;
            output.innerHTML += `<h3>Hasil            : seri<br>`;
        }
    }
}


