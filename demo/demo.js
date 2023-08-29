const inquirer = require("inquirer")

// properties - things that an obj has

// methods = actions that can be done by the obj or to the obj


var car1 = {
    color: "black",
    brand: "Subaru",
    start: function() {
        console.log("The black car has started")
    },
    driveForward: function() {
        console.log("The black car is moving forward")
    }
};

var car2 = {
    color: "red",
    brand: "Toyota",
    start: function() {
        console.log("The red car has started")
    },
    driveForward: function() {
        console.log("The red car is moving forward")
    }
};

// 

inquirer.prompt([
    {
        type: "list",
        name: "car",
        message: "Which car?",
        choices: [
            "Car 1",
            "Car 2"
        ]
    },
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "Start the car",
            "Move the car forward",
            "Inspect the car"
        ]
    }
])
.then(({action, car}) => {
    var selectedCar;

    if( car == "Car 1") {
        selectedCar = car1;
    } else {
        selectedCar = car2;
    }


    if(action == "Start the car") {
        selectedCar.start()
    }
    if(action == "Move the car forward") {
        selectedCar.driveForward()
    }
    if(action == "Inspect the car") {
        console.log("The color of the car is " + selectedCar.color);
        console.log("The brand of the car is " + selectedCar.brand)
    }
})


