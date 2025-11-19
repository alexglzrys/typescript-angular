// Importación de tipos y funciones desde otro módulo
import type { Product } from "./06-function-destructuring";
import { taxCalculation } from "./06-function-destructuring";


const shopingCart: Product[] = [
    {
        description: 'Zapatos Nike',
        price: 1500
    },
    {
        description: 'iPhone 18 Ultra',
        price: 29000
    }
];

const [total, tax] = taxCalculation({ products: shopingCart, tax: 0.15 });

console.log('Total a pagar:', total);
console.log('Impuesto:', tax);