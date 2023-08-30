class Text {
    constructor(color, content, yAxis) {
        this.color = color;
        this.content = content;
        this.yAxis = yAxis || 45; // Default Y-axis value if not provided
    }

    setYAxis(yAxis) {
        this.yAxis = yAxis;
    }

    generate() {
        return `<text x="50%" y="${this.yAxis}%" text-anchor="middle" font-family="serif" font-size="50" fill="${this.color}">${this.content}</text>`;
    }
}

module.exports = Text