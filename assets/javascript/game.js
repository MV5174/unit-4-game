$(document).ready(function(){

//Global variables
var characterChosen = false;
var opponentChosen = false;
var chosenCharacter;
var opponents = 3;
var artorias = {
    HP: 50,
    AP: 12,
    CAP: 5,
    isAlive: true,
    solaireAttack: function(){
        this.HP = this.HP - solaire.AP;
        $("#artoriasHP").text(artorias.HP);
    },
    ornsteinAttack: function(){
        this.HP = this.HP - ornstein.AP;
        $("#artoriasHP").text(artorias.HP);
    },
    blackKnightAttack: function(){
        this.HP = this.HP - blackKnight.AP;
        $("#artoriasHP").text(artorias.HP);
    },
    solaireCounter: function(){
        solaire.HP = solaire.HP - artorias.CAP;
        $("#solaireHP").text(solaire.HP);
    },
    ornsteinCounter: function(){
        ornstein.HP = ornstein.HP - artorias.CAP;
        $("#ornsteinHP").text(ornstein.HP);
    },
    blackKnightCounter: function(){
        blackKnight.HP = blackKnight.HP - artorias.CAP;
        $("#blackKnightHP").text(blackKnight.HP);
    }
}
var solaire = {
    HP: 75,
    AP: 5,
    CAP: 5,
    isAlive: true,
    artoriasAttack: function (){
        this.HP = this.HP - artorias.AP;
        $("#solaireHP").text(solaire.HP);
    },
    ornsteinAttack: function(){
        this.HP = this.HP - ornstein.AP;
        $("#solaireHP").text(solaire.HP);
    },
    blackKnightAttack: function(){
        this.HP = this.HP - blackKnight.AP;
        $("#solaireHP").text(solaire.HP);
    },
    ornsteinCounter: function(){
        ornstein.HP = ornstein.HP - solaire.CAP;
        $("#ornsteinHP").text(ornstein.HP);
    },
    blackKnightCounter: function(){
        blackKnight.HP = blackKnight.HP - solaire.CAP;
        $("#blackKnightHP").text(blackKnight.HP);
    },
    artoriasCounter: function(){
        artorias.HP = artorias.HP - solaire.CAP;
        $("#artoriasHP").text(artorias.HP);
    },
}
var ornstein = {
    HP: 50,
    AP: 7,
    CAP: 10,
    isAlive: true,
    artoriasAttack: function (){
        this.HP = this.HP - artorias.AP;
        $("#ornsteinHP").text(ornstein.HP);
    },
    solaireAttack: function(){
        this.HP = this.HP - solaire.AP;
        $("#ornsteinHP").text(ornstein.HP);
    },
    blackKnightAttack: function(){
        this.HP = this.HP - blackKnight.AP;
        $("#ornsteinHP").text(ornstein.HP);
    },
    blackKnightCounter: function(){
        blackKnight.HP = blackKnight.HP - solaire.CAP;
        $("#blackKnightHP").text(blackKnight.HP);
    },
    artoriasCounter: function(){
        artorias.HP = artorias.HP - solaire.CAP;
        $("#artoriasHP").text(artorias.HP);
    },
    solaireCounter: function(){
        solaire.HP = solaire.HP - artorias.CAP;
        $("#solaireHP").text(solaire.HP);
    },
}
var blackKnight = {
    HP: 50,
    AP: 10,
    CAP: 7,
    isAlive: true,
    artoriasAttack: function (){
        this.HP = this.HP - artorias.AP;
        $("#blackKnightHP").text(blackKnight.HP);
    },
    solaireAttack: function(){
        this.HP = this.HP - solaire.AP;
        $("#blackKnightHP").text(blackKnight.HP);
    },
    ornsteinAttack: function(){
        this.HP = this.HP - ornstein.AP;
        $("#blackKnightHP").text(blackKnight.HP);
    },
    artoriasCounter: function(){
        artorias.HP = artorias.HP - solaire.CAP;
        $("#artoriasHP").text(artorias.HP);
    },
    solaireCounter: function(){
        solaire.HP = solaire.HP - artorias.CAP;
        $("#solaireHP").text(solaire.HP);
    },
    ornsteinCounter: function(){
        ornstein.HP = ornstein.HP - artorias.CAP;
        $("#ornsteinHP").text(ornstein.HP);
    },
}

console.log(artorias);
$("#solaireHP").text(solaire.HP);
$("#artoriasHP").text(artorias.HP);
$("#ornsteinHP").text(ornstein.HP);
$("#blackKnightHP").text(blackKnight.HP);
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
    opponent = this;
    $("#solaire").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#solaireAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#artorias")){
        solaire.artoriasAttack();
        solaire.artoriasCounter();
    } else if ($(chosenCharacter).is("#ornstein")){
        solaire.ornsteinAttack();
        solaire.ornsteinCounter();
    } else if ($(chosenCharacter).is("#blackKnight")){
        solaire.blackKnightAttack();
        solaire.blackKnightCounter();
    }
    if (solaire.HP === 0 || solaire.HP <= 0){
        opponentChosen = false;
        opponents--;
        $("#solaire").toggle();
        $("button").filter($("#defenderRow button.btn")).toggle();
        $("button").filter($("#opponentSelectionRow button.choose")).toggle();
    }
    if (opponents === 0){
        alert("you won!!!!");
    }
})
//ornstein functions
$("#ornsteinButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    opponent = this;
    $("#ornstein").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#ornsteinAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#artorias")){
        ornstein.artoriasAttack();
        ornstein.artoriasCounter();
    } else if ($(chosenCharacter).is("#solaire")){
        ornstein.solaireAttack();
        ornstein.solaireAttack();
    } else if ($(chosenCharacter).is("#blackKnight")){
        ornstein.blackKnightAttack();
        artorias.blackKnightCounter();
    }
    if (ornstein.HP === 0 || ornstein.HP <= 0){
        opponentChosen = false;
        opponents--;
        $("#ornstein").toggle();
        $("button").filter($("#defenderRow button.btn")).toggle();
        $("button").filter($("#opponentSelectionRow button.choose")).toggle();
    }
    if (opponents === 0){
        alert("you won!!!!");
    }
})
//artorias functions
$("#artoriasButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    opponent = this;
    $("#artorias").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#artoriasAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#solaire")){
        artorias.solaireAttack();
        artorias.solaireAttack();
    } else if ($(chosenCharacter).is("#ornstein")){
        artorias.ornsteinAttack();
        artorias.ornsteinCounter();
    } else if ($(chosenCharacter).is("#blackKnight")){
        artorias.blackKnightAttack();
        artorias.blackKnightCounter();
    }
    if (artorias.HP === 0 || artorias.HP <= 0){
        opponentChosen = false;
        opponents--;
        $("#artorias").toggle();
        $("button").filter($("#defenderRow button.btn")).toggle();
        $("button").filter($("#opponentSelectionRow button.choose")).toggle();
    }
    if (opponents === 0){
        alert("you won!!!!");
    }
})
//black knight functions
$("#blackKnightButton").on("click", function chooseOpponent(){
    if(!opponentChosen){
    opponentChosen = true;
    opponent = this;
    $("#blackKnight").appendTo("#defenderRow");
    $("button").filter($("#defenderRow button.btn")).toggle();
    $("button").filter($("#opponentSelectionRow button.choose")).toggle();
}
})

$("#blackKnightAttackButton").on("click", function(){
    console.log(chosenCharacter);
    if ($(chosenCharacter).is("#artorias")){
        blackKnight.artoriasAttack();
        blackKnight.artoriasCounter();
    } else if ($(chosenCharacter).is("#ornstein")){
        blackKnight.ornsteinAttack();
        blackKnight.ornsteinCounter();
    } else if ($(chosenCharacter).is("#solaire")){
        blackKnight.solaireAttack();
        blackKnight.solaireAttack();
    }
    if (blackKnight.HP === 0 || blackKnight.HP <= 0){
        opponentChosen = false;
        opponents--;
        $("#blackKnight").toggle();
        $("button").filter($("#defenderRow button.btn")).toggle();
        $("button").filter($("#opponentSelectionRow button.choose")).toggle();
    }
    if (opponents === 0){
        alert("you won!!!!");
    }
})

//The player will now be able to click the attack button.

//Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.

//When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

//The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.











})
