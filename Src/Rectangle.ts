import { Color } from './Color';
import { Shape } from './Shape';
export class Rectangle extends Color implements Shape{
    constructor(private width:number,private height:number){
        super("red",false)
    }
    getArea(): number {
        return this.width * this.height
    }
    getPerimeter(): number{
        return 2* (this.width + this.height)
    }
    getDetail():string{
        return `รูปสี่เหลี่ยมผืนผ้า: ขนาด ${this.width} x ${this.height} ซม.`
    }
}