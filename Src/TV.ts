import { Device } from './Device';
export class TV implements Device{
    constructor(protected name:string){}
    turnOn():void{
        console.log("เปิดทีวี")
    }
    turnOff():void{
        console.log("ปิดทีวี")
    }
}