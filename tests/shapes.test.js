const Circle = require('../lib/shape').Circle;

describe('Circle class', () => {
    it('generates SVG code with correct attributes', () => {
        const circle = new Circle();
        circle.setColor('green');

        const expectedSvg = `<circle cx="100" cy="150" r="95" fill="green" />`;
        const generatedSvg = circle.generate();

        // Define a regex pattern to match attribute-value pairs
        const attributePattern = /(\w+)\s*=\s*"([^"]+)"/g;
        // Extract and compare attributes from both SVG strings
        const expectedAttributes = expectedSvg.match(attributePattern).sort();
        const generatedAttributes = generatedSvg.match(attributePattern).sort();

        expect(generatedAttributes).toEqual(expectedAttributes);
    });
});

const Square = require('../lib/shape').Square;

describe('Square class', () => {
    it('generates SVG code with correct attributes', () => {
        const square = new Square();
        square.setColor('blue');

        const expectedSvg = `<rect width="200" height="200" fill="blue" />`;
        const generatedSvg = square.generate();

        expect(generatedSvg).toEqual(expectedSvg);
    });
});

const Triangle = require('../lib/shape').Triangle;

describe('Triangle class', () => {
    it('generates SVG code with correct attributes', () => {
        const triangle = new Triangle();
        triangle.setColor('red');

        const expectedSvg = `<polygon points="100, 0 200, 200 0, 200" fill="red" />`;
        const generatedSvg = triangle.generate();

        expect(generatedSvg).toEqual(expectedSvg);
    });
});
