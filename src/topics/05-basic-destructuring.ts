interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 360,
    song: "La cumbia del perrito",
    details: {
        author: "Grupo Cumbia",
        year: 2020
    }
}

// Desestructructurar parte del objeto audioPlayer en constantes individuales con nombres diferentes
// song -> name
// songDuration -> duration
// details
const {song: name, songDuration: duration, details} = audioPlayer;
// author -> artist
const {author: artist} = details;


console.log('Song:', name);
console.log('Duration:', duration);
console.log('Author:', artist);


// Desestructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3, p4 = 'No hay personaje'] = dbz; // Valor por defecto para p4 si no existe
const [, , personaje3] = dbz; // Saltar elementos con comas 
const [primero, ...resto] = dbz; // Operador rest, para obtener el resto de los elementos del arreglo

console.log('Personajes: ', p1, p2, p3, p4);
console.log('Tercer personaje: ', personaje3);
console.log('Personaje principal: ', primero);
console.log('Resto de los personajes: ', resto);