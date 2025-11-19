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

const resultAdd = addNumbers(5, 10);
const resultAddArrow = addNumbersArrow(7, 3);
const resultMultiply = multiplyNumbers(2);

console.log({ resultAdd, resultAddArrow, resultMultiply });
