"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Color_1 = require("./Color");
class Rectangle extends Color_1.Color {
    constructor(width, height) {
        super("red", false);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    getDetail() {
        return `รูปสี่เหลี่ยมผืนผ้า: ขนาด ${this.width} x ${this.height} ซม.`;
    }
}
exports.Rectangle = Rectangle;
