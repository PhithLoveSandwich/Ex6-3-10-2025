import { ElectricVehicle } from './ElectricVehicle';
import { Vehicle } from "./Vehicle";
export class Motorcycle extends Vehicle implements ElectricVehicle{
    start(): void {
        console.log(`Motorcycle ${this.brand} ${this.model} is starting.`);
    }
    stop(): void {
        console.log(`Motorcycle ${this.brand} ${this.model} is stopping.`);
    }
    chargeBattery(): void {
        console.log(`Charging the battery of ${this.brand} ${this.model}.`);
    }
}