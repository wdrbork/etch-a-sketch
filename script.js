const sketchpad = document.querySelector('.sketchpad');
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    sketchpad.appendChild(div);
}

