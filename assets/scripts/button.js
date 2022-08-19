// Button class
class Button {
  constructor(buttonString) {
    this.width = 200;
    this.height = 40;
    this.c = color(255, 0, 255);
    this.buttonString = buttonString;
    this.location = new createVector(canvas.width / 2, canvas.height / 2 + 150);
    this.textLocation = new createVector(this.location.x, this.location.y + 10);
  }

  // Run function
  run() {
    this.draw();
  }

  // Draw button
  draw() {
    textAlign(CENTER);
    fill(255, 255, 0);
    rect(this.location.x, this.location.y, this.width, this.height);
    fill(255, 0, 255);
    textSize(24);
    text(this.buttonString, this.textLocation.x, this.textLocation.y);
  }

  // Check if any button clicked on
  ifClicked(x, y) {
    if (x > this.location.x - this.width && x < this.location.x + this.width && y > this.location.y - this.height && y < this.location.y + this.height)
      return true;
  }

  // Hide Button
  // Push button below canvas
  hide() {
    this.location.y += canvas.height;
    this.textLocation.y += canvas.height;
  }

  // Show button
  // Show button at middle of canvas
  show() {
    this.location.y = canvas.height / 2 + 150;
    this.textLocation.y = this.location.y + 10;
  }
}
