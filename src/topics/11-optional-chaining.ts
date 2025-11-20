interface Passenger {
    name: string;
    // El símbolo "?" indica que la propiedad es opcional
    children?: string[];
}

const passengerOne: Passenger = {
    name: "Alice",
};

const passengerTwo: Passenger = {
    name: "Bob",
    children: ["Charlie", "Daisy"],
};

const printChildren = (passenger: Passenger): void => {
    // Uso de optional chaining para acceder a la propiedad 'children si existe (?.)
    // Uso de nullish coalescing operator (??) para proporcionar un valor por defecto de 0
    // Se puede usar también el operador lógico OR (||) pero este consideraría falsy values como 0, '', false, etc.
    const childrenCount = passenger.children?.length ?? 0;

    // Existe otra variante usando (!.) non-null assertion operator si estamos seguros que la propiedad existe. Es como indicarle a TypeScript que confíe en nosotros.
    // const childrenCount = passenger.children!.length;

    console.log(`${passenger.name} has ${childrenCount} children.`);
};

printChildren(passengerOne); // Alice has 0 children.
printChildren(passengerTwo); // Bob has 2 children.


