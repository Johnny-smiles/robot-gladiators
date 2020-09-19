

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

// Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }  
};
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
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
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];
var startGame = function() {
  debugger
  // reset player stats
  playerInfo.reset();
for(var i = 0; i < enemyInfo.length.length; i++) {
  if(playerInfo.health > 0) {
    window.alert("welcome to Robot Gladiaors! Round " + (i + 1));
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
  if (playerInfo.health > 0){
  window.alert("Great job, you've survived the game! You know have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.")
  }
  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL": // new case
  case "refill":
    playerInfo.refillHealth();
    break;
  case "UPGRADE": // new case
  case "upgrade":
   playerInfo.upgradeAttack();
    break;
  case "LEAVE": // new case
  case "leave":
    window.alert("Leaving the store.");
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
  
};
if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}

}