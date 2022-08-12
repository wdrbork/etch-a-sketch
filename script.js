const GRID_WIDTH = 960;
updateGrid(16);

const sizeButton = document.querySelector('.size-button');
sizeButton.addEventListener('click', () => {
    let newSize = parseInt(prompt("What would you like the new size to be? (New size " + 
        "must be positive and no greater than 100)."));
    while (isNaN(newSize) || newSize < 1 || newSize > 100) {
        newSize = prompt("Invalid size. Please try again.");
    }

    updateGrid(newSize);
});

// Square Size Formula: width = (960 - (newSize * 2)) / newSize
function updateGrid(size) {
    const sketchpad = document.querySelector('.sketchpad');
    sketchpad.innerHTML = "";

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