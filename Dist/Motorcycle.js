"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = void 0;
const Vehicle_1 = require("./Vehicle");
class Motorcycle extends Vehicle_1.Vehicle {
    start() {
        console.log(`Motorcycle ${this.brand} ${this.model} is starting.`);
    }
    stop() {
        console.log(`Motorcycle ${this.brand} ${this.model} is stopping.`);
    }
    chargeBattery() {
        console.log(`Charging the battery of ${this.brand} ${this.model}.`);
    }
}
exports.Motorcycle = Motorcycle;
