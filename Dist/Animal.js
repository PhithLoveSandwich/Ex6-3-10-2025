"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    getDetail() {
        return `สัตว์เลี้ยงชื่อ: ${this.name}.`;
    }
}
exports.Animal = Animal;
