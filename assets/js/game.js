

// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() *(max - min + 1) + min);

  return value;
};



console.log(Math.max(34, 23, 354))
//Game States
// "WIN" - player has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - player robot's heatlh is zero or less
var fightOrSkip = function (){
    // ask user if they'd like to fight or skip using  function
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    promptFight = promptFight.toLocaleLowerCase();
    //conditional recursive function call
    if (promptFight === "" || promptFight === null ) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip
    }
  
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        shop();
      }
    }
}

// Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
var fight = function(enemy) {
 // keep track of who goes first
 var isPlayerTurn = true;
 ​
   // randomly change turn order
   if (Math.random() > 0.5) {
     isPlayerTurn = false;
   }
 ​
   while (playerInfo.health > 0 && enemy.health > 0) {
     if (isPlayerTurn) {
       // ask user if they'd like to fight or skip using fightOrSkip function
       if (fightOrSkip()) {
         // if true, leave fight by breaking loop
         break;
       }
 ​
       var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
 ​
       // remove enemy's health by subtracting the amount we set in the damage variable
       enemy.health = Math.max(0, enemy.health - damage);
       console.log(
         playerInfo.name +
           " attacked " +
           enemy.name +
           ". " +
           enemy.name +
           " now has " +
           enemy.health +
           " health remaining."
       );
 ​
       // check enemy's health
       if (enemy.health <= 0) {
         window.alert(enemy.name + " has died!");
 ​
         // award player money for winning
         playerInfo.money = playerInfo.money + 20;
 ​
         // leave while() loop since enemy is dead
         break;
       } else {
         window.alert(enemy.name + " still has " + enemy.health + " health left.");
       }
       // player gets attacked first
     } else {
       var damage = randomNumber(enemy.attack - 3, enemy.attack);
 ​
       // remove enemy's health by subtracting the amount we set in the damage variable
       playerInfo.health = Math.max(0, playerInfo.health - damage);
       console.log(
         enemy.name +
           " attacked " +
           playerInfo.name +
           ". " +
           playerInfo.name +
           " now has " +
           playerInfo.health +
           " health remaining."
       );
 ​
       // check player's health
       if (playerInfo.health <= 0) {
         window.alert(playerInfo.name + " has died!");
         // leave while() loop if player is dead
         break;
       } else {
         window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
       }
     }
     // switch turn order for next round
     isPlayerTurn = !isPlayerTurn;
   }  
};
var getPlayerName = function(){
  var name = "";
    while(name === "" || name === null){
      name = prompt("What is your robot's name?");
    }

  console.log("Your robot's name is " + name);
  return name;
}
var playerInfo = {
  name: getPlayerName,
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >= 7){
      this.health += 20;
      this.money -= 7;  
    }
    else{
      window.alert ("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber( 10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber( 10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber( 10, 14)
  }
];
var startGame = function() {
  
  // reset player stats
  playerInfo.reset();
for(var i = 0; i < enemyInfo.length.length; i++) {
  if(playerInfo.health > 0) {
    window.alert("welcome to Robot Gladiaors! Round " + (i + 1));
    debugger
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    //debugger;
    fight(pickedEnemyObj);
    // if we're not at the last enemy in the array
    if(playerInfo.health > 0 && i<enemyNames.length - 1){
      var storeConfirm = window.confirm("the fight is over, vist the shop before the next round?");
      // if yes, take them to store fuction
      if(storeConfirm){
        shop();
      }
    
    }
  }
  else {
     window.alert("You have lost your robot in battle! Game Over!");
    }
    endGame();
  }

  //start the game when the page loads
  startGame();
}
startGame();
//funtion to end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  // if player have more money than the high score, player has new high score!
  if (playerInfo.money > highScore) {
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  } 
  else {
    alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } 
  else {
    window.alert("Thank you for playing Battlebots! Come back soon!");
  }
};
}

}