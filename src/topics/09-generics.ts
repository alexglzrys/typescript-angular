
// Los genéricos en TypeScript permiten crear componentes reutilizables que funcionan con una variedad de tipos de datos en lugar de un solo tipo. Aquí hay un ejemplo simple de una función genérica que toma un argumento de cualquier tipo y lo devuelve:
function whatsMyType<T>( argument: T ): T {
    return argument;
}

// Usando la función genérica con diferentes tipos de datos. <T> especifica el tipo que estamos pasando a la función.
let amIString = whatsMyType<string>( "Hello World" );
let amINumber = whatsMyType<number>( 42 );
let amIBoolean = whatsMyType<boolean>( true );
let amIArray = whatsMyType<number[]>( [1, 2, 3, 4, 5] );

console.log( typeof amIString );  // string
console.log( typeof amINumber );  // number
console.log( typeof amIBoolean ); // boolean
console.log( typeof amIArray );   // object

console.log( amIString.split( " " ) );
console.log( amINumber.toFixed( 2 ) );
console.log( amIBoolean.valueOf() );
console.log( amIArray.join( "-" ) );