// inquirer package import
const inquirer = require('inquirer');
//file system import
const fs = require("fs");
//classes from shape.js
const { Triangle, Circle, Square } = require("./lib/shape")
const Text = require("./lib/text")
const SVG = require("./lib/svg");
// user prompts
inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter up to three characters for the logo text:',
            validate: function (input) {
                return input.length > 0 && input.length <= 3
                    ? true
                    : 'Please enter up to three characters.';
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose a shape for the logo:',
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (color keyword or hexadecimal number):',
        },
    ])
    .then((answers) => {
        const logoText = answers.logoText;
        const textColor = answers.textColor;
        const shapeType = answers.shapeType;
        const shapeColor = answers.shapeColor;

        // Determine Y-axis value based on shape type
        let textYAxis;

        switch (shapeType) {
            case 'Triangle':
                textYAxis = 45; // Y-axis value for Triangle
                break;
            case 'Circle':
                textYAxis = 55; // Y-axis value for Circle
                break;
            case 'Square':
                textYAxis = 38; // Y-axis value for Square
                break;
        }

        // Create instances based on user input
        const newText = new Text(textColor, logoText, textYAxis);
        let newShape;

        switch (shapeType) {
            case 'Triangle':
                newShape = new Triangle();
                break;
            case 'Circle':
                newShape = new Circle();
                break;
            case 'Square':
                newShape = new Square();
                break;
        }

        newShape.setColor(shapeColor);



        const newLogo = new SVG(newShape, newText)


        const code = newLogo.generate();

        console.log(code)

        // Generate file name based on the shape type
        const fileName = `${shapeType.toLowerCase()}.svg`;

        // Write the generated SVG to the corresponding file
        fs.writeFile(`./examples/${fileName}`, code, function () {
            console.log(`Logo (${shapeType}) has been created and saved as ${fileName}`);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });