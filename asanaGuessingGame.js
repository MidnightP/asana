// selectors
var squares = document.getElementsByClassName("square");
var asanaDisplay = document.getElementById("asanaDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var usedIndices = []
var numSquares = squares.length;
var randomAsanas = generateAsanasArr();
var chosenAsana = pickAsana(randomAsanas);


// var winnerAsana = generateRandomAsana();

//var h1 = document.querySelector("h1");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");

//easyBtn.addEventListener("click", function(){
//  easyBtn.classList.add("selected");
//  hardBtn.classList.remove("selected");
////  numSquares = generateRandomAsanas(numSquares);
//  numSquares = randomAsana(numSquares);
////  asanas = generateRandomAsanas(numSquares);
//  asanas = randomAsana(numSquares);
//  pickedAsana = pickAsana();
//  asanaDisplay.textContent = pickedAsana;
//    for(var i = 0; i < squares.length; i++){
//        if(asanas[i]){
//            squares[i].style.background = asanas[i];
//        } else {
//            squares[i].style.display = "none";
//        }
//    }
//});

//hardBtn.addEventListener("click", function(){
//  easyBtn.classList.remove("selected");
//  hardBtn.classList.add("selected");
//  numSquares = 6;
//  asanas = generateRandomAsanas(numSquares);
//  pickedAsana = pickAsana();
//  asanaDisplay.textContent = pickedAsana;
//    for(var i = 0; i < squares.length; i++){
//            squares[i].style.background = asanas[i];
//            squares[i].style.display = "block";
//        }
//});


resetButton.addEventListener("click", function () {
    // generate all new asanas
    // asanas = generateRandomAsanas(numSquares);
    // generate all new asanas
    asanas = randomAsana(numSquares);
    // pick a new random asana from array
    pickedAsana = pickAsana();
    // change asana display to match picked asana
    asanaDisplay.textContent = pickedAsana;
    this.textContent = "New Asanas";
    messageDisplay.textContent = "";
    // change asanas in squares on page
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = asanas[i];
    }
    h1.style.backgroundColor = "steelblue";
})

// Place asanas in sqares
for (var i = 0; i < numSquares; i++) {

    var square = squares[i]

    //add inital asana to squares
    square.style.backgroundImage = `url('${randomAsanas[i].image}')`

    var asana = randomAsanas[i]

    setOnClickListener(asana, square)
}

function setOnClickListener(asana, square) {
    //add click listeners to squares
    square.addEventListener("click", function () {

        // compare asana to picked asana
        if (asana.name === chosenAsana.name) {
            messageDisplay.textContent = "Got it!";
            resetButton.textContent = "Play again?";
            changeAsanas(asana);
            h1.style.backgroundImage = `url('${asana.image}')`;
        } else {
            this.style.backgroundImage = "";
            messageDisplay.textContent = "Try Again!";
        }
    });
}


// var randomAsanas = generateAsanasArr(); // var creates asana array
// var pickedAsana = pickAsana(randomAsanas);
//console.log("randomAsanas", randomAsanas);
//console.log("pickedAsana", pickedAsana);
//console.log("foundAsana", findAsanaByName(pickedAsana))

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
    return asanas[random];
}

//Create a function to create an array of asanas
function generateAsanasArr() {
    var asanas = []
    for (var i = 0; i < numSquares; i++) {
        //get random asana and push into array
        asanas.push(generateRandomAsana())
    }
    return asanas
}

//finds row in table
// function findAsanaByName(name) {
//     function isRightName(asanaObj) {
//         return asanaObj.name === name;
//     }

//     return asanaPics.find(isRightName)
// }

//Create a function to
function changeAsanas(asana) {
    //loop through all squares
    for (var i = 0; i < numSquares; i++) {
        //change each square to match given asana
        squares[i].style.backgroundImage = `url('${asana.image}')`;
    }
}