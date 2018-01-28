// selectors
var allSquares = document.getElementsByClassName("square");
var currentSquares = allSquares
var hiddenSquares = document.getElementsByClassName("square hidden");
var asanaDisplay = document.getElementById("asanaDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// variables
var usedIndices = [];
var ended = false
var numSquares = currentSquares.length;
var hardNumSquares = allSquares.length;
var easyNumSquares = 3;
var randomAsanas = [];
var chosenAsana = {};

// functions
function reset() {
    usedIndices = []
    ended = false;
    randomAsanas = [];
    chosenAsana = {};

    // generate all new asanas
    generateAsanasArr();

    // pick a new random asana from array
    pickAsana(randomAsanas);

    // its name in the title
    asanaDisplay.textContent = chosenAsana.name;

    resetButton.textContent = "New Asanas";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    // Place asanas in squares
    for (var i = 0; i < numSquares; i++) {
        var square = currentSquares[i]
        var asana = randomAsanas[i]

        // attach asana image to square
        square.style.backgroundImage = `url('${asana.image}')`

        setOnClick(asana, square)
    }
}

function setOnClick(asana, square) {
    square.clicked = false;

    // 3add click listeners to squares
    square.onclick = function () {

        if (square.clicked || ended) return

        square.clicked = true

        // compare asana to picked asana
        if (asana.name === chosenAsana.name) {
            // won!
            messageDisplay.textContent = "Got it!";
            resetButton.textContent = "Play again?";
            changeAsanas(asana);
            h1.style.backgroundColor = "gold"

            ended = true

        } else {
            // try again!
            square.style.backgroundImage = "";
            messageDisplay.textContent = "Try Again!";
        }
    };
}

function generateNewRandomIndex() {
    var index = Math.floor(Math.random() * asanaPics.length);

    // Check if it is not already used
    if (usedIndices.includes(index)) return generateNewRandomIndex()

    // Keep track of the indeces already used
    usedIndices.push(index)

    return index
}

//Create a function to pick a single asana name
function generateRandomAsana() {
    // Generate a random index. Fetch name from object at that index
    var index = generateNewRandomIndex()

    var randomAsana = asanaPics[index]
    return randomAsana;
}

//Create a function to pick an asana from an array
function pickAsana(asanas) {
    var random = Math.floor(Math.random() * numSquares);
    chosenAsana = asanas[random];
}

//Create a function to create an array of asanas
function generateAsanasArr() {
    for (var i = 0; i < numSquares; i++) {
        //get random asana and push into array
        randomAsanas.push(generateRandomAsana())
    }
}

//Create a function to
function changeAsanas(asana) {
    //loop through all squares
    for (var i = 0; i < numSquares; i++) {
        //change each square to match given asana
        currentSquares[i].style.backgroundImage = `url('${asana.image}')`;
    }
}

resetButton.onclick = reset

hardBtn.onclick = function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    // set all squares to be the current squares
    currentSquares = allSquares;

    // set the new number of squares
    numSquares = currentSquares.length;

    for (var i = 0; i < numSquares; i++) {
        allSquares[i].className = "square"
    };

    reset();
};

easyBtn.onclick = function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    // calculate the number of squares to be hidden in the html
    var amountToBeRemoved = numSquares - easyNumSquares;

    // set the new number of squares
    numSquares = easyNumSquares;

    for (var i = 0; i < amountToBeRemoved; i++) {
        allSquares[2 + i].className = "square hidden"
    };

    currentSquares = [];

    for (var i = 0; i < allSquares.length; i++) {
        if (!allSquares[i].className.includes("hidden")) currentSquares.push(allSquares[i])
    };

    reset();
};

reset();

// finds row in table
// function findAsanaByName(name) {
//     function isRightName(asanaObj) {
//         return asanaObj.name === name;
//     }
//     return asanaPics.find(isRightName)
// }