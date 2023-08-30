const Text = require('../lib/text');

describe('Text class', () => {
    it('generates SVG code correctly', () => {
        const textColor = 'blue';
        const content = 'Hello';
        const yAxis = 45;

        const text = new Text(textColor, content);
        text.setYAxis(yAxis);

        const expectedSvg = `<text x="50%" y="${yAxis}%" text-anchor="middle" font-family="serif" font-size="50" fill="${textColor}">${content}</text>`;

        const generatedSvg = text.generate();

        expect(generatedSvg).toEqual(expectedSvg);
    });
});
