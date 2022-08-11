const sketchpad = document.querySelector('.sketchpad');
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    sketchpad.appendChild(div);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.toggle('black-square');
    })
});