"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullTimeEmployee = void 0;
const employee_1 = require("./employee");
class FullTimeEmployee extends employee_1.Employee {
    calculateBonus() {
        return this.salary * 0.1;
    }
}
exports.FullTimeEmployee = FullTimeEmployee;
