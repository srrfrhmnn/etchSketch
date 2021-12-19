const board = document.getElementsByClassName('board')[0];

//for loop that runs 10 times
for (let i = 0; i < 100*100; i++) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    board.appendChild(pixels);
}

const pix = document.querySelectorAll('.pixel').forEach(element => {
    element.addEventListener('mouseover', function() {
        element.style.backgroundColor = 'black';
    });
});