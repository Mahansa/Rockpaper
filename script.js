let output = document.getElementById("outu");

function play(player) {
    output.innerHTML = "";

    const computer = Math.floor(Math.random() * 3); 

    if (player === 0) { 
        if (computer === 0) {
            output.innerHTML += `Pemain memilih   : gunting<br>`;
            output.innerHTML += `Komputer memilih : gunting<br>`;
            output.innerHTML += `Hasil            : seri<br>`;
        } else if (computer === 1) {
            output.innerHTML += `Pemain memilih   : gunting<br>`;
            output.innerHTML += `Komputer memilih : batu<br>`;
            output.innerHTML += `Hasil            : kalah<br>`;
        } else if (computer === 2) {
            output.innerHTML += `Pemain memilih   : gunting<br>`;
            output.innerHTML += `Komputer memilih : kertas<br>`;
            output.innerHTML += `Hasil            : menang<br>`;
        }
    }

    if (player === 1) { 
        if (computer === 0) {
            output.innerHTML += `Pemain memilih   : batu<br>`;
            output.innerHTML += `Komputer memilih : gunting<br>`;
            output.innerHTML += `Hasil            : menang<br>`;
        } else if (computer === 1) {
            output.innerHTML += `Pemain memilih   : batu<br>`;
            output.innerHTML += `Komputer memilih : batu<br>`;
            output.innerHTML += `Hasil            : seri<br>`;
        } else if (computer === 2) {
            output.innerHTML += `Pemain memilih   : batu<br>`;
            output.innerHTML += `Komputer memilih : kertas<br>`;
            output.innerHTML += `Hasil            : kalah<br>`;
        }
    }

    if (player === 2) {  
        if (computer === 0) {
            output.innerHTML += `Pemain memilih   : kertas<br>`;
            output.innerHTML += `Komputer memilih : gunting<br>`;
            output.innerHTML += `Hasil            : kalah<br>`;
        } else if (computer === 1) {
            output.innerHTML += `Pemain memilih   : kertas<br>`;
            output.innerHTML += `Komputer memilih : batu<br>`;
            output.innerHTML += `Hasil            : menang<br>`;
        } else if (computer === 2) {
            output.innerHTML += `Pemain memilih   : kertas<br>`;
            output.innerHTML += `Komputer memilih : kertas<br>`;
            output.innerHTML += `Hasil            : seri<br>`;
        }
    }
}
