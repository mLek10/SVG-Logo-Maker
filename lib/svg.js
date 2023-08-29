class SVG {
    // properties
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }

    // methods
    generate() {
        return `
<svg height="200" width="200">
${this.shape.generate()}
${this.text.generate()}
</svg> 
        `

    }
}

module.exports = SVG;