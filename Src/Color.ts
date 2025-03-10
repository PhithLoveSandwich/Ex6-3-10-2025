export abstract class Color{
    protected color:string
    protected filled:boolean
    constructor(color:string,filled:boolean){
        this.color = color
        this.filled = filled
    }
    setColor(color:string):void{
        this.color = color
    }
    getColor():string{
        return this.color
    }
    setFilled(filled:boolean):void{
        this.filled = filled
    }
    getFilled():boolean{
        return this.filled
    }
}