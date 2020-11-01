
var numberOfDrumButtons = document.querySelectorAll(".drum-pad").length;
var displayText = document.getElementById("display");


for (var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum-pad")[i].addEventListener("click", function() {
       
        var buttonInnerHTML = this.innerHTML;

        drumSound(buttonInnerHTML.trim())
        
    })
    
}

document.addEventListener("keypress", function(event){
    var keyEvent = event.key.toUpperCase();
    drumSound(keyEvent)
})

function drumSound(key) {

    switch (key) {
        case "Q":
            var drumOne = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
            drumOne.play();
            displayText.innerHTML = "Heater 1";
            break;
        
        case "W":
            var drumTwo = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
            drumTwo.play();
            displayText.innerHTML = "Heater 2";
            break;

        case "E":
            var drumThree = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
            drumThree.play();
            displayText.innerHTML = "Heater 3";
            break;

        case "A":
            var drumFour = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
            drumFour.play();
            displayText.innerHTML = "Heater 4";
            break;

        case "S":
            var drumFive = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
            drumFive.play();
            displayText.innerHTML = "Clap";
            break;

        case "D":
            var drumSix = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
            drumSix.play();
            displayText.innerHTML = "Open HH";
            break;

        case "Z":
            var drumSeven = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
            drumSeven.play();
            displayText.innerHTML = "Kick n' Hat";
            break;

        case "X":
            var drumEight = new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
            drumEight.play();
            displayText.innerHTML = "Kick";
            break;

        case "C":
            var drumNine = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
            drumNine.play();
            displayText.innerHTML = "Closed HH";
            break;

        default:console.log("hello");
            
    }
}
