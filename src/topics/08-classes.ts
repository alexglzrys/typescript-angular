
class Person {
    name: string;
    private address: string;

    constructor() {
        this.name = "John Doe";
        this.address = "123 Main St";
    }
}

const iroman = new Person();

console.log(iroman);