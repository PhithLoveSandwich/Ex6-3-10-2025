"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalPayment = void 0;
class PayPalPayment {
    constructor(name) {
        this.name = name;
    }
    pay(amount) {
        console.log(`${this.name} ได้ทำการชำระด้วยเงินสดสำเร็จด้วยจำนวน ${amount}  ด้วยบัตรของ PayPal`);
    }
}
exports.PayPalPayment = PayPalPayment;
