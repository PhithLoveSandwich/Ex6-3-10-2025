import { ElectricVehicle } from './ElectricVehicle';
import { Vehicle } from "./Vehicle";
export class Car extends Vehicle implements ElectricVehicle{
    start(): void{
    }
    stop(): void{
    }
    chargeBattery(): void{
    }
}