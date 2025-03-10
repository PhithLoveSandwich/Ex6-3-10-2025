import { Employee } from "./employee";
export class FullTimeEmployee extends Employee {
    calculateBonus(): number{
        return this.salary * 0.1;
    }
}