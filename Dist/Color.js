"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
class Color {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    getFilled() {
        return this.filled;
    }
}
exports.Color = Color;
