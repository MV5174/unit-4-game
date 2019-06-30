$(document).ready(function(){

//Global variables for each character (HP, AP, CAP)
var characterChosen = false;
var chosenCharacter;
var artorias = {
    HP: 125,
    AP: 10,
    CAP: 10,
}
//when the game starts choose a character
$(".card").on("click", function chooseCharacter(event){
    if(!characterChosen){
        characterChosen = true;
        console.log(characterChosen);
        // chosenCharacter = this;
        // console.log(chosenCharacter);
        // var target = $( event.target );
        // $(this).appendTo("#playerRow");
        // if ($(event.target).is("#artorias")){
        //     console.log("it worked");
        // }
    }
})
//the rest of the characters are unavailable to the player

//player must choose a character to fight from remaining pool

//once opponent is chosen move to defender area

//The player will now be able to click the attack button.

//Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.

//When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

//The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.











})
