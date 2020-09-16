var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var penltyDedcut = 2;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// "WIN" - player has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - player robot's heatlh is zero or less


var fight = function(enemyName) {
// Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

// Contiue? prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");
    console.log(promptFight);
// If player choses to fight, then fight.
if (promptFight === "fight" || promptFight === "FIGHT" ) {
  //player attack
    enemyHealth = enemyHealth - playerAttack;
  //player attack log
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

  //enemy attack      
    playerHealth = playerHealth - enemyAttack;
  // enemy attack log
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health reamaining.");

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
} 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

//If player skips, then skip.
} else if (promptFight === "skip" || promptFight === "SKIP") {
  
  //confirm skip
  var confirmSkip = window.confirm("Confirm skip?");
  console.log(window.confirm);
    //if yes(ture), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight! Goodbye!");
      // subtract money
        playerMoney = playerMoney - 2;
    }
      // if no (false), ask question agian by running fight() agian
        else {
          fight ();
        }
    
} else {
  window.alert("You need to pick a valid option. Try agian!");
}

}

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}