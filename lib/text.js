class Text {
    constructor(color, content) {
        this.color = color;
        this.content = content;
    }


    generate() {
        return `<text x="50%" y="50%" text-anchor="middle" font-size="25" fill="${this.color}">${this.content}</text>`
    }
}

module.exports = Text