
class Person {
    // name: string;
    // private address: string;

    // Equivalente a lo de arriba, pero más corto. Si se pone "private" o "public" en el constructor, se crea automáticamente la propiedad en la clase.
    constructor(public name: string, private address: string = 'Unknown') {}
}

/*
// Extender una clase
class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public habilities: string[],
        // Parámetros del constructor de la clase padre. No es necesario poner "public" o "private" aquí, ya que no se crean nuevas propiedades en esta clase.
        name: string,
        address: string = 'Unknown'
    ) {
        // Llamar al constructor de la clase padre, y pasar los parámetros necesarios
        super(name, address);
    }
}
*/

// Priorizar composición sobre herencia (Inyectar una instancia de Person en Hero)
// Esto en Angular se usa mucho, especialmente en los servicios para inyectar dependencias.
class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public habilities: string[],
        public person: Person
    ) {}
}

const iroman = new Person('Ironman', 'New York 1234');
// const goku = new Hero('Goku', 40, ['Kamehameha', 'Genkidama'], 'Kakarotto', 'Planet Vegeta');

const personaje = new Person('Kakarotto', 'Planet Vegita');
const goku = new Hero('Goku', 40, ['Kamehameha', 'Genkidama'], personaje);

console.log(iroman);
console.log(goku);