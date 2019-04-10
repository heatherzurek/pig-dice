function Player(id) {
  this.playerId = id,
  this.PlayerName = playerName,
  this.diceRoll = 0,
  this.turnScore = 0,
  this.totalScore = 0,
  this.active = false,
}

//Player1, Player2
//click roll to roll #
// take # put it below the active player
// adds numbers below together
// click hold to move total into scorecard
// switch player ability

// Player.prototype.score = function(score) {
//   this.score += score;
// }

//to create our two players
var playerOne = new Player(1);
var playerTwo = new Player(2);
playerOne.active = true;



function diceRoll() {
  var roll = Math.floor(Math.random()*6) + 1;
  return roll;
  // check active player
  if (playerOne.active === true) {
    //do all this to p1
    //if roll === 1: turnScore = 0, active = false & other player active = true
    // put roll in playerOne.diceRoll
    // add that number to playerOne.turnScore
  } else if (playerTwo.active === true) {
    // do all this to p2
    //if roll === 1: turnScore = 0, active = false & other player active = true
    // put roll in playerTwo.diceRoll
    // add that number to playerTwo.turnScore
  }

}

//CLICK HOLD
// take turnScore and add to totalScore
// if totalScore > 100 YOU WIN!
// else
// switch status to inactive
// switch other player to active



//   if (roll == 1 ) {
//   this.diceRoll == 1;
//   this.turnScore == 0;
// } else {
//   this.discRoll == roll;
//   this.turnScore += roll;
// };
// }

function attachRollListeners() {
  $("#roll").on("click", function() {
    var result = diceRoll();
    $("#results").text(result);
  });
}

//front end business
$(document).ready(function() {
  attachRollListeners();
  $("#piggieDice").submit(function(event) {
    event.preventDefault();

  });
});
