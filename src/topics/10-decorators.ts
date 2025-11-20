// Los decoradores son una característica avanzada de TypeScript que permite modificar clases, métodos, propiedades o parámetros en tiempo de compilación. Se utilizan comúnmente en frameworks como Angular para añadir metadatos o comportamientos adicionales a las clases y sus miembros.
// Es muy raro estar definiendo decoradores manualmente, ya que la mayoría de las veces se utilizan a través de frameworks o librerías que los implementan para facilitar ciertas funcionalidades.
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

// Aplicando el decorador a una clase. 
// Con esto modificamos la clase original para añadir nuevas propiedades provenientes en la definición del decorador.
@classDecorator
class SuperClass {
    public myProperty: string = "Hello World";
    print() {
        console.log("Hola Mundo desde mi SuperClass");
    }
}

console.log(SuperClass);

const myInstance = new SuperClass();
console.log(myInstance);