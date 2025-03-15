"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyingCar = void 0;
const Vehicle_1 = require("./Vehicle");
class FlyingCar extends Vehicle_1.Vehicle {
    start() {
        console.log(`FlyingCar ${this.brand} ${this.model} is starting.`);
    }
    stop() {
        console.log(`FlyingCar ${this.brand} ${this.model} is stopping.`);
    }
    fly() {
        console.log(`FlyingCar ${this.brand} ${this.model} is flying.`);
    }
}
exports.FlyingCar = FlyingCar;
