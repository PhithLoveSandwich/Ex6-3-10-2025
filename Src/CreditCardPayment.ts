import { Payment } from './Payment';
export class CreditCardPayment implements Payment{
    constructor(protected name:string){}
    pay(amount: number):void{
    console.log(`${this.name} คุณได้ทำการชำระด้วยเงินสดสำเร็จด้วยจำนวน ${amount} ด้วยบัตรของ Credit Card.`)
    }
}