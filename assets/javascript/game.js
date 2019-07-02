$(document).ready(function(){

//Global variables
var characterChosen = false;
var opponentChosen = false;
var chosenCharacter;
var artorias = {
    HP: 125,
    AP: 12,
    CAP: 5,
    isAlive: true,
}
console.log(artorias);
$("#artoriasHP").text(artorias.HP);
$(".btn").toggle();
//when the game starts choose a character
$(".card").on("click", function chooseCharacter(){
    if(!characterChosen){
        characterChosen = true;
        console.log(characterChosen);
        chosenCharacter = this;
        console.log(chosenCharacter);
        $(this).appendTo("#playerRow");
        //the rest of the characters are unavailable to the player
        $("#characters").toggle();
        $("#characters").appendTo("#opponentSelectionRow");
        $("#characters").toggle();
        $("button").filter($("#opponentSelectionRow button.choose")).toggle();
    }
    
})
//player must choose a character to fight from remaining pool
//once opponent is chosen move to defender area
//solaire functions
$("#solaireButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    $("#solaire").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#solaireAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#artorias")){
        alert("artorias attacked");
    } else if ($(chosenCharacter).is("#ornstein")){
        alert("ornstein attacked");
    } else if ($(chosenCharacter).is("#blackKnight")){
        alert("black knight attacked");
    }
})
//ornstein functions
$("#ornsteinButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    $("#ornstein").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#ornsteinAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#artorias")){
        alert("artorias attacked");
    } else if ($(chosenCharacter).is("#solaire")){
        alert("solaire attacked");
    } else if ($(chosenCharacter).is("#blackKnight")){
        alert("black knight attacked");
    }
})
//artorias functions
$("#artoriasButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    $("#artorias").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#artoriasAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#solaire")){
        alert("solaire attacked");
    } else if ($(chosenCharacter).is("#ornstein")){
        alert("ornstein attacked");
    } else if ($(chosenCharacter).is("#blackKnight")){
        alert("black knight attacked");
    }
})
//black knight functions
$("#blackKnightButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    $("#blackKnight").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#blackKnightAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#artorias")){
        alert("artorias attacked");
    } else if ($(chosenCharacter).is("#ornstein")){
        alert("ornstein attacked");
    } else if ($(chosenCharacter).is("#solaire")){
        alert("solaire attacked");
    }
})
//The player will now be able to click the attack button.

//Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.

//When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

//The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.











})
