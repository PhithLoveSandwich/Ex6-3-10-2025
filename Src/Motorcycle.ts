import { ElectricVehicle } from './ElectricVehicle';
import { Vehicle } from "./Vehicle";
export class Motorcycle extends Vehicle implements ElectricVehicle{
    start(): void{
    }
    stop(): void{
    }
    chargeBattery(): void{
    }
}