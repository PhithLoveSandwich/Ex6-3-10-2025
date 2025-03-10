export abstract class Employee {
  //  private name:string;
  //  private salary:number;
  //  constructor(name:string,salary:number){
  //      this.name = name;
  //      this.salary = salary;
  //  }

    constructor(protected name:string, protected salary:number){
        this.name = name;
        this.salary = salary;
    }

    getDetail():string{
        return `${this.name} ได้รับเงินเดือน: ${this.salary} $.`
    }

    abstract calculateBonus(): number;
}