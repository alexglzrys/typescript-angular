interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 1500
}

const tablet: Product = {
    description: 'iPad Air',
    price: 7500
}

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    const { tax, products } = options;
    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}



const shoppingCart = [phone, tablet];
const tax = 0.16;

const [total, taxAmount] = taxCalculation({products: shoppingCart, tax: tax});
console.log('Total:', total);
console.log('Tax:', taxAmount);