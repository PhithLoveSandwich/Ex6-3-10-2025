"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PartTimeEmployee_1 = require("./PartTimeEmployee");
const FullTimeEmployee_1 = require("./FullTimeEmployee");
const Em1 = new FullTimeEmployee_1.FullTimeEmployee("Mr.John Doe", 35000);
const Em2 = new PartTimeEmployee_1.PartTimeEmployee("Mr.Jane Doe", 15000);
console.log();
console.log("--------------------------------------------------");
console.log(Em1.getDetail());
console.log(`Full time Bonus: ${Em1.calculateBonus()} $.`);
console.log(Em2.getDetail());
console.log(`Part time Bonus: ${Em2.calculateBonus()} $.`);
console.log("--------------------------------------------------");
console.log();
const Cat_1 = require("./Cat");
const Dog_1 = require("./Dog");
const dog1 = new Dog_1.Dog("Tim");
const cat1 = new Cat_1.Cat("End");
console.log("--------------------------------------------------");
console.log(`หมาตัวนี้คือ: ${dog1.getDetail()}`);
console.log(`หมาทำเสียง: ${dog1.makeSound()}`);
console.log(`แมวตัวนี้คือ: ${cat1.getDetail()}`);
console.log(`แมวทำเสียง: ${cat1.makeSound()}`);
console.log("--------------------------------------------------");
console.log();
const Rectangle_1 = require("./Rectangle");
const Rec1 = new Rectangle_1.Rectangle(10, 20);
Rec1.setColor("Blue");
Rec1.setFilled(true);
console.log("--------------------------------------------------");
console.log(Rec1.getDetail());
console.log(`สี: ${Rec1.getColor()}`);
console.log(`ระบายสี: ${Rec1.getFilled()}`);
console.log(`พื้นที่ของสี่เหลี่ยมผืนผ้า: ${Rec1.getArea()} ตร.ซม.`);
console.log(`เส้นรอบวงของสี่เหลี่ยมผืนผ้า: ${Rec1.getPerimeter()} ซม.`);
console.log(Rec1.draw());
console.log("--------------------------------------------------");
console.log();
const Circle_1 = require("./Circle");
const Cir1 = new Circle_1.Circle(5);
Cir1.setColor("Green");
Cir1.setFilled(true);
console.log("--------------------------------------------------");
console.log(Cir1.getDetail());
console.log(`สี: ${Cir1.getColor()}`);
console.log(`ระบายสี: ${Cir1.getFilled()}`);
console.log(`พื้นที่ของวงกลม: ${Cir1.getArea()} ตร.ซม.`);
console.log(`เส้นรอบวงของวงกลม: ${Cir1.getPerimeter()} ซม.`);
console.log(Cir1.draw());
console.log("--------------------------------------------------");
console.log();
const Radio_1 = require("./Radio");
const TV_1 = require("./TV");
const Rad = new Radio_1.Radio("LG Radio");
const T = new TV_1.TV("LGTV+");
console.log("--------------------------------------------------");
console.log(Rad);
Rad.turnOn();
Rad.turnOff();
console.log(T);
Rad.turnOn();
Rad.turnOff();
console.log("--------------------------------------------------");
console.log();
const PayPalPayment_1 = require("./PayPalPayment");
const CreditCardPayment_1 = require("./CreditCardPayment");
const P1 = new PayPalPayment_1.PayPalPayment("John Doe");
const C1 = new CreditCardPayment_1.CreditCardPayment("Jane Doe");
console.log("--------------------------------------------------");
console.log(P1);
P1.pay(1000);
console.log(C1);
C1.pay(1000);
console.log("--------------------------------------------------");
console.log();
const Car_1 = require("./Car");
const Motorcycle_1 = require("./Motorcycle");
const FlyingCar_1 = require("./FlyingCar");
const car = new Car_1.Car("Tesla", "Model S");
const bike = new Motorcycle_1.Motorcycle("Yamaha", "MT-07");
const flyingCar = new FlyingCar_1.FlyingCar("AirCar", "X1");
console.log("--------------------------------------------------");
console.log(car.getDetails());
car.start();
car.stop();
car.chargeBattery();
console.log();
console.log(bike.getDetails());
bike.start();
bike.stop();
bike.chargeBattery();
console.log();
console.log(flyingCar.getDetails());
flyingCar.start();
flyingCar.fly();
flyingCar.stop();
console.log("--------------------------------------------------");
console.log();
