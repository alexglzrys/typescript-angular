let skills: string[] = ["Bash", "Counter Strike", "Healing", "Sword Mastery"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const goku: Character = {
  name: "Goku",
  hp: 100,
  skills: ["Kamehameha", "Genki Dama", "Kaioken"],
};

goku.hometown = "Earth";

console.table(goku);
