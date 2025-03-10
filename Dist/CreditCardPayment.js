"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
class CreditCardPayment {
    constructor(name) {
        this.name = name;
    }
    pay(amount) {
        console.log(`${this.name} คุณได้ทำการชำระด้วยเงินสดสำเร็จด้วยจำนวน ${amount} ด้วยบัตรของ Credit Card.`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
