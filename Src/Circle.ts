import { Color } from "./Color";
import { Shape } from "./Shape";
export class Circle extends Color implements Shape{
    constructor(private radian:number){
        super("white",false)
    }
    getArea(): number {
        return Math.PI * this.radian * this.radian
    }
    getPerimeter(): number{
        return 2 * Math.PI * this.radian
    }
    getDetail():string{
        return `รูปทรงวงกลม: ขนาดรัศมี ${this.radian} ซม.`
    }
}