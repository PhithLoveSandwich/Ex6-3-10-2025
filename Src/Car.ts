import { ElectricVehicle } from './ElectricVehicle';
import { Vehicle } from "./Vehicle";
export class Car extends Vehicle implements ElectricVehicle{
    start(): void {
        console.log(`Car ${this.brand} ${this.model} is starting.`);
    }
    stop(): void {
        console.log(`Car ${this.brand} ${this.model} is stopping.`);
    }
    chargeBattery(): void {
        console.log(`Charging the battery of ${this.brand} ${this.model}.`);
    }
}