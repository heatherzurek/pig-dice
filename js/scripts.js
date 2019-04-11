function Player() {
  this.diceRoll = 0,  //last rolled die
  this.turnScore = 0, //current score for turn
  this.totalScore = 0 //total score for all turns
}

Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  this.diceRoll = 0;
  $("#player-1-scorecard").toggleClass("active");
  $("#player-2-scorecard").toggleClass("active");
}

Player.prototype.switchTurns = function() {
  myGame.playerTwoTurn = !myGame.playerTwoTurn;
}

Player.prototype.rollDice = function() {
  var roll = Math.floor(Math.random()*6) + 1;
  this.diceRoll = roll;
    if (roll === 1) {
    this.turnScore = 0;
    this.diceRoll = 0;
    myGame.playerTwoTurn = !myGame.playerTwoTurn;
    $("#player-1-scorecard").toggleClass("active");
    $("#player-2-scorecard").toggleClass("active");
    return true;
  } else {
    this.turnScore += roll;
    // this.totalScore += this.turnScore;
  }
}

function Game() {
  this.playerTwoTurn = false;
  this.players = [];
}

Game.prototype.getCurrentPlayer = function() {
  if (this.playerTwoTurn === true ) {
    return this.players[1]
  } else if (this.playerTwoTurn === false ) {
    return this.players[0]
  }
}

var myGame;

//front end business
function attachRollListeners() {
  var turn;
  $("#roll").on("click", function() {
    var player = myGame.getCurrentPlayer();
    if (myGame.playerTwoTurn) {
      turn = "2";
    } else {
      turn = "1";
    }
    if(player.rollDice() === true) {
      alert("You rolled a 1, you lose this turn");
    }
    $("#rollResults").text(player.diceRoll);
    $("#totalResults").text(player.turnScore);
    $("#player-" + turn + "-total-points").text(player.totalScore);
  });
  $("#hold").on("click", function() {
    var player = myGame.getCurrentPlayer();
    //var creates the variable and name it player assign it the value with= value returned by the function getCurrentPlayer, under the myGame object
    player.hold();
    if (player.totalScore >= 10 ) {
      alert("You win!");
    }
    player.switchTurns();
    $("#rollResults").text(player.diceRoll);
    $("#totalResults").text(player.turnScore);
    $("#player-" + turn + "-total-points").text(player.totalScore);
  });
}

$(document).ready(function() {
  myGame = new Game();
  player1 = new Player();
  player2 = new Player();

  myGame.players.push(player1, player2);

  attachRollListeners();
  $("#piggieDice").submit(function(event) {
    event.preventDefault();
  });
});
