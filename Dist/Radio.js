"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
class Radio {
    constructor(name) {
        this.name = name;
    }
    turnOn() {
        console.log("เปิดวิทยุ");
    }
    turnOff() {
        console.log("ปิดวิทยุ");
    }
}
exports.Radio = Radio;
