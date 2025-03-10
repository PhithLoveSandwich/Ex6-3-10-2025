"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Color_1 = require("./Color");
class Circle extends Color_1.Color {
    constructor(radian) {
        super("white", false);
        this.radian = radian;
    }
    getArea() {
        return Math.PI * this.radian * this.radian;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radian;
    }
    getDetail() {
        return `รูปทรงวงกลม: ขนาดรัศมี ${this.radian} ซม.`;
    }
}
exports.Circle = Circle;
