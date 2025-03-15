import { Flyable } from './Flyable';
import { Vehicle } from "./Vehicle";
export class FlyingCar extends Vehicle implements Flyable{
    start(): void {
        console.log(`FlyingCar ${this.brand} ${this.model} is starting.`);
    }
    stop(): void {
        console.log(`FlyingCar ${this.brand} ${this.model} is stopping.`);
    }
    fly():void{
            console.log(`FlyingCar ${this.brand} ${this.model} is flying.`);
        }
}