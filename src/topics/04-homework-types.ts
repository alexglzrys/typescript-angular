/*
    ===== Código de TypeScript =====
*/

// Si un objeto tiene una propiedad que es a su vez otro objeto, es recomendable definir una interface para ese objeto interno
interface Address {
    street: string;
    country: string;
    city: string;
}

// En typescript cada objeto debe cumplir con la estructura definida en la interface
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    // showAddress es un método que no recibe argumentos y retorna un string
    showAddress: () => string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};