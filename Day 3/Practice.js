// Parent class
class Vehicle {
    constructor(speed, color) {
        this.speed = speed;
        this.color = color;
    }

    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    drive() {
        console.log(`Driving at ${this.speed} km/h.`);
    }
}

// Child class
class Car extends Vehicle {
    constructor(speed, color, mileage) {
        super(speed, color); // Call the parent class constructor
        this.mileage = mileage;
    }

    setSpeed(newSpeed) {
        super.setSpeed(newSpeed); // Call the parent class method
        console.log(`Car speed set to ${this.speed} km/h.`);
    }

    drive() {
        super.drive(); // Call the parent class method
        console.log(`Car with mileage ${this.mileage} km/l is driving.`);
    }
}

// Example usage
const myCar = new Car(100, 'red', 15);
console.log(`Car color: ${myCar.color}`);
myCar.setSpeed(120);
myCar.drive();
