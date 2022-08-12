const GRID_WIDTH = 840;
const DEFAULT_SIZE = 16;
updateGrid(DEFAULT_SIZE);

const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', () => {
    let newSize = prompt("What would you like the new size to be? (New size " + 
        "must be positive and no greater than 100).");
    if (newSize === null) {
        return;
    }

    newSize = parseInt(newSize);
    while (isNaN(newSize) || newSize < 1 || newSize > 100) {
        newSize = prompt("Invalid size. Please try again.");
        if (newSize === null) {
            return;
        }
        newSize = parseInt(newSize);
    }

    updateGrid(newSize);
});

// Square Size Formula: width = (960 - (newSize * 2)) / newSize
function updateGrid(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = "";

    sketchpad.style.width = GRID_WIDTH + 'px';
    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.height = (GRID_WIDTH - size * 2) / size + 'px';
        div.style.width = div.style.height;
        sketchpad.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.toggle('black-square');
        })
    });
    const sizeIndicator = document.querySelector('.size');
    sizeIndicator.textContent = 'Current Size: ' + size;
}