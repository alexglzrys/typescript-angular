function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => `${a + b}`;

function multiplyNumbers(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

// const resultAdd = addNumbers(5, 10);
// const resultAddArrow = addNumbersArrow(7, 3);
// const resultMultiply = multiplyNumbers(2);

// console.log({ resultAdd, resultAddArrow, resultMultiply });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
};

const vegueta: Character = {
  name: "Vegueta",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  }
};

healCharacter(vegueta, 20);
healCharacter(vegueta, 5);

vegueta.showHp();