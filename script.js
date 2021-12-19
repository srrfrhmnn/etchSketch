const board = document.getElementsByClassName('board')[0];
let clr = "lol";
let x = 64;
for (let i = 0; i < square(sessionStorage.getItem("gridSize")); i++) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    board.appendChild(pixels);
}

const pix = document.querySelectorAll('.pixel').forEach(element => {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = `${clr}`;
    });
});

/*document.getElementById("red").addEventListener("click", function() {
    clr = "red";
});
*/

document.querySelectorAll("button").forEach(element => {
    console.log(element.id);
    element.addEventListener("click", () => {
        clr = `${element.id}`
        if (element.id == "erase") clr = "gray";
    })
});

document.getElementById("reload").addEventListener("click", () => {
    location.reload();
});

window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == "f"){
        clr = "lol";
    } else if(e.key == "q") {
        clr = "red"
    } else if(e.key == "w"){
        clr = "blue"
    } else if(e.key == "e"){
        clr = "green"
    } else if(e.key == "r"){
        clr = "yellow"
    } else if(e.key == "t"){
        clr = "black"
    } else if(e.key == "y"){
        clr = "white"
    } else if(e.key == "d"){
        clr = "gray"
    }
});

function square(x) {
    return x * x;
}


function getGridSize() {
    let gridSize = prompt("Enter a number for the grid size");
    sessionStorage.setItem("gridSize", gridSize);
    location.reload();
}

//console.log(sessionStorage.getItem("gridSize"));

board.setAttribute("style", "grid-template-columns: repeat(" + sessionStorage.getItem("gridSize") + ", auto); grid-template-rows: repeat(" + sessionStorage.getItem("gridSize") + ", auto);");
console.log(sessionStorage.getItem("gridSize"));