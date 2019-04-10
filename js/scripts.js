function Player(id) {
  this.playerId = id,
  this.diceRoll = 0,
  this.turnScore = 0,
  this.totalScore = 0,
  this.active = false
}

function game() {
  this.currentPlayer = "playerOne"
}

function pressHold() {
  $('#hold').on('click', function() {
    playerOne.totalScore += playerOne.turnScore;
  });
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

Player.prototype.diceRoll = function() {
  var roll = Math.floor(Math.random()*6) + 1;
  this.turnScore += roll;
  // check active player x
  // if(playerOne.active === true) {
  //   if(roll === 1) {
  //     playerOne.turnScore = 0;
  //     playerOne.active = false;
  //     playerTwo.active = true;
  //   } else if(roll !== 1) {
  //     playerOne.turnScore += roll;
  //   } else {
  //
  //   }
  //   //do all this to p1 x
  //   //if roll === 1: turnScore = 0, active = false & other player active = true  x
  //   // put roll in playerOne.diceRoll/turnscore  x
  //   // add that number to playerOne.turnScore
  // } else if (playerTwo.active === true) {
  //     if (roll === 1) {
  //       playerTwo.turnScore = 0;
  //       playerTwo.active = false;
  //       playerOne.active = true;
  //     }
    // do all this to p2 x
    //if roll === 1: turnScore = 0, active = false & other player active = true x
    // put roll in playerTwo.diceRoll
    // add that number to playerTwo.turnScore
  // }

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
