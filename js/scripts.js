function Player(player, score) {
  this.player = player,
  this.active = true,
  this.score = 0
}

var playerOne = new Player();
var playerTwo = new Player();

function diceRoll() {
  var roll = Math.floor(Math.random()*6) + 1;
  return roll;
  console.log(roll);
}

function attachRollListeners() {
  $("#roll").on("click", function() {
    var result = diceRoll();
    console.log(result);
  });
  return diceRoll();
}

//front end business
$(document).ready(function() {
  attachRollListeners();
  $("#piggieDice").submit(function(event) {
    event.preventDefault();

    $("#results").text(output);

  });
});
