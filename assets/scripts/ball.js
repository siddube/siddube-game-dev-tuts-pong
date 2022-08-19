// Ball class
class Ball {
  constructor() {
    this.size = 32;
    this.c = color(255, 0, 255);
    this.location = new createVector(canvas.width / 2, canvas.height / 2);
    this.velocity = new createVector(-10, 10);
    this.moveBall = false;
  }
  // Draw, Move and Check Vertical Collisions
  run() {
    this.draw();
    this.move();
    this.checkVerticalBounds();
  }
  // Draw ball
  draw() {
    fill(this.c);
    ellipse(this.location.x, this.location.y, this.size);
  }
  // Move ball
  move() {
    if (this.moveBall)
      this.location.add(this.velocity);
  }
  // Check upper and lower bounds
  // Change ball direction to bounce off vertical bounds
  checkVerticalBounds() {
    if (this.location.y < 0 + this.size / 2 || this.location.y > canvas.height - this.size / 2)
      this.velocity.y *= -1;
  }
  // Check collision with paddles
  // Accepts paddles as input
  // Checks collision with simple rectangle collision
  checkColiision(paddle) {
    let paddleBallX = paddle.location.x + paddle.width;
    if (paddle.playerType === 'computer')
      paddleBallX = paddle.location.x - paddle.width;
    if (paddleBallX === this.location.x && paddle.location.y - this.location.y > -paddle.height / 2 && paddle.location.y - this.location.y < paddle.height / 2) {
      this.velocity.x *= -1;
    }
  }
}
