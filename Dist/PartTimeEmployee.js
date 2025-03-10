"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartTimeEmployee = void 0;
const employee_1 = require("./employee");
class PartTimeEmployee extends employee_1.Employee {
    calculateBonus() {
        return this.salary * 0.05;
    }
}
exports.PartTimeEmployee = PartTimeEmployee;
