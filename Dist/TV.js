"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TV = void 0;
class TV {
    constructor(name) {
        this.name = name;
    }
    turnOn() {
        console.log("เปิดทีวี");
    }
    turnOff() {
        console.log("ปิดทีวี");
    }
}
exports.TV = TV;
