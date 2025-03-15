"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    start() {
        console.log(`Car ${this.brand} ${this.model} is starting.`);
    }
    stop() {
        console.log(`Car ${this.brand} ${this.model} is stopping.`);
    }
    chargeBattery() {
        console.log(`Charging the battery of ${this.brand} ${this.model}.`);
    }
}
exports.Car = Car;
