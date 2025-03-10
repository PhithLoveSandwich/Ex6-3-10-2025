import { Flyable } from './Flyable';
import { Vehicle } from "./Vehicle";
export class FlyingCar extends Vehicle implements Flyable{
    start(): void{
    }
    stop(): void{
    }
    fly():void{
    }
}