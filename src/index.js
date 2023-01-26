let button = document.getElementsByClassName('btn')[0];
let backgroundColorHex = document.getElementById('background-color-hex');
let colorContainer = document.getElementsByClassName('color-container')[0];

button.addEventListener('click', function () {
    let randomColor = getRandomColor();
    colorContainer.style.backgroundColor = randomColor;
    // appemd the random hex code to backgroundColorHex
    backgroundColorHex.innerHTML = randomColor;
});

backgroundColorHex.addEventListener('click', function () {
    // copy the hex code to clipboard
    let hexCode = backgroundColorHex.innerHTML;
    navigator.clipboard.writeText(hexCode);
});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}