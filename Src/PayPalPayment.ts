import { Payment } from './Payment';
export class PayPalPayment implements Payment{
    constructor(protected name:string){}
    pay(amount: number):void{
    console.log(`${this.name} ได้ทำการชำระด้วยเงินสดสำเร็จด้วยจำนวน ${amount}  ด้วยบัตรของ PayPal`)
    }
}