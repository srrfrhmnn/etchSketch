const board = document.getElementsByClassName('board')[0];
let clr = "black";

for (let i = 0; i < 100*100; i++) {
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