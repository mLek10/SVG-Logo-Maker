const inquirer = require('inquirer');
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shape")
const Text = require("./lib/text")
const SVG = require("./lib/svg");

// Need Constructor function that defines the properties

// function generateLogo

const newText = new Text("red", "ABC");
const newShape = new Square();
newShape.setColor("blue")

const newLogo = new SVG(newShape, newText)


const code = newLogo.generate();

console.log(code)

fs.writeFile("./examples/sample.svg", code, function() {
    console.log("Logo has been created!")
})