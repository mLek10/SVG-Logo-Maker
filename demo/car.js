class Car {
    // properties
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }

    // methods
    start () {
        console.log("The " + this.color + " car has started")
    }

    driveForward () {
        console.log("The " + this.color + " car is moving forward")
    }
}

var car1 = new Car("black", "Subaru")
var car2 = new Car("red", "Toyota")

car1.driveForward()

