"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    //  private name:string;
    //  private salary:number;
    //  constructor(name:string,salary:number){
    //      this.name = name;
    //      this.salary = salary;
    //  }
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.name = name;
        this.salary = salary;
    }
    getDetail() {
        return `${this.name} ได้รับเงินเดือน: ${this.salary} $.`;
    }
}
exports.Employee = Employee;
