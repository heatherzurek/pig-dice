function Player(player, score) {
  this.score = 0,
  active = false,
  id = 0
}

var playerOne = new Player();
var playerTwo = new Player();
playerOne.active = true;
playerOne.id = 1;
playerTwo.active = false;
playerTwo.id = 2;

function diceRoll() {
  var roll = Math.floor(Math.random()*6) + 1;
  return roll;
  console.log(roll);
}

function attachRollListeners() {
  $("#roll").on("click", function() {
    var result = diceRoll();
    $("#results").text(result);
  });
  return diceRoll();
}

//front end business
$(document).ready(function() {
  attachRollListeners();
  $("#piggieDice").submit(function(event) {
    event.preventDefault();

  });
});
