
class Person {
    // name: string;
    // private address: string;

    // Equivalente a lo de arriba, pero más corto. Si se pone "private" o "public" en el constructor, se crea automáticamente la propiedad en la clase.
    // Esto en Angular se usa mucho, especialmente en los servicios para inyectar dependencias.
    constructor(public name: string, private address: string = 'Unknown') {}
}

const iroman = new Person('Ironman', 'New York 1234');

console.log(iroman);