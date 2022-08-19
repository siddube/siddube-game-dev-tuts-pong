// Paddle class
class Paddle {
  constructor(playerType) {
    this.playerType = playerType;
    this.width = 20;
    this.height = 150;
    this.c = color(255, 255, 0)
    if (this.playerType === 'player')
      this.location = new createVector(this.width, canvas.height / 2);
    else {
      this.location = new createVector(canvas.width - this.width, canvas.height / 2);
      this.aiSpeedY = 7.6;
      this.aiMoveBallX = 50;
    }
  }

  // Run function
  run() {
    this.draw();
  }

  // Draw function
  draw() {
    fill(this.c);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

  // Move player - set to mouseY
  playerMove() {
    this.location.y = mouseY;
  }

  // Move AI paddle
  // Accepts ball as input
  // AI for paddle simply calculates ball position and updates its vertical position
  // Tweak aiSpeedY variable for AI Difficulty - Easy <= 6 - Medium >= 7 - Hard >= 8 
  aiMove(ball) {
    if (ball.location.x > canvas.width / 2 - this.aiMoveBallX) {
      if (this.location.y - ball.location.y > 0 && this.location.y < canvas.height)
        this.location.add(0, -this.aiSpeedY);
      else if (this.location.y - ball.location.y < 0 && this.location.y > 0)
        this.location.add(0, this.aiSpeedY);
    }
  }
}
