// Global variables
let ball;
let paddleOne;
let paddleTwo;
let canvas;
let playerOneScore = 0;
let playerTwoScore = 0;
let startButton;
let restartButton;
let paddleHeightMid;
let numGoalsToWin = 3;

// P5.js - Setup function - Called at game init 
function setup() {
  canvas = createCanvas(900, 600);
  background(51, 119, 255);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  textFont('Verdana');
  ball = new Ball();
  paddleOne = new Paddle('player');
  paddleTwo = new Paddle('computer');
  startButton = new Button('START');
  restartButton = new Button('RESTART');
  restartButton.hide();
  paddleHeightMid = paddleOne.height / 2;
}

// P5.js - Draw function - Called at every frame
// Responsible for calling "run" functions on paddles and ball
// Calls collision on ball - Passes paddles as input
// Handles GUI and game logic
function draw() {
  background(51, 119, 255);
  drawCourt();
  ball.run();
  ball.checkColiision(paddleOne);
  ball.checkColiision(paddleTwo);
  paddleOne.run();
  paddleTwo.run();
  paddleTwo.aiMove(ball);
  startButton.run();
  restartButton.run();
  updateDrawScore();
  checkGoalScored();
  checkWin();
}

// P5.js - Event Listener - Move Mouse - Called at every frame 
function mouseMoved() {
  if (mouseY < height - paddleHeightMid && mouseY > 0 + paddleHeightMid) {
    paddleOne.playerMove();
  }
}

// P5.js - Event Listener - Move Click - Called at every frame
function mouseClicked() {
  if (startButton.ifClicked(mouseX, mouseY)) {
    runGame();
  }
  if (restartButton.ifClicked(mouseX, mouseY)) {
    restartGame();
  }
}

// Draw court with P5.js shapes and colours
function drawCourt() {
  fill(255);
  stroke(255);
  strokeWeight(3);
  line(canvas.width / 2, 0, canvas.width / 2, canvas.height);
  noFill();
  circle(canvas.width / 2, canvas.height / 2, 100);
  noStroke();
}

// Update score on goals score
function updateDrawScore() {
  fill(255);
  textSize(20);
  text(`Score: ${playerOneScore}`, 70, 30);
  text(`Score: ${playerTwoScore}`, canvas.width - 70, 30);
}

// Check if ball is off canvas and hence a goal is scored
function checkGoalScored() {
  if (ball.location.x < 0) {
    playerTwoScore++;
    pauseGame();
  }
  if (ball.location.x > canvas.width) {
    playerOneScore++;
    pauseGame();
  }
}

// Check if player or AI won game
function checkWin() {
  if (playerOneScore >= numGoalsToWin)
    displayWin('Player');
  if (playerTwoScore >= numGoalsToWin)
    displayWin('Computer');
}

// Display on game completion
function displayWin(winner) {
  textSize(32);
  text(`${winner} wins!`, canvas.width / 2, canvas.height / 2 - 100);
  ball.moveBall = false;
  ball.location.x = canvas.width / 2;
  ball.location.y = canvas.height / 2;
  startButton.hide();
  restartButton.show();
}

// Run game utility function
function runGame() {
  ball.moveBall = true;
  startButton.hide();
}

// Pause game utility function
function pauseGame() {
  ball.location.x = canvas.width / 2;
  ball.location.y = canvas.height / 2;
  ball.moveBall = false;
  startButton.show();
}

// Restart game utility function
function restartGame() {
  ball.location.x = canvas.width / 2;
  ball.location.y = canvas.height / 2;
  ball.moveBall = true;
  playerOneScore = 0;
  playerTwoScore = 0;
  restartButton.hide();
}
