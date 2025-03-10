import { Device } from './Device';
export class Radio implements Device{
    constructor(protected name:string){}
    turnOn():void{
        console.log("เปิดวิทยุ")
    }
    turnOff():void{
        console.log("ปิดวิทยุ")
    }
}