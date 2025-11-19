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

