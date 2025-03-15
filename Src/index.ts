import { PartTimeEmployee } from "./PartTimeEmployee";
import { FullTimeEmployee } from "./FullTimeEmployee";

const Em1 = new FullTimeEmployee("Mr.John Doe",35000);
const Em2 = new PartTimeEmployee("Mr.Jane Doe",15000);
console.log()
console.log("--------------------------------------------------");
console.log(Em1.getDetail());
console.log(`Full time Bonus: ${Em1.calculateBonus()} $.`)
console.log(Em2.getDetail());
console.log(`Part time Bonus: ${Em2.calculateBonus()} $.`)
console.log("--------------------------------------------------");
console.log()
import { Animal } from "./Animal";
import { Cat } from "./Cat";
import { Dog } from "./Dog";
const dog1 = new Dog("Tim")
const cat1 = new Cat("End")
console.log("--------------------------------------------------");
console.log(`หมาตัวนี้คือ: ${dog1.getDetail()}`)
console.log(`หมาทำเสียง: ${dog1.makeSound()}`)
console.log(`แมวตัวนี้คือ: ${cat1.getDetail()}`)
console.log(`แมวทำเสียง: ${cat1.makeSound()}`)
console.log("--------------------------------------------------");
console.log()
import { Rectangle } from "./Rectangle";
import { Color } from "./Color";
const Rec1 = new Rectangle(10,20);
Rec1.setColor("Blue");
Rec1.setFilled(true);
console.log("--------------------------------------------------");
console.log(Rec1.getDetail())
console.log(`สี: ${Rec1.getColor()}`)
console.log(`ระบายสี: ${Rec1.getFilled()}`)
console.log(`พื้นที่ของสี่เหลี่ยมผืนผ้า: ${Rec1.getArea()} ตร.ซม.`)
console.log(`เส้นรอบวงของสี่เหลี่ยมผืนผ้า: ${Rec1.getPerimeter()} ซม.`)
console.log(Rec1.draw())
console.log("--------------------------------------------------");
console.log()
import { Circle } from "./Circle";
const Cir1 = new Circle(5);
Cir1.setColor("Green");
Cir1.setFilled(true);
console.log("--------------------------------------------------");
console.log(Cir1.getDetail())
console.log(`สี: ${Cir1.getColor()}`)
console.log(`ระบายสี: ${Cir1.getFilled()}`)
console.log(`พื้นที่ของวงกลม: ${Cir1.getArea()} ตร.ซม.`)
console.log(`เส้นรอบวงของวงกลม: ${Cir1.getPerimeter()} ซม.`)
console.log(Cir1.draw())
console.log("--------------------------------------------------");
console.log()

import { Radio } from './Radio';
import { TV } from './TV';
const Rad = new Radio("LG Radio");
const T = new TV("LGTV+");
console.log("--------------------------------------------------");
console.log(Rad)
Rad.turnOn()
Rad.turnOff()
console.log(T)
Rad.turnOn()
Rad.turnOff()
console.log("--------------------------------------------------");
console.log()

import { PayPalPayment } from "./PayPalPayment";
import { CreditCardPayment } from "./CreditCardPayment";
const P1 = new PayPalPayment("John Doe");
const C1 = new CreditCardPayment("Jane Doe");
console.log("--------------------------------------------------");
console.log(P1)
P1.pay(1000);
console.log(C1)
C1.pay(1000);
console.log("--------------------------------------------------");
console.log()

import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";
import { FlyingCar } from "./FlyingCar";

const car = new Car("Tesla", "Model S");
const bike = new Motorcycle("Yamaha", "MT-07");
const flyingCar = new FlyingCar("AirCar", "X1");

console.log("--------------------------------------------------");
console.log(car.getDetails());
car.start();
car.stop();
car.chargeBattery();
console.log()
console.log(bike.getDetails());
bike.start();
bike.stop();
bike.chargeBattery();
console.log()
console.log(flyingCar.getDetails());
flyingCar.start();
flyingCar.fly();
flyingCar.stop();
console.log("--------------------------------------------------");
console.log()
