const pickerButton = document.getElementById("picker-button")
const mysteryButton = document.getElementById("mystery-button")

const randomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const colorChange = () => {
    const randomColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    event.target.style.backgroundColor = randomColor;
}

pickerButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;