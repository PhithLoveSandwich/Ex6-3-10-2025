"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}
exports.Vehicle = Vehicle;
