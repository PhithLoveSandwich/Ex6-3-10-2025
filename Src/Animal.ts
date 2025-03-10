export abstract class Animal{
    constructor(protected name:string){}

    abstract makeSound():string;

    getDetail():string{
        return `สัตว์เลี้ยงชื่อ: ${this.name}.`
    }
}