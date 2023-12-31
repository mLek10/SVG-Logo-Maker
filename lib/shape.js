class Shape {
  constructor() {
    this.color = ''; // Initialize the color property
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  generate() {
    return `<polygon points="100, 0 200, 200 0, 200" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  generate() {
    return `<circle cx="100" cy="150" r="95"  fill="${this.color}" />`;
  }
}

class Square extends Shape {
  generate() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square
}