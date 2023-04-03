class Point {
  constructor(x, y, icon) {
    this.x = x;
    this.y = y;
    this.icon = icon;
  }

  draw() {
    console.log(`${this.icon.getType()} at (${this.x}, ${this.y})`);
  }
}
