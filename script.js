let numSquare = 9;
let colors = [];
let currentColor;
const upper = document.querySelector('.upper');
const colorBox = document.querySelector(".colorBox");
const reset = document.querySelector(".reset");
let square = document.querySelectorAll('.square');
const button = document.querySelectorAll('.button');
const message = document.getElementById("message");
// const Easy = document.querySelector('.easy');
// const Medium = document.querySelector('.medium');
current();
// function to change to value of RGB box;
function current() {
    currentColor = colorBox.textContent;
    setSquare();
    buttons();
    restart();
    return console.log(currentColor)
}
//Reset button;
reset.addEventListener('click', () => {
current();

})
//function for squares;
function setSquare() {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].addEventListener('click', function () {
            let click = this.style.backgroundColor;
            if (click === currentColor) {
                message.style.display = "block"
                message.textContent = "You Won!";
                reset.textContent = "Try again";
                upper.style.backgroundColor = currentColor;
                fillColor(currentColor);

            } else {
                square[i].style.backgroundColor = "#2b2b2b";
                message.style.display = "none"
            }
        })
    }
}
//creating a loop which iterate through our square;
function restart() {
    colors = randomColor(numSquare);
    currentColor = chosenColor();
    upper.style.backgroundColor = "#ccc"
    reset.textContent = "Change Color";
    colorBox.textContent = currentColor;
    message.style.display = "none";
    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = "block"
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none"

        }
    }
}



// create a loops which iterate through our buttons;
function buttons() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove("selected");
            }
            button[i].classList.add("selected");
            if (button[i].textContent === "Easy") {
                numSquare = 3;
                console.log("It's easy")
            } else if (button[i].textContent === "Medium") {
                numSquare = 6;
                console.log("it's medium")
            } else {
                numSquare = 9;
                console.log("it's hard")
            }
            return restart();
        })
    }
}

function randomColor(num) {
    let colorArray = [];
    for (let i = 0; i < num; i++) {
        colorArray.push(boxColor())
    }
    return colorArray;
}
//A color must be select in our range otherwise it'll not match with any of our color;
function chosenColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function fillColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}
function boxColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let picker = "rgb(" + r + ", " + g + ", " + b + ")";
    return picker
}