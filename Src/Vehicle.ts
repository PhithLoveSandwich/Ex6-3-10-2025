export abstract class Vehicle {
    protected brand: string;
    protected model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    abstract start(): void;
    abstract stop(): void;

    getDetails(): string {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}
